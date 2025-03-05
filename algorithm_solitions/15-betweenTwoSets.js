function getTotalX(a, b) {
  let sonuc = 0;

  let multa = [];
  let tekrarEdenler = [];

  let maxB = Math.min(...b);

  for (let i = 0; a.length > i; i++) {
    let count = 1;
    while (a[i] * count <= maxB) {
      multa.push(a[i] * count);
      count++;
    }
  }

  multa.sort((x, y) => x - y);

  let sayac = 1;

  for (let i = 1; i < multa.length; i++) {
    if (multa[i] === multa[i - 1]) {
      sayac++;
    } else {
      if (sayac >= a.length && !tekrarEdenler.includes(multa[i - 1])) {
        tekrarEdenler.push(multa[i - 1]);
      }
      sayac = 1;
    }
  }

  if (sayac >= a.length && !tekrarEdenler.includes(multa[multa.length - 1])) {
    tekrarEdenler.push(multa[multa.length - 1]);
  }

  for (let i = 0; tekrarEdenler.length > i; i++) {
    let sayac = 0;
    for (let j = 0; b.length > j; j++) {
      if (b[j] % tekrarEdenler[i] == 0) {
        sayac++;
      }
    }
    if (sayac == b.length) {
      sonuc++;
    }
  }

  return sonuc;
}
