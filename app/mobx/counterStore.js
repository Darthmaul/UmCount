import {observable} from 'mobx';

class CounterStore {
  @observable counter = 0;

  increment() { this.counter++; }

}

export default new CounterStore();
