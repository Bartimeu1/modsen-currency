import { store } from '@store/store';

type Observer = {
  notify: () => void;
};

class ObservableClass {
  private observers: Observer[] = [];
  private isNotified: boolean = false;

  constructor() {
    store.subscribe(this.handleStoreUpdate);
  }

  handleStoreUpdate = () => {
    const state = store.getState();
    const currentCurrency = state.chart.currentCurrency;
    const chartData = state.chart.chartData;

    if (chartData[currentCurrency].data.length === 30 && !this.isNotified) {
      this.notifyObservers();
      this.isNotified = true;
    } else if (chartData[currentCurrency].data.length !== 30) {
      this.isNotified = false;
    }
  };

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => {
      observer.notify();
    });
  }
}

export const Observable = new ObservableClass();
