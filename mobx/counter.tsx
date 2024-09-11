import React from 'react';
import {makeAutoObservable} from 'mobx';

class Counter {
  number;
  constructor() {
    this.number = 0;
    makeAutoObservable(this);
  }
  increment(value: number) {
    this.number += value;
    console.log(this.number);
  }
  decrement(value: number) {
    this.number -= value;
    console.log(this.number);
  }
}

export default Counter;
