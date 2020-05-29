const recipiesList = document.querySelector('ul');

const addRecipie = (recipie) => {
    let title = recipie.data().title;
    let time;

    if(recipie.data().date){
        time = recipie.data().date.toDate();
    } else {
        time = 'no date';
    }
    
    let html = `
        <li>
            <div>${title}</div>
            <div>${time}</div>
        </li>
    `;
    recipiesList.innerHTML += html;
};

db.collection("recipies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        addRecipie(doc);
    });
});