import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../actions/counter.actions';
import { CountingStore } from '../store/countingStore';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;

  /**
   * STEP 4.
   *
   * Injection of the Store service to dispatch actions and select the current state of the counter.
   * We inject the store by providing it a generic type, the structure defined at STEP 2.
   */
  constructor(private store: Store<CountingStore>) {
    // The select method selects a chunk of data you need from the store
    // (in this case this is the only piece of data), then converts it into an Observable object.
    this.count$ = store.select('count');
  }

  increment() {
    // Dispatch an increment action
    console.log('1. Increment button was clicked');
    this.store.dispatch(increment());
  }

  decrement() {
    // Dispatch a decrement action
    console.log('1. Decrement button was clicked');
    this.store.dispatch(decrement());
  }

  reset() {
    // Dispatch a reset action
    console.log('1. Reset button was clicked');
    this.store.dispatch(reset());
  }
}
