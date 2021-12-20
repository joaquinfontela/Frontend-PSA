import { useReducer, useEffect } from 'react'
import axios from 'axios'

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
  UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
}

const BASE_URL = 'https://arcane-journey-13639.herokuapp.com/reports'

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, reports: [] }
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, reports: action.payload.reports.data }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, reports: [] }
    case ACTIONS.UPDATE_HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload.hasNextPage }
    default:
      return state
  }
}

export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, { reports: [], loading: true })

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source()
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios.get(BASE_URL, {
      cancelToken: cancelToken1.token,
      params: { markdown: true, page: page, ...params }
    }).then(res => {
      dispatch({ type: ACTIONS.GET_DATA, payload: { reports: res.data } }) 
    }).catch(e => {
      if (axios.isCancel(e)) return
      dispatch({ type: ACTIONS.ERROR, payload: { error: e } }) 
    })

    const cancelToken2 = axios.CancelToken.source()
    axios.get(BASE_URL, {
      cancelToken: cancelToken2.token,
      params: { markdown: true, page: page + 1, ...params }
    }).then(res => {
      dispatch({ type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: { hasNextPage: res.data.length !== 0 } }) 
    }).catch(e => {
      if (axios.isCancel(e)) return
      dispatch({ type: ACTIONS.ERROR, payload: { error: e } }) 
    })

    return () => {
      cancelToken1.cancel()
      cancelToken2.cancel()
    }
  }, [params, page])

  const p = state.reports.filter((rep) => rep.project.indexOf(params.project) !== -1)
  if (p.length > 0)
    state.reports = p

  const t = state.reports.filter((rep) => rep.task.indexOf(params.task) !== -1)
  if (t.length > 0)
    state.reports = t

  const d = state.reports.filter((rep) => rep.date.indexOf(params.date) !== -1)
  if (d.length > 0)
    state.reports = d

  return state
}