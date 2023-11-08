import data from './data.json' assert {type: 'json'};

const now = new Date();
const day = now.getDay();

const columns = document.querySelectorAll('.graph-column');
const tooltips = document.querySelectorAll('.tooltip');

let theBiggestAmount = 0;
for(let i in data) {
  if(data[i].amount > theBiggestAmount) {
    theBiggestAmount = data[i].amount
  }
}


for(let i = 0; i < tooltips.length; i++) {
  tooltips[i].textContent = "$" + data[i].amount
  let percentage = data[i].amount*100/theBiggestAmount;
  let pixels = percentage*150/100;
  columns[i].style.height = `${pixels}px`
  columns[day - 1].style.backgroundColor = "hsl(186, 34%, 60%)"
}