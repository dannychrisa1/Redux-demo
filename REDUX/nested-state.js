const redux = require('redux')

const initialState = {
    name: 'Vishwas',
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    }
}
//ACTION
const STREET_UPDATED = 'STREET_UPDATED'
const CITY_UPDATED = 'CITY_UPDATED'

//ACTION CREATOR
function updateStreet(street) {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

function updateCity(city){
    return{
        type:CITY_UPDATED,
         payload:city
    }
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload
                }
            }
           case CITY_UPDATED:
            return{
                ...state,
                address:{
                    ...state.address,
                    city:action.payload
                }
            }
        default: {
            return state
        }

    }
}

const store = redux.createStore(reducer)
console.log('initial State', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState())
})
store.dispatch(updateStreet('456 Main Street'))
store.dispatch(updateCity('Lagos'))

unsubscribe();