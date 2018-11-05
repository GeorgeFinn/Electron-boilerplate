import { GET_CONTAINERS, GET_COMPONENTS, GET_STYLES, CREATE_STYLE, CREATE_COMPONENT } from '../actions/types'

const initialState = {
  containers: {},
  components: {},
  styles: {},
  loading: false,
  errors: {}
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
      }
    case CREATE_STYLE:
      return {
        ...state,
        styles: action.payload,
      }
    case CREATE_COMPONENT:
      return {
        ...state,
        components: action.payload,
      }
    default:
      return state;
  }
}
