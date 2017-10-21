import beerData from '../../data/beers'

const initialState = beerData.beers

export default function beers(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}