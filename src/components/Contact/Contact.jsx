import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import style from './Contact.module.css';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={style.container}>
      <p className={style.data}>{name}</p>
      <p className={style.data}>{number}</p>
      <button className={style.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
