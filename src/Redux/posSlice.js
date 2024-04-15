import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

// const usersURL = 'http://10.0.2.2:5000/api/users'
const loginUsersURL = 'https://ivy-ims.onrender.com/api/auth/login'
const logoutUserUrl = 'https://ivy-ims.onrender.com/api/auth/logout'
const usersURL = 'https://ivy-ims.onrender.com/api/users'

const initialState = {
  pos: [],
  status: 'idle',
  error: null
}
// export const login = createAsyncThunk('session/SET_USER', async ({employeeID, password}) => {
   
//         const response = await fetch(loginUsersURL, {
//         method: 'POST',
//         headers: {"Content-Type": "application/json",},
//         body: JSON.stringify({employeeID, password})
//         })
//         if(response.ok){
//             const data = await response.json()
//             return data  
//          }  else {
//             throw new Error('Login failed. Please check your credentials.');
//          }
          
// })
       

// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//         const response = await fetch(usersURL, {
//             method: "GET",
//             headers: {"Content-Type": "application/json",}
//         })
      
//         if(response.ok) {
//             const data = await response.json()
//             return data
//       }   
// })

// export const logoutUser = createAsyncThunk('users/logoutUser', async () => {
//     const response = await fetch(logoutUserUrl, {
//         headers: {"Content-Type": "application/json"}
//     })
//     if(response.ok){
//         return { users: null }
//     }
// })


const posSlice = createSlice({
    name: 'pos',
    initialState,
    reducers: {
        userAdded(state, action) {
            state.users.push(action.payload)
        },
        clearError(state){
            state.error = null;
        }
    }, 
    extraReducers(builder) {
        builder
            .addCase(login.fulfilled, (state, action)=> {
                state.users = action.payload
                state.status = 'succeeded';
                state.error = null;
                
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || 'Login failed. Please try again.'
            })
         
    }
})

// export const selectAllUsers = (state) => state.users.users;
// export const getUsersStatus = (state) => state.users.status;
// export const getUsersError = (state) => state.users.error;

// export const { userAdded } = usersSlice.actions

export default usersSlice.reducer