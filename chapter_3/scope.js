let age = 30;

if (true) {
    let age = 40;
    console.log('inside codeblock : ', age);

    if (true) {
        let age = 50;
        console.log('inside codeblock 2: ', age);
        var testVar = 'hello';
    }
}

console.log('outside codeblock : ', age, testVar);