import React, { Component } from 'react';
import Notiflix from 'notiflix';
import PhonebookForm from './PhonebookForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = event => {
    const { value } = event.currentTarget;
    console.log(value);
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  contactsNameCheck = name => {
    const normalizedName = name.toLowerCase();
    return this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );
  };

  formSubmitHandler = data => {
    this.contactsNameCheck(data.name)
      ? Notiflix.Notify.failure(`${data.name} is already in contacts.`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, data],
          };
        });
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
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
        <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 32 }}>
          Phonebook
        </h1>
        <PhonebookForm onSubmit={this.formSubmitHandler}></PhonebookForm>

        <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 32 }}>
          Contacts
        </h1>
        <Filter filter={filter} onChange={this.handleChange}></Filter>
        {contacts.length > 0 && (
          <ContactList contacts={visibleContacts}></ContactList>
        )}
      </div>
    );
  }
}

export { App };
