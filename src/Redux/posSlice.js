import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

// const usersURL = 'http://10.0.2.2:5000/api/users'
const getAllItemsURL = 'https://ivy-ims.onrender.com/api/'
// const logoutUserUrl = 'https://ivy-ims.onrender.com/api/'
// const usersURL = 'https://ivy-ims.onrender.com/api/'

const initialState = {
  pos: [],
  status: 'idle',
  error: null
}


const posSlice = createSlice({
    name: 'pos',
    initialState,
    reducers: {
      poAdded(state, action) {
        state.pos.push(action.payload)
      },
      deletePO(state, action) {
        const code = action.payload
        console.log(code, 'codeeeeeeeeeeeeeeeeeee')
        const thist = state.pos.filter(item => item.itemCode !== code.toString())
        console.log(thist,'thistttttttttt')
        return thist
      }
     }
})

export const selectAlllPos = (state) => state.pos.pos;
// export const getUsersStatus = (state) => state.users.status;
// export const getUsersError = (state) => state.users.error;

export const { poAdded, deletePO } = posSlice.actions

export default posSlice.reducer