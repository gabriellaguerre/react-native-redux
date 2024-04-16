import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

// const usersURL = 'http://10.0.2.2:5000/api/users'
const getAllItemsURL = 'https://ivy-ims.onrender.com/api/items'
// const logoutUserUrl = 'https://ivy-ims.onrender.com/api/'
// const usersURL = 'https://ivy-ims.onrender.com/api/'

const initialState = {
  items: [],
  status: 'idle',
  error: null
}

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await fetch(getAllItemsURL, {
      method: "GET",
      headers: {"Content-Type": "application/json",}
  })

  if(response.ok) {
      const data = await response.json()
      console.log(data, 'DDDDDDDDDDDDDDDDDDDDDD')
      return data
}   
})



const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: { 

    },
    extraReducers(builder) {
      builder
          .addCase(fetchItems.fulfilled, (state, action)=> {
              state.items = action.payload
              state.status = 'succeeded';
              state.error = null;
          }
      )}
});

export const selectAllItems = (state) => state.items.items;
// export const getUsersStatus = (state) => state.users.status;
// export const getUsersError = (state) => state.users.error;

// export const { userAdded } = usersSlice.actions

export default itemsSlice.reducer