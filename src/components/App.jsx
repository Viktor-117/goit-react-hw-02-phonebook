import React, { Component } from 'react';
import PhonebookForm from './PhonebookForm';
import Section from 'components/Section';
import ContactList from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, data],
      };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div
        style={{
          position: 'relative',
          height: '100vh',
          width: 500,
          left: 300,
          marginTop: 50,
          justifyContent: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <PhonebookForm onSubmit={this.formSubmitHandler}></PhonebookForm>
        </Section>

        <Section title="Contacts">
          {contacts.length > 0 && (
            <ContactList contacts={contacts}></ContactList>
          )}
        </Section>
      </div>
    );
  }
}

export { App };
