import {createSelector} from 'reselect'

//Memoize Function on Reducer

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)
