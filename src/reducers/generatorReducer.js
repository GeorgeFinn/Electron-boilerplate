import { GET_CONTAINERS, GET_COMPONENTS, GET_STYLES } from '../actions/types'

const initialState = {
  containers: {},
  components: {},
  styles: {},
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTAINERS:
      return {
        ...state,
        containers: action.payload,
        loading: false
      }
    case GET_COMPONENTS:
      return {
        ...state,
        components: action.payload,
        loading: false
      }
    case GET_STYLES:
      return {
        ...state,
        styles: action.payload,
        loading: false
      }
    default:
      return state;
  }
}
