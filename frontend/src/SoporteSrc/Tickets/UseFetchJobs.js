import { useReducer, useEffect, useContext } from 'react'
import axios from 'axios'
import { Context } from "../context/Context"
import { useParams } from 'react-router-dom'

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
  UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
}

const BASE_URL = 'https://squad4-tickets.herokuapp.com/tickets/'

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, tickets: [] }
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, tickets: action.payload.tickets }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, tickets: [] }
    case ACTIONS.UPDATE_HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload.hasNextPage }
    default:
      return state
  }
}

export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, { tickets: [], loading: true })
  const context = useContext(Context)
  
  // Las dos siguientes líneas para que en cada reload el productId del
  // contexto sea el mismo que el de la URL
  const { product_id } = useParams()
  context.setProductId(product_id)

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source()
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios.get(BASE_URL, {
      cancelToken: cancelToken1.token,
      params: { markdown: true, page: page, ...params }
    }).then(res => {
      dispatch({ type: ACTIONS.GET_DATA, payload: { tickets: res.data } }) 
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

  const p_id = state.tickets.filter((ticket) => ticket.product_id == product_id)
  state.tickets = p_id

  const f = state.tickets.filter((ticket) => (ticket.title.indexOf(params.title) !== -1))
  if (f.length > 0)
    state.tickets = f

  return state
}