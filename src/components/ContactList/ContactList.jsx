import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ListItem } from 'components/ListItem/ListItem';

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return <ListItem key={id} name={name} number={number}></ListItem>;
      })}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};
