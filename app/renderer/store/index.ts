import logger from "redux-logger";
// @ts-ignore
import RcReduxModel from 'rc-redux-model';
import {createStore, applyMiddleware, combineReducers} from "redux";
// 引入写好的model
import globalModel from "./globalModel";
// 调用RcReduxModel实例化得到最后的reduxModel
const reduxModel = new RcReduxModel([globalModel]);
// 无侵入式的使用Redux
const reducerList = combineReducers(reduxModel.reducers);

// 导出数据状态树
export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger));
