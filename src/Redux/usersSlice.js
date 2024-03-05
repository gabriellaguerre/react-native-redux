import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const usersURL = 'http://10.0.2.2:5000/api/users'

const initialState = {
  users: [],
  status: 'idle',
  error: null
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    
        const response = await fetch(usersURL, {
            method: "GET",
            headers: {"Content-Type": "application/json",}
        })

        if(response.ok) {
            const data = await response.json()
            return data
      }   
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}, 
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.fulfilled, (state, action)=> {
                return action.payload
            })
         
    }
})

export const selectAllUsers = (state) => state.users.users;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;

export const { userAdded } = usersSlice.actions

export default usersSlice.reducer