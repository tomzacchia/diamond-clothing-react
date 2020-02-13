import { takeEvery, takeLatest } from 'redux-saga/effects';
import shopActionTypes from './shop.types';

// All generator functions must yield
export function* fetchCollectionAsync() {
  yield console.log('I am fired');
}

/*
  Sagas allow for multiple functions each listening for their respective
  action types to execute without blocking code. takeEvery creates a non
  blocking call for asynchronous tasks. Sagas is also able to cancel
  tasks that it places in the background. When we yield our saga
  middleware takes over control of these tasks, i.e which to cancel.
*/
export function* fetchCollectionsStart() {
  // (actionType, function that runs in response to actionType)
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
