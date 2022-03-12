"use strict";

class Dog {
  constructor(nickname, breed, numberOfCapturedCats = 0) {
    this.nickname = nickname;
    this.breed = breed;
    this.numberOfCapturedCats = numberOfCapturedCats;
    this.successChance = Math.random() * (0.5 - 0.1) + 0.1; // [0.1; 0.5)
  }

  // ------> setters section
  set nickname(newNickname) {
    if (typeof newNickname !== "string") {
      throw new TypeError("The nickname should be a string!");
    }
    if (newNickname.trim() === "") {
      throw new Error("Nickname must be not empty!");
    }
    this._nickname = newNickname;
  }

  set breed(newBreed) {
    if (typeof newBreed !== "string") {
      throw new TypeError("The breed should be a string!");
    }
    if (newBreed.trim() === "") {
      throw new Error("Breed must be not empty!");
    }
    this._breed = newBreed;
  }

  set numberOfCapturedCats(newNumberOfCapturedCats) {
    if (typeof newNumberOfCapturedCats !== "number") {
      throw new TypeError("The number of captured cats should be a number!");
    }
    if (
      Number.isNaN(this.numberOfCapturedCats) === true ||
      this.numberOfCapturedCats < 0
    ) {
      throw new Error("Number of captured cats must be not empty!");
    }
    this._numberOfCapturedCats = newNumberOfCapturedCats;
  }
  // <------ setters section

  // ------> getters section
  get nickname() {
    return this._nickname;
  }

  get breed() {
    return this._breed;
  }

  get numberOfCapturedCats() {
    return this._numberOfCapturedCats;
  }
  // <------ getters section

  // ------> methods section
  barking() {
    return `Пес ${this.nickname} гавкнул!`;
  }

  eat() {
    return `Пес ${this.nickname} пожрал!`;
  }

  sleep() {
    return `Пес ${this.nickname} спит!`;
  }

  catchCats() {
    if (this.successChance > Math.random()) {
      this.numberOfCapturedCats++;
      return `Пес ${this.nickname} успешно словил кота! Теперь у него их ${this.numberOfCapturedCats}`;
    }
    return `Пес ${this.nickname} сходил на охоту и ни кого не поймал. У него по-прежнему ${this.numberOfCapturedCats} котов!`;
  }
  // <------ methods section
}

class StrayDog extends Dog {
  constructor(nickname, numberOfCapturedCats, eatenCats = 0) {
    super(nickname, "stray", numberOfCapturedCats);
    this.eatenCats = eatenCats;
    this.successChance = Math.random() * (1 - 0.5) + 0.5; // [0.5; 1)
  }

  // ------> setters section
  set eatenCats(newEatenCats) {
    if (typeof newEatenCats !== "number") {
      throw new TypeError("The number of eaten cats should be a number!");
    }
    if (Number.isNaN(this.eatenCats) === true || this.eatenCats < 0) {
      throw new Error("Number of eaten cats must be not empty!");
    }
    if (newEatenCats > this.numberOfCapturedCats) {
      throw new RangeError(
        "Дорогой, а это уже читерство! Хочешь пожрать - дуй на охоту!"
      );
    }
    this._eatenCats = newEatenCats;
  }
  // <------ setters section

  // ------> getters section
  get eatenCats() {
    return this._eatenCats;
  }
  // <------ getters section

  // ------> methods section
  eat() {
    if (this.numberOfCapturedCats > this.eatenCats) {
      this.eatenCats++;
      return `Пес ${this.nickname} пожрал! У него осталось ${
        this.numberOfCapturedCats - this.eatenCats
      } котов доступных для съедения!`;
    }
    return `Нечего есть! Иди на охоту и налови котов! Количество словленных котов: ${this.numberOfCapturedCats}, количество сохжранных котов: ${this.eatenCats}`;
  }
  // <------ methods section
}