const studenti = [
  { ime: "Marko", prezime: "Petrović", godina: 3, ocjene: [9, 8, 7, 10, 9] },
  { ime: "Ana", prezime: "Jovanović", godina: 1, ocjene: [7, 6, 8, 6, 7] },
  { ime: "Luka", prezime: "Simić", godina: 2, ocjene: [10, 9, 10, 8, 9] },
  { ime: "Maja", prezime: "Nikolić", godina: 4, ocjene: [6, 5, 7, 6, 6] },
  { ime: "Ivana", prezime: "Stanković", godina: 1, ocjene: [9, 10, 9, 8, 9] },
];
// a)  Napisati funkciju koja prolazi kroz niz i ispisuje studente koji imaju prosjek veći od 8.5.
// Ukoliko student ne zadovoljava kriterijum, ispiši samo njegovo ime.
// b)  Napisati funkciju koja pronalazi i ispisuje studenta sa najvišim prosjekom.
let najveciProsjek = -1;
studenti.forEach((student) => {
  let zbirOcjena = 0;
  for (let index = 0; index < student["ocjene"].length; index++) {
    zbirOcjena += student["ocjene"][index];
  }
  let trenutniProsjek = zbirOcjena / student["ocjene"].length;

  if (trenutniProsjek > 8.5) console.log(student["ime"]);

  if (trenutniProsjek > najveciProsjek) najveciProsjek = trenutniProsjek;
});
console.log("Najveci prosjek je: " + najveciProsjek);

// c)  Napisati funkciju koja izračunava i ispisuje prosječan prosjek svih studenata u nizu.
function prosjecanProsjek(studenti) {
  let res = 0;
  studenti.forEach((student) => {
    let zbirOcjena = 0;
    for (let index = 0; index < student["ocjene"].length; index++) {
      zbirOcjena += student["ocjene"][index];
    }
    res += zbirOcjena / student["ocjene"].length;
  });
  return (res / studenti.length).toFixed(2);
}
console.log(prosjecanProsjek(studenti));
// d)  Napisati funkciju koja sortira studente po prosjeku u opadajućem redosledu i ispisuje ih.
function suma(arr) {
  let res = 0;
  for (let n of arr) res += n;
  return res;
}
function avg(arr) {
  return suma(arr) / arr.length;
}
function desc(studenti) {
  studenti.sort((a, b) => avg(b.ocjene) - avg(a.ocjene));
  return studenti;
}
console.log(desc(studenti));
// e)  Za svakog studenta u nizu, dodajte novi ključ prosjek sa odgovarajućom vrijednošću i
// ispišite novonastali niz studenata.
studenti.forEach((student) => {
  let zbirOcjena = 0;
  for (let index = 0; index < student["ocjene"].length; index++) {
    zbirOcjena += student["ocjene"][index];
  }
  let trenutniProsjek = zbirOcjena / student["ocjene"].length;
  student["prosjek"] = trenutniProsjek;
});
console.log(studenti);
