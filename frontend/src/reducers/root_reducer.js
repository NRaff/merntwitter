import {combineReducers} from 'redux'
import session from './session_reducer'
import ErrorsReducer from './errors_reducer';
import TweetsReducer from './tweets_reducer';

const RootReducer = combineReducers({
  session: session,
  errors: ErrorsReducer || {},
  tweets: TweetsReducer
})

export default RootReducer;
