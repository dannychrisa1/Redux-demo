const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('initial State', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState())
})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(3))


// unsubscribe()