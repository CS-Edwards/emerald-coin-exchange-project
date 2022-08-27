// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpolkadot&vs_currencies=usd

//DOM ACCESS
const btc = document.getElementById("btc");
const eth = document.getElementById("eth");
const dot = document.getElementById("dot");


//API (async)
const settings={
    "async": true,
    "scrossDomain": true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpolkadot&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}


$.ajax(settings).done(function(response){
    console.log(response);
    btc.innerHTML=response.bitcoin.usd;
    eth.innerHTML=response.ethereum.usd;
    dot.innerHTML=response.polkadot.usd;
})


