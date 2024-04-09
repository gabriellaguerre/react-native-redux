import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

// const usersURL = 'http://10.0.2.2:5000/api/users'
const loginUsersURL = 'https://ivy-ims.onrender.com/api/auth/login'
const usersURL = 'https://ivy-ims.onrender.com/api/users'

const initialState = {
  users: [],
  status: 'idle',
  error: null
}
export const login = createAsyncThunk('session/SET_USER', async () => {
        const response = await fetch(loginUsersURL, {
            method: 'POST',
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({employeeID: "Demo", password: "password"})
        })
        if(response.ok){
            const data = await response.json()
            // console.log(data, "DDAATAAAAAAAAAAAAAAAAA")
            return data
        }
})

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
    reducers: {
        userAdded(state, action) {
            state.users.push(action.payload)
        }
    }, 
    extraReducers(builder) {
        builder
            .addCase(login.fulfilled, (state, action)=> {
                // console.log(action.payload, 'PAYLOOOOOOOOOD')
                state.users = state.users.concat(action.payload)
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
         
    }
})

export const selectAllUsers = (state) => state.users.users;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;

export const { userAdded } = usersSlice.actions

export default usersSlice.reducer