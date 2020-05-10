//JSONPLaceHolder

const getTodos = (ressource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);

            } else if(request.readyState === 4){
                reject('we could not fetch data');
            }
            
        });

        request.open('GET', ressource);
        request.send();
    });
    
};

getTodos('todos/mario.json').then(data => {
    console.log(data);
}, err => {
    console.log(err);
});
