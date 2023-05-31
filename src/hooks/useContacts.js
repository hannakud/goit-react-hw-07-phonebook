import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';

export const useContacts = () => useSelector(selectContacts);

export const useFilteredContacts = () => useSelector(selectFilteredContacts);

export const useIsLoading = () => useSelector(selectIsLoading);

export const useError = () => useSelector(selectError);
