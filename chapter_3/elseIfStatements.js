const password = 'pass1234123';

if (password.length >= 12) {
    console.log('The password is too long !, over or equal to 12 length !');
}

else if (password.length >= 8) {
    console.log('The password fit between 11 and 8');
} 

else {
    console.log('The password is too shirt !');
}