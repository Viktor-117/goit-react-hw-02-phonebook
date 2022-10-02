import PropTypes from 'prop-types';
import { List, ListItem } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <p>
              {name}: {number}
            </p>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;
