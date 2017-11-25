function maxStockProfit(pricesArr) {
  var profit = -1;
  var buyPrice = 0;
  var sellPrice = 0;

  var changeBuyPrice = true;

  for (var i = 0; i < pricesArr.length; i++) {
    if(changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];
    
    if(sellPrice < buyPrice) {
      changeBuyPrice = false;
    }

    else {
      var tempProfit = sellPrice - buyPrice;
      if(tempProfit > profit) profit = tempProfit;
      changeBuyPrice = true;
    }
  }

  return profit;
}

console.log(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]));