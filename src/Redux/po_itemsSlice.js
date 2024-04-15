import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

// const usersURL = 'http://10.0.2.2:5000/api/users'
const getAllItemsURL = 'https://ivy-ims.onrender.com/api/'
// const logoutUserUrl = 'https://ivy-ims.onrender.com/api/'
// const usersURL = 'https://ivy-ims.onrender.com/api/'

const initialState = {
  pos_items: [],
  status: 'idle',
  error: null
}


const pos_itemsSlice = createSlice({
    name: 'pos_items',
    initialState,
    reducers: { }
})

// export const selectAllUsers = (state) => state.users.users;
// export const getUsersStatus = (state) => state.users.status;
// export const getUsersError = (state) => state.users.error;

// export const { userAdded } = usersSlice.actions

export default pos_itemsSlice.reducer