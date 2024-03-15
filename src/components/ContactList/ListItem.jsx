import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

import { Item, DeleteButton } from './ContactList.styled';
export const ListItem = ({ name, phoneNumber, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <Item key={id}>
      {name}: {phoneNumber}
      <DeleteButton type="button" onClick={handleDelete}>
        delete
      </DeleteButton>
    </Item>
  );
};
