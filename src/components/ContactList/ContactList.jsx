import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';

import { ListItem } from './ListItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <List>
      {visibleContacts.map(({ id, name, phoneNumber }) => (
        <ListItem key={id} name={name} phoneNumber={phoneNumber} id={id} />
      ))}
    </List>
  );
};
