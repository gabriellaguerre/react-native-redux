import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './usersSlice'
import posReducer from './posSlice'
import itemsReducer from "./itemsSlice";
import pos_itemsReducer from './po_itemsSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        pos: posReducer,
        items: itemsReducer,
        pos_items: pos_itemsReducer,

    }
})