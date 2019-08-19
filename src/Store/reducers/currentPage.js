import { actionTypes } from '../actions/currentPage';

const initialState={ number:0}
// Placeholder reducer for our movie modal
const currentPageReducer = (state = initialState, action)=>{
  switch (action.type){
    case actionTypes.GET_CURRENT_PAGE:
    return{ 
      ...state,
      number: action.payload
    }
  default:
  return state
  }
}

export default currentPageReducer