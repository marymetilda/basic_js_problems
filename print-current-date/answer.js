const date = new Date();
let dd = date.getDate();
let mm = date.getMonth() + 1;
const yy = date.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}

const currentDate1 = dd + "/" + mm + "/" + yy;

const currentDate2 = dd + "-" + mm + "-" + yy;

const currentDate3 = mm + "/" + dd + "/" + yy;

const currentDate4 = mm + "-" + dd + "-" + yy;

console.log(currentDate1);
console.log(currentDate2);
console.log(currentDate3);
console.log(currentDate4);
