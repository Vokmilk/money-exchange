// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coins = {};
    var rich = {};
    rich.error = "You are rich, my friend! We don't have so much coins for exchange";
    if (currency > 10000) return rich;
    if (currency >= 50) coins.H = Math.floor(currency/50);
    currency = currency % 50;
    if (currency >= 25) coins.Q = Math.floor(currency/25);
    currency = currency % 25;
    if (currency >= 10) coins.D = Math.floor(currency/10);
    currency = currency % 10;
    if (currency >= 5) coins.N = Math.floor(currency/5);
    currency = currency % 5;
    if (currency >= 1) coins.P = currency;
    return coins;
}
  
  
    