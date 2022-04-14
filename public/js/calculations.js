let RUBtoUSDText = document.querySelector('#RUBtoUSDText');

function Start(dollarPrice) {
  let RUBtoUSD = document.querySelector('#RUBtoUSD');
  let USDtoRUB = document.querySelector('#USDtoRUB');
  let RUBtoUSDNum = Number(RUBtoUSD.value);
  USDtoRUB.value = (RUBtoUSDNum * Number(dollarPrice)).toFixed(2);
}

function RUBtoUSD(dollarPrice) {
  let res = 1/Number(dollarPrice);
RUBtoUSDText.innerHTML = '1 RUB = ' + res.toFixed(4) + 'USD'
}

function RUBtoUSDCal(dollarPrice) {
let RUBtoUSD = document.querySelector('#RUBtoUSD');
let USDtoRUB = document.querySelector('#USDtoRUB');

RUBtoUSD.addEventListener('input',function () {

let RUBtoUSDNum = Number(RUBtoUSD.value);
USDtoRUB.value = (RUBtoUSDNum * Number(dollarPrice)).toFixed(2);
});

USDtoRUB.addEventListener('input',function () {
let res = 1/Number(dollarPrice);
let USDtoRUBNum = Number(USDtoRUB.value);
RUBtoUSD.value = (USDtoRUBNum * res).toFixed(2);
});

}
