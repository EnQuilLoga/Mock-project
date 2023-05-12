import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getProductSuccess } from './productSlice';


function* toGetProductFetch():any {
    const response = yield call(() => axios.get('https://fakestoreapi.com/products'))
    
    const products = response.data
   console.log(response)
    yield put(getProductSuccess(products))
}

function* productSaga() {
    yield takeEvery('products/getProductFetch', toGetProductFetch )
}

export default productSaga;