import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Transaction } from "@/types/transaction";

interface TransactionState {
  transactions: Transaction[];
  editingTransaction: Transaction | null;
}

const initialState: TransactionState = {
  transactions: [],
  editingTransaction: null,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
        state.transactions.push(action.payload)
    },

    setEditTransaction(state, action: PayloadAction<Transaction | null>) {
      state.editingTransaction = action.payload
    },

    updateTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions = state.transactions.map((transaction) => 
        transaction.id === action.payload.id ?
        action.payload : transaction
      );
      state.editingTransaction = null;
    },

    deleteTransaction(state, action: PayloadAction<number>) { //karena id berupa angka
      state.transactions = state.transactions.filter((transaction) => 
        transaction.id !== action.payload)

      //Optional Chaining
      //Kenapa ? ada setelah editingTransaction?
      //Karena yang mungkin tidak ada adalah object editingTransaction. Bukan id.
      if (state.editingTransaction?.id === action.payload) { //Kalau editingTransaction ada, ambil id-nya. Kalau tidak ada, jangan error.
        state.editingTransaction = null;
      }
    },

    loadTransactions(state, action: PayloadAction<Transaction[]>) {
      state.transactions = action.payload;
    }


  },

});

export default transactionSlice.reducer;
export const {addTransaction, setEditTransaction, updateTransaction, deleteTransaction, loadTransactions,} = transactionSlice.actions;