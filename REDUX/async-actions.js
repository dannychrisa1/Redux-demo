const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

//STATE
const initialState = {
    loading: true,
    data: [],
    error: ''
}

//ACTION
const FETCHED_USERS_REQUESTED = 'FETCHED_USERS_REQUESTED'
const FETCHED_USERS_SUCCEEDED = 'FETCHED_USERS_SUCCEEDED'
const FETCHED_USERS_FAILED = 'FETCHED_USERS_FAILED'

//ACTION CREATORS

function fetchUsersRequest() {
    return {
        type: FETCHED_USERS_REQUESTED,
    }
}

function fetchedUsersSuccess(users) {
    return {
        type: FETCHED_USERS_SUCCEEDED,
        payload: users
    }
}

function fetchUsersFailed(error) {
    return {
        type: FETCHED_USERS_FAILED,
        payload: error
    }
}
//REDUCERS

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_USERS_REQUESTED:
            return {
                ...state,
                loading:true
            }
        case FETCHED_USERS_SUCCEEDED:
            return {
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCHED_USERS_FAILED:
            return {
                ...state,
                loading:false,
                users:[],
                error:action.payload
            }
        default: {
            return state
        }
    }
}
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            //response.data is the users
            const users = response.data.map((user) => user.id)
            dispatch(fetchedUsersSuccess(users))
        }).catch((error) => {
            //error.message is the error message
            dispatch(fetchUsersFailed(error.message))
        })
    }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fetchUsers())