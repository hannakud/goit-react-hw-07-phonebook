import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://6475d692e607ba4797dcb747.mockapi.io/';

const ERRORS = {
  LOAD: 'Load contact error',
  ADD: 'Add contact error',
  DELETE: 'Delete contact error',
};

const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(ERRORS.LOAD);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (params, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', params);
      toast.success(
        `${response.data.name} was successfully added to your phonebook!`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(ERRORS.ADD);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      toast.success(
        `${response.data.name} was successfully deleted from your phonebook!`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(ERRORS.DELETE);
    }
  }
);

export { fetchContacts, addContact, deleteContact };
