import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const usersURL = 'http://127.0.0.1:5000/api/users'

// const csrfTokenResponse = await fetch('http://127.0.0.1:5000/csrf-token');
// const csrfToken = await csrfTokenResponse.text();

// export const fetchCsrfToken = createAsyncThunk('csrf/fetchCSRF', async () => {
//     console.log('IN CSRF TOKEN FXN')
  
//     const response = await fetch('http://127.0.0.1:5000/api/auth');
//     console.log(response, 'KKKKKKKKKKKKKK')
//     if (response.ok) {
//             return await response.json();
//         } else {
//             throw new Error('Failed to fetch CSRF token');
//         }
  
// })
// console.log(fetchCsrfToken())

const initialState = {
  users: [{id: '1', name: 'Gabriel', age:30}],
  status: 'idle',
  error: null
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    console.log('IN FETCH USERS RESPONSE')
    try {
        const response = await fetch(usersURL, {
            method: "GET",
            headers: {"Content-Type": "application/json",
                    }
        })
       if(response.ok) {
            const data = await response.json()
            console.log(data)
      }
        
        }
         catch (error) {
        console.log(error, 'ERROR')
        
    }
})

console.log(fetchUsers())

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded: { 
            reducer(state, action) {
                state.users.push(action.payload)
            },
            prepare(name, age) {
                return{
                    payload: {
                        id: nanoid(),
                        name,
                        age
                    }
                }
            },
            extraReducers(builder) {
                builder
                    .addCase(fetchUsers.pending, (state, action)=> {
                        state.status = 'loading'
                    })
                    .addCase(fetchUsers.fulfilled, (state, action)=> {
                        state.status = 'succeeded'
                        state.users = action.payload
                        // const loadedUsers = action.payload.map(user => {
                        //     user.employeeID
                        // })
                        // return loadedUsers
                    })
                    .addCase(fetchUsers.rejected, (state, action) => {
                        state.status = 'failed',
                        state.error = action.error.message
                    })
            }
    }
}
})

export const selectAllUsers = (state) => state.users.users;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;

export const { userAdded } = usersSlice.actions

export default usersSlice.reducer