const recipiesList = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

const addRecipieUI = recipie => {
    let title = recipie.data().title;
    let time;

    if(recipie.data().date){
        time = recipie.data().date.toDate();

    } else if(recipie.data().created_at) {
        time = recipie.data().created_at.toDate();
       
    } else {
        time = 'no date';
    }
    
    let html = `
        <li data-id="${recipie.id}">
            <div>${title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-3">delete</button>
        </li>
    `;
    recipiesList.innerHTML += html;
};

const deleteRecipieUI = id => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    })
}

//get recipies
const unsub = db.collection('recipies').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added'){
            addRecipieUI(change.doc);

        } else if(change.type === 'removed'){
            deleteRecipieUI(change.doc.id);
        }
    });
})

//add recipes
form.addEventListener('submit', e => {
    e.preventDefault();
    const now = new Date();

    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection("recipies").add(recipe).then(() => {
        console.log("recipie added");
    })
});

//delete recipes
recipiesList.addEventListener('click', e => {
    if(e.target.tagName == 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipies').doc(id).delete().then(() => {
            console.log('document deleted !');
        });
    }
    
});

//unsubsribe live snapshot
button.addEventListener('click', () => {
    unsub();
    console.log('unsubsribe live snapshot');
});