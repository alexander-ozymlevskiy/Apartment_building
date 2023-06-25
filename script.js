// Людина.

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  personInfo() {
    console.log(`Ім'я: ${this.name}`);
    console.log(`Стать: ${this.gender}`);
  }
}

// Квартира.

class Apartment {
  residents = [];

  addResident(resident) {
    this.residents.push(resident);
  }

  apartmentInfo() {
    console.log("Інформація про жителів:");
    this.residents.forEach((person, x) => {
      console.log(`Житель: ${x + 1}`);
      person.personInfo();
    });
  }
}

// Будинок.

class House {
  constructor(maxNumOfApartments) {
    this.apartments = [];
    this.maxNumOfApartments = maxNumOfApartments;
  }

  addApartment(apartment) {
    this.apartments.length < this.maxNumOfApartments
      ? this.apartments.push(apartment)
      : console.log("Неможливо додати квартиру.");
  }

  houseInfo() {
    this.apartments.forEach((apartment, x) => {
      console.log(`Квартира: №${x + 1}`);
      apartment.apartmentInfo();
    });
  }
}

// Екземпляри класу людина.
const personTom = new Person("Том", "чоловіча.");
const personVasya = new Person("Вася", "чоловіча.");
const personDasha = new Person("Даша", "жіноча.");
const personKatya = new Person("Катя", "жіноча.");

// Екземпляри класу квартир.
const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

// Людина + квартира.
apartment1.addResident(personTom);
apartment2.addResident(personVasya);
apartment2.addResident(personDasha);
apartment3.addResident(personKatya);

// Екземпляр класу будинок.
const house = new House(2);

// Квартира + будинок.
house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);

// Виведення інформації.
house.houseInfo();

/*

// Людина.

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function personInfo(person) {
  console.log(`Ім'я: ${person.name}`);
  console.log(`Стать: ${person.gender}`);
}

// Квартира.

function Apartment() {
  this.residents = [];
}

function addResident(apartment, person) {
  apartment.residents.push(person);
}

function apartmentInfo(apartment) {
  console.log("Інформація про жителів:");
  apartment.residents.forEach((person, x) => {
    console.log(`Житель: ${x + 1}`);
    personInfo(person);
  });
}

// Будинок.

function House(maxNumOfApartments) {
  this.apartments = [];
  this.maxNumOfApartments = maxNumOfApartments;
}

function addApartment(house, apartment) {
  house.apartments.length < house.maxNumOfApartments
    ? house.apartments.push(apartment)
    : console.log("Неможливо додати квартиру.");
}

function houseInfo(house) {
  house.apartments.forEach((apartment, index) => {
    console.log(`Квартира: №${index + 1}`);
    apartmentInfo(apartment);
  });
}

// Екземпляри класу людина.
const personTom = new Person("Том", "чоловіча.");
const personVasya = new Person("Вася", "чоловіча.");
const personDasha = new Person("Даша", "жіноча.");
const personKatya = new Person("Катя", "жіноча.");

// Екземпляри класу квартир.
const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

// Людина + квартира.
addResident(apartment1, personTom);
addResident(apartment2, personVasya);
addResident(apartment2, personDasha);
addResident(apartment3, personKatya);

// Екземпляр класу будинок.
const house = new House(2);

// Квартира + будинок.
addApartment(house, apartment1);
addApartment(house, apartment2);
addApartment(house, apartment3);

// Виведення інформації.
houseInfo(house);

*/
