const password = 'pas@';

if (password.length >= 12 && password.includes('@')) {
    console.log('The password is too long !, over or equal to 12 length !');
}

else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
    console.log('The password is strong enougth !');
} 

else {
    console.log('The password is too shirt !');
}