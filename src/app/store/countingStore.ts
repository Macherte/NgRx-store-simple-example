/**
 * STEP 1.
 *
 * Structural definition of our store, the data and the type of the data we want to store globally in our application
 *
 * Note: if the interface is small like in this case, this is also possible by defining the structure in the
 * generic definition, when injecting the Store into our component.
 *
 * Note: in practice, for large applications, store does not only have a single property like in this case, more like complex objects with subset of properties
 */

export interface CountingStore {
  /** Data we want to store */
  count: number;
}
