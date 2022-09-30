import React, { Component } from 'react';
import PhonebookForm from './PhonebookForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    const { name, value } = this.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <PhonebookForm
          contacts={contacts}
          name={name}
          onChange={this.handleChange}
        ></PhonebookForm>
      </div>
    );
  }
}

export { App };
