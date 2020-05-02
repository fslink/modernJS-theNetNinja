
const before = new Date('February 1 2019 7:30:54');
const now = new Date();

console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const seconds = Math.round(diff / 1000);
console.log('seconds: ' + seconds);

const minutes = Math.round(seconds / 60);
console.log(minutes);

const hours = Math.round(minutes / 60);
console.log(hours);

const days = Math.round(hours / 24);
console.log(days);

const months = Math.round(days / 30);
console.log(months);

const template = `This blog was created ${months} months ago !`;
console.log(template);

const timestamp = 39421086030;
console.log(new Date(timestamp));


