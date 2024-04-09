import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

// const usersURL = 'http://10.0.2.2:5000/api/users'
// const usersURL = 'postgres://app_projects_pwg7_user:hRj4dlsdow91x6AHZGf47wmSY5v3vT3i@dpg-cjh88ps1ja0c73bbbbeg-a.ohio-postgres.render.com/app_projects_pwg7';
const usersURL = 'https://ivy-ims.onrender.com/api/users'

const initialState = {
  users: [],
  status: 'idle',
  error: null
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
        console.log("IN FETCH USER")
        const response = await fetch(usersURL, {
            method: "GET",
            headers: {"Content-Type": "application/json",}
        })
        console.log(response, "RESPONSE")
        if(response.ok) {
            const data = await response.json()
            console.log(data, 'DATA')
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

// export const { userAdded } = usersSlice.actions

export default usersSlice.reducer