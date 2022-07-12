import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { combineReducers } from "redux";
export const history = createBrowserHistory();
const initialState = {
blog: {}
};

 const appReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case 'BLOG_LOADED':
      return {
        ...state, 
        blog: payload
      }
  
    default:
 return state
  }
  
}

const rootReducer = combineReducers({
  app:appReducer,
  router: connectRouter(history)
}) 

export default rootReducer;


