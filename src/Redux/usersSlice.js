import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', name:'Gabriel', age: 30}, 
    {id: '2', name: 'Louis', age: 40}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const selectAllUsers = (state) => state.users;

export const { userAdded } = usersSlice.actions

export default usersSlice.reducer