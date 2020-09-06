const INITIAL_STATE = {
  editing: false
}

export const editableCellReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EDIT_CELL':
      return { editing: action.editing }
    default:
      return state
  }
}
