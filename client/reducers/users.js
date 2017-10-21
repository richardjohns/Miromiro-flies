import userData from '../../data/users'

const initialState = userData.users

export default function users(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}