import React, { Component } from 'react'
import './index.css'

const loader = (WrappedComponent) => {
    return class loader extends Component {
        render() {
            return this.props.contactList.length === 0 ? <div className="loader"></div> : <WrappedComponent {...this.props} />
        }
    }
}

export default loader