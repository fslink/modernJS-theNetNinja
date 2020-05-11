//JSONPLaceHolder

fetch('todos/luigi.json').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
    fetch('todos/soso.json').then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}).catch(err => {
    console.log(err);
});
