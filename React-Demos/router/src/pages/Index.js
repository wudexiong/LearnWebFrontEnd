import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
        this.props.history.push("/home/")
    }
    render() {
        return (
            <div>
                <Redirect to="/home" />
            </div>
        )
    }
}
export default Index