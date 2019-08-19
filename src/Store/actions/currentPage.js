export const actionTypes = {
  GET_CURRENT_PAGE : 'GET_CURRENT_PAGE',
}

export const getCurrentPage = number=>({
  type: actionTypes.GET_CURRENT_PAGE,
  payload:number
})