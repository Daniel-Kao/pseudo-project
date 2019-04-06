import React, { Component } from 'react'
import loader from '../../hoc/loader'


class Contacts extends Component {
  render() {
    const { contactList } = this.props
    const contacts = contactList && contactList.map((contact, index) =>
      <li key={index}>name: {contact.firstName}</li>
    )
    return (
      <div>
        <ul>
          {contacts}
          <p>nice day</p>
        </ul>
      </div>
    )
  }
}


export default loader(Contacts)
