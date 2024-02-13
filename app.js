const fs = require('fs');

const PEOPLES_COUNT = 20;

const genders = ['M', 'F'];

const firstNames = {
  M: [
    'Antoni',
    'Jan',
    'Aleksander',
    'Nikodem',
    'Franciszek',
    'Jakub',
    'Leon',
    'Mikołaj',
    'Stanisław',
    'Filip',
  ],
  F: [
    'Zofia',
    'Zuzanna',
    'Hanna',
    'Laura',
    'Maja',
    'Julia',
    'Oliwia',
    'Alicja',
    'Pola',
    'Lena',
  ],
};

const lastNames = {
  M: [
    'Nowak',
    'Kowalski',
    'Wiśniewski',
    'Wójcik',
    'Kowalczyk',
    'Kamiński',
    'Lewandowski',
    'Zieliński',
  ],
  F: [
    'Nowak',
    'Kowalska',
    'Wiśniewska',
    'Wójcik',
    'Kowalczyk',
    'Kamińska',
    'Lewandowska',
    'Zielińska',
  ],
};

const age = () => Math.floor(Math.random() * 60) + 18;

const generatePhone = () => {
  const zeroFill = () => (`000` + Math.floor(Math.random() * 999)).slice(-3);
  return `${Math.floor(Math.random() * 300) + 500} ${zeroFill()} ${zeroFill()}`;
};

const getRandom = (arr = []) => arr[Math.floor(Math.random() * arr.length)];

const saveJSON = (fileName, data) => {
  fs.writeFile(`${fileName}.json`, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};

const people = new Array(PEOPLES_COUNT).fill({}).map(() => {
  const gender = getRandom(genders);
  const firstName = getRandom(firstNames[gender]);
  const lastName = getRandom(lastNames[gender]);
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
  const phone = generatePhone();

  return {
    firstName,
    lastName,
    gender,
    age: age(),
    email,
    phone,
  };
});

saveJSON('people', people);
