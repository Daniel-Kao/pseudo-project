import types from '../store/types'


export default function contacts(state = [], action) {
  switch (action.type) {
    case `${types.GET_MOCK_DATA}_PENDING`:
      return state;
    case `${types.GET_MOCK_DATA}_FULFILLED`:
      return {
        isFUlfilled: true,
        contactList: action.payload.data.list ? action.payload.data.list : []
      }
    case `${types.GET_MOCK_DATA}_REJECTED`:
      return {
        isRejected: true,
        error: action.payload
      }
    default: return state
  }
}