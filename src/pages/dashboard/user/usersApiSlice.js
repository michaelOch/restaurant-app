import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../../app/api/apiSlice';

const userAdapter = createEntityAdapter({});

const initialState = userAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/user',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedUsers = responseData.map(user => {
                    user.id = user._id;
                    return user;
                });
                return userAdapter.setAll(initialState, loadedUsers);
            },
            providesTags: (result, eroor, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'User', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'User', id }))
                    ]
                } else return [{ type: 'User', id: 'LIST' }]
            }
        }),
    }),
});

export const {
    useGetUsersQuery,
} = usersApiSlice;

//  returns the query rsult object
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select();

//  create memoized selector
const selectUsersData = createSelector(
    selectUsersResult,
    usersResult => usersResult.data //  normalized state object with ids & entities
)

//  getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllUsers,
    selectById: selectUsersById,
    selectIds: selectUserIds
    //  Pass in a selector that returns the users slice of state
} = userAdapter.getSelectors(state => selectUsersData(state) ?? initialState)