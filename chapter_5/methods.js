let ul = document.querySelector('#blogs-list');

let user = {
    name: 'Maurice',
    location: 'Bar-Le-Duc',
    age: 48,
    blogs: ['L\'art du saucisson', 'La mergez du rond point', 'être gilet jaune à Bar'],
    email: 'maurice@gmail.com',
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    }
};

user.login();
user.logout();
