import PropTypes from 'prop-types';
import { ListItemText } from './ListItem.styled';

export const ListItem = ({ name, number }) => {
  return (
    <ListItemText style={{ marginTop: 8, fontSize: 25 }}>
      {name}: {number}
    </ListItemText>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
