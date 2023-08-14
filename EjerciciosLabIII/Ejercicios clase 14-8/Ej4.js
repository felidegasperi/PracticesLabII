let candles = [5, 1, 4, 6, 5, 6, 0, 2];

const higherCandle = (candles) => {
  const maxValue = Math.max(...candles);
  return candles.filter((a) => a === maxValue).length;
};

console.log(higherCandle(candles));
