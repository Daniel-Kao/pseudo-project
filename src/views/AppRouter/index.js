import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMockData } from '../../actions'
import Contacts from '../Contacts'

class AppRouter extends Component {
    componentDidMount() {
        this.props.getMockData()
    }
    render() {
        return (
            <div>
                <Contacts contactList={this.props.contactList} />
            </div>
        )
    }
}

const mapStateToProps = ({contacts}) => ({
    contactList: contacts.contactList
})

const mapDispatchToProps = (dispatch) => ({
    getMockData: () => dispatch(getMockData())
})


export default connect(mapStateToProps, mapDispatchToProps)(AppRouter)