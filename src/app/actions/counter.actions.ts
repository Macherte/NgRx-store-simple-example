import { createAction } from '@ngrx/store';

/**
 * STEP 2. Definition of actions to express events.
 *
 * Actions, they are used by the reducer to decide what to do with the current app state,
 * in practice, whether to increment, decrement or to reset the counter.
 * The actions by themselves don't do much.
 */
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
