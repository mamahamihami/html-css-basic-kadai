const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
console.log(date.getFullYear() +'年'+ (date.getUTCMonth()+1) + '月' + date.getDate() + '日');
