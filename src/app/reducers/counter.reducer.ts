import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

export const initialState = 0;

/**
 * STEP 3.
 *
 * Definition of a reducer function to manage the state of the counter.
 * Create reducer is imported from @ngrx/store, its parameters are:
 * @param initialState: the initial state, that needs to be changed according to a dispatched action
 * @param ons: functions that define what to do for each possible dispatchable action. Works like a switch-case block.
 */
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

/**
 * Method, that's called by the dispatch method.
 * Returns the new state created by the reducer.
 * @param state current state
 * @param action the action to perform
 */
export function counterReducer(state, action) {
  console.log(
    '2. counterReducer was called. The current state is: ' +
      state +
      ', and the dispatched action is:'
  );
  console.log(action);

  let newState = _counterReducer(state, action);
  console.log('3. The new state: ' + newState);
  console.log('____________________');
  return newState;
}
