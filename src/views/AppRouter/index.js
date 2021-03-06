import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMockData } from '../../actions'
import Contacts from '../Contacts'

class AppRouter extends Component {
    // componentDidMount() {
    // }
    getMockData = (e) => {
        this.props.getMockData()
    }
    render() {

        return (
            <div>
                <Contacts getMockData={this.getMockData} contactList={this.props.contactList} />
            </div>
        )
    }
}

const mapStateToProps = ({ contacts }) => console.log(contacts) || ({
    contactList: contacts.contactList
})

const mapDispatchToProps = (dispatch) => ({
    getMockData: () => dispatch(getMockData())
})


export default connect(mapStateToProps, mapDispatchToProps)(AppRouter)