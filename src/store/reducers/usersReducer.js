const INITIAL_STATE = {
  users: []
}

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return action.payload
    default:
      return state
  }
}
