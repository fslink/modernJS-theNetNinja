//JSONPLaceHolder

const getTodos = (ressource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);

        } else if(request.readyState === 4){
            callback('we could not fetch data', undefined);
        }
        
    });

    request.open('GET', ressource);
    request.send();
};

getTodos('todos/luigi.json', (err, data) => {
    console.log('callback fired !');
    if(data){
        console.log(data);
        getTodos('todos/mario.json', (err, data) => {
            if(data){
                console.log(data);
                getTodos('todos/soso.json', (err, data) => {
                    if(data){
                        console.log(data);
                    }
                });
            }
        });
    }
    
});