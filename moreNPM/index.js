const { format } = require('date-fns');
const { v4: uuid } = require('uuid')

console.log(format(new Date(), 'yyyy-MM-dd\n\tHH:MM:ss'));

console.log(uuid());
console.log("Nodejs");