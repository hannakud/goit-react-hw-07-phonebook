import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { useContacts } from 'hooks';

const contactSchema = object({
  name: string().required(),
  phone: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone number is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useContacts();
  const onAddContact = (values, actions) => {
    const isExist = contacts.some(
      el => el.name.toLowerCase() === values.name.trim().toLowerCase()
    );
    if (isExist) {
      alert('Contact is already exist');
      return;
    }
    // console.log(values);
    // dispatch(addContact({ ...values }));
    dispatch(addContact({ ...values }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={contactSchema}
      onSubmit={onAddContact}
    >
      <Form>
        <label className={css.labelForm}>
          <span>Name</span>
          <Field name="name" type="text" />
        </label>
        <ErrorMessage component="div" name="name" />
        <label className={css.labelForm}>
          <span>Phone</span>
          <Field name="phone" type="text" />
        </label>
        <ErrorMessage component="div" name="phone" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
