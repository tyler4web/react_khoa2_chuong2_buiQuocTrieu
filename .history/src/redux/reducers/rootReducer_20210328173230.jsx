import {combineReducers} from 'redux';

import {BurgerReducer} from '../reducers/BurgerReducer';
//store tổng ứng dụng
export const rootReducer = combineReducers({
  //Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
  GioHangReducer,
  BurgerReducer,
  QuanLySinhVienReducer
})