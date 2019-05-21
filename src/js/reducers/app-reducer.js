import { AppActionNames } from "../action-names"

const { DUMMY_ACTION } = AppActionNames

const initialState = {
  isDummy: false
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case DUMMY_ACTION:
      return {
        ...state,
        isDummy: true
      }
      break

    default:
      return state
  }
}
