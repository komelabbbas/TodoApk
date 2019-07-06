import { takeLatest, call, put , takeEvery } from "redux-saga/effects";
import ActionTypes from "../Constant/Constant";
import  TodoAction from "../Actions/TodoAction";





export function* RunSaga() {

     yield takeEvery(ActionTypes.TODO_DATA_REQUEST, GetTodoData);

     yield takeEvery(ActionTypes.TODO_DATA_ADD, AddTodoData);

     yield takeEvery(ActionTypes.TODO_DATA_DELETE, DeleteTodoData);
  
}

    

  function* GetTodoData() {
        
        console.log('fetch function saga')
      const payload = yield call(TodoAction.TODO_FETCH_API);
      yield put({ type: ActionTypes.TODO_DATA_FETCH, payload });
    
    
  }

  function* AddTodoData(action) {
  
      const response = yield call(TodoAction.TODO_ADD_API , action.data);
       yield call(GetTodoData);
    
  }

  function* DeleteTodoData(action) {
    
       const response = yield call(TodoAction.TODO_DELETE_API , action.data);
       yield call(GetTodoData);

   }


