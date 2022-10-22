// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpolkadot&vs_currencies=usd

//DOM ACCESS
const btc = document.getElementById("btc");
const eth = document.getElementById("eth");
const dot = document.getElementById("dot");
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click',()=>{
    navUL.classList.toggle('show');
})


//API (async)
const settings={
    "async": true,
    "scrossDomain": true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpolkadot&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}

//jQuery REMOVED



