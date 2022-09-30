import Proptypes from 'prop-types';
import {
  Container,
  LabelName,
  NameInput,
  Button,
} from './PhonebookForm.styled';

const PhonebookForm = ({ contacts, name, onChange }) => {
  return (
    <Container>
      <LabelName>
        <NameInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </LabelName>
      <Button></Button>
    </Container>
  );
};

export default PhonebookForm;
