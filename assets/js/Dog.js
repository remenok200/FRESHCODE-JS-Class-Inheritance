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
    if (newNickname.trim === "") {
      throw new Error("Nickname must be not empty!");
    }
    this._nickname = newNickname;
  }

  set breed(newBreed) {
    if (typeof newBreed !== "string") {
      throw new TypeError("The breed should be a string!");
    }
    if (newBreed.trim === "") {
      throw new Error("Breed must be not empty!");
    }
    this._breed = newBreed;
  }

  set numberOfCapturedCats(newNumberOfCapturedCats) {
    if (typeof newNumberOfCapturedCats !== "number") {
      throw new TypeError("The number of captured cats should be a number!");
    }
    if (newNumberOfCapturedCats === "") {
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
  constructor(nickname, numberOfCapturedCats, EatenCats = 0) {
    super(nickname, "stray", numberOfCapturedCats);
    this.EatenCats = EatenCats;
    this.successChance = Math.random() * (1 - 0.5) + 0.5; // [0.5; 1)
  }

  // ------> setters section
  set EatenCats(newEatenCats) {
    if (typeof newEatenCats !== "number") {
      throw new TypeError("The number of eaten cats should be a number!");
    }
    if (newEatenCats === "") {
      throw new Error("Number of eaten cats must be not empty!");
    }
    this._EatenCats = newEatenCats;
  }
  // <------ setters section

  // ------> getters section
  get EatenCats() {
    return this._EatenCats;
  }
  // <------ getters section

  // ------> methods section
  eat() {
    if (this.numberOfCapturedCats > this.EatenCats) {
      this.EatenCats++;
      return `Пес ${this.nickname} пожрал! У него осталось ${
        this.numberOfCapturedCats - this.EatenCats
      } котов доступных для съедения!`;
    }
    return `Нечего есть! Иди на охоту и налови котов! Количество словленных котов: ${this.numberOfCapturedCats}, количество сохжранных котов: ${this.EatenCats}`;
  }
  // <------ methods section
}