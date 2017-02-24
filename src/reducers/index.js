import {combineReducers} from 'redux';
function videos(state=[], actions){
  return action.payload.results;
}
const reducers = combineReducers({videos:videos});
export default recuders;
