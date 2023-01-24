function distributeGifts(packOfGifts, reindeers) {
  let amount = 0;
  let actual = 0;
  const packWeight = packOfGifts.join('').length;
  const maxWeight = reindeers.join('').length * 2;

  while (actual + packWeight <= maxWeight) {
    actual += packWeight;
    amount++;
  }

  return amount;
}

const packOfGifts = ['book', 'doll', 'ball'];
const reindeers = ['dasher', 'dancer'];

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

const r = distributeGifts(packOfGifts, reindeers); // 2
console.log(r);
