import axios from 'axios'
import { GET_CONTAINERS, GET_COMPONENTS, GET_STYLES, GET_ERRORS } from './types'
import { showLoading, hideLoading } from 'react-redux-loading'

export const getContainers = () => dispatch => {
  dispatch(showLoading())
  axios.get('http://localhost:8080/api/containers/all')
    .then(res => {
      dispatch({ type: GET_CONTAINERS, payload: res.data })
      dispatch(hideLoading())}
    )
    .catch(err => {
      dispatch({
        type: GET_CONTAINERS, //IF NO PROFILE RETURN AN EMPTY PROFILE
        payload: {}
      })
      dispatch(hideLoading())
    })
}

export const getComponents = () => dispatch => {
  dispatch(showLoading())
  axios.get('http://localhost:8080/api/components/all')
    .then(res => {
      dispatch({ type: GET_COMPONENTS, payload: res.data })
      dispatch(hideLoading())}
    )
    .catch(err => {
      dispatch({
        type: GET_COMPONENTS, //IF NO PROFILE RETURN AN EMPTY PROFILE
        payload: {}
      })
      dispatch(hideLoading())
    })
}

export const getStyles = () => dispatch => {
  dispatch(showLoading())
  axios.get('http://localhost:8080/api/styles/all')
    .then(res => {
      dispatch({ type: GET_STYLES, payload: res.data })
      dispatch(hideLoading())})
    .catch(err => {
      dispatch({
        type: GET_STYLES, //IF NO PROFILE RETURN AN EMPTY PROFILE
        payload: {}
      })
      dispatch(hideLoading())
    })

}
