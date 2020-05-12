//JSONPLaceHolder

const getTodos = async () => {
    const response = await fetch('todos/luigi.json');

    if(response.status !== 200){
        throw new Error('Cannot reach data');
    }

    const data = await response.json();

    return data;
}

getTodos().then(data => {
    console.log(data);
}).catch(err => console.log(err.message));

// fetch('todos/luigi.json').then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data);
//     fetch('todos/soso.json').then(response => {
//         return response.json();
//     }).then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });
// }).catch(err => {
//     console.log(err);
// });
