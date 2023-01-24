function wrapping(gifts) {
  const result = gifts.map((gift) => {
    return `${'*'.repeat(gift.length + 2)}\n*${gift}*\n${'*'.repeat(
      gift.length + 2
    )}`;
  });

  return result;
}

console.log(wrapping(['Esfera', 'Cochesito']));
