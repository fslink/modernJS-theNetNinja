const recipiesList = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipieUI = (recipie) => {
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

//get recipies
db.collection("recipies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        addRecipieUI(doc);
    });
});

//add recipies
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

recipiesList.addEventListener('click', e => {
    if(e.target.tagName == 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipies').doc(id).delete().then(() => {
            console.log('element deleted !');
        });
    }
    
})