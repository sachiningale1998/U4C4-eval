// create store here
export const store = {};

// do not remove this code, its for testing purpose
// const rootReducer = combineReducers(reducer,applyMiddleware(thunk));

// const ThunkMiddleware = (store)=> (next)=>(action)=>{
//   return typeof action === 'function'
//   ? action (store.dispatch,)
// }

if (window.Cypress) {
  window.store = store;
}
