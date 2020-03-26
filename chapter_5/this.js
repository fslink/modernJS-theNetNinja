let ul = document.querySelector('#blogs-list');

let user = {
    name: 'Maurice',
    location: 'Bar-Le-Duc',
    age: 48,
    blogs: ['L\'art du saucisson', 'La mergez du rond point', 'être gilet jaune à Bar'],
    email: 'maurice@gmail.com',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        console.log(`The blogs posts of ${this.name}`);
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

user.logBlogs();