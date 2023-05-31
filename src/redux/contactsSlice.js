import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

function onContactsLoading(state) {
  state.isLoading = true;
}

function onContactsLoaded(state, action) {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
}

function onContactsLoadingError(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

function onDeletePending(state) {
  state.isLoading = true;
}
function onDeleted(state, action) {
  const {
    payload: { id },
  } = action;
  state.isLoading = false;
  state.items = state.items.filter(el => el.id !== id);
  state.error = null;
}

function onDeletedError(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

function onAddContactPending(state) {
  state.isLoading = true;
}

function onAddContact(state, action) {
  state.isLoading = false;
  state.items = [action.payload, ...state.items];
  state.error = null;
}

function onAddContactError(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, onContactsLoading)
      .addCase(fetchContacts.fulfilled, onContactsLoaded)
      .addCase(fetchContacts.rejected, onContactsLoadingError)
      .addCase(deleteContact.pending, onDeletePending)
      .addCase(deleteContact.fulfilled, onDeleted)
      .addCase(deleteContact.rejected, onDeletedError)
      .addCase(addContact.pending, onAddContactPending)
      .addCase(addContact.fulfilled, onAddContact)
      .addCase(addContact.rejected, onAddContactError),
});

export const contactsReducer = contactsSlice.reducer;
