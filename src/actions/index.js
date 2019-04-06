import types from '../store/types'
import {_getMockData} from '../api'

export const getMockData = (params) => (dispatch, getState) => 
dispatch({
    type: types.GET_MOCK_DATA,
    payload: {
        promise: _getMockData()
    }
})