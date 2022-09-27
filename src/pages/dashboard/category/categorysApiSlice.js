import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../../app/api/apiSlice';

const categoryAdapter = createEntityAdapter({});

const initialState = categoryAdapter.getInitialState();

export const categorysApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCategorys: builder.query({
            query: () => '/category',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedCategorys = responseData.map(category => {
                    category.id = category._id;
                    return category;
                });
                return categoryAdapter.setAll(initialState, loadedCategorys);
            },
            providesTags: (result, eroor, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Category', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Category', id }))
                    ]
                } else return [{ type: 'Category', id: 'LIST' }]
            }
        }),
    }),
});

export const {
    useGetCategorysQuery,
} = categorysApiSlice;

//  returns the query rsult object
export const selectCategorysResult = categorysApiSlice.endpoints.getCategorys.select();

//  create memoized selector
const selectCategorysData = createSelector(
    selectCategorysResult,
    categorysResult => categorysResult.data //  normalized state object with ids & entities
)

//  getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllCategorys,
    selectById: selectCategorysById,
    selectIds: selectCategoryIds
    //  Pass in a selector that returns the categorys slice of state
} = categoryAdapter.getSelectors(state => selectCategorysData(state) ?? initialState)