import React, { Component } from 'react'
import LoadingHOC from '../../hoc/LoadingHOC'
import { getMockData } from '../../actions';


class Contacts extends Component {
  render() {
    console.log(this.props)
    const { contactList } = this.props
    let contacts
    if (contactList) {
      contacts = contactList.map((contact, index) =>
        <li key={index}>name: {contact.firstName}</li>
      )
    }
    return (
      <div>
        <ul>
          {contacts}
        </ul>
        <button onClick={() => this.props.getMockData()}>get mock data</button>
      </div>
    )
  }
}


export default Contacts