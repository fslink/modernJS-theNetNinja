const blogs = [
    {title: 'L\'art du saucisson', likes: 30},
    {title: 'La mergez du rond point', likes: 5},
    {title: 'être gilet jaune à Bar', likes: 50}
];

console.log(blogs);

let ul = document.querySelector('#blogs-list');
let html = ``;

let user = {
    name: 'Maurice',
    location: 'Bar-Le-Duc',
    age: 48,
    blogs: [
        {title: 'L\'art du saucisson', likes: 30},
        {title: 'La mergez du rond point', likes: 5},
        {title: 'être gilet jaune à Bar', likes: 50}
    ],
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
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();