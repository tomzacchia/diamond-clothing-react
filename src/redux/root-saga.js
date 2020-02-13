import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';

export default function* rootSaga() {
  /* 
    if we have N sagas, the 2nd to Nth yield sagaFunction() would
    have to wait for those lexically called before it to yield or
    return therefore we use all() to initialize all functions at
    the start of the application
  */
  yield all([call(fetchCollectionsStart)]);
  /*
    yield fetchCollectionsStart();
    yield fetchCollectionsStart();
    yield fetchCollectionsStart();
  */
}
