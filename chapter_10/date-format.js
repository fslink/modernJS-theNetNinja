const now = new Date();

// console.log(dateFns.isToday(now));

console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));

console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

const before = new Date('Sat February 1 2020 12:00:00');
console.log(before);
console.log(dateFns.distanceInWords(now, before));
