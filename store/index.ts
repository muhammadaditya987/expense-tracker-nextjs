import { configureStore } from "@reduxjs/toolkit";

import transactionReducer from "./slices/transactionSlice"

export const store = configureStore({
    reducer: {
        transaction: transactionReducer //transaction adalah key. kalau kita memanggil data maka state.transaction
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;