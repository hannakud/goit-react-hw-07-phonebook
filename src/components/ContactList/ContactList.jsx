import css from './ContactList.module.css';
import { setFilter } from 'redux/filterSlice';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useFilteredContacts } from 'hooks';

export const ContactList = () => {
  const dispatch = useDispatch();
  const list = useFilteredContacts();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
    dispatch(setFilter(''));
  };

  return (
    <ul className={css.contactList}>
      {list.map(({ id, name, phone }) => {
        return (
          <li className={css.contactItem} key={id}>
            <span>{name}: </span>
            <span>{phone} </span>
            <button className={css.button} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
