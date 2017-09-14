import React, { Component } from 'react';
import trim from 'trim';

class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.state = {
            message: ''
        };
    }

    onChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    onKeyup(event) {
        if(event.keyCode === 13 && trim(event.target.value) !== '') {
            event.preventDefault();
            let dbCon = this.props.db.database().ref('/messages');
            dbCon.push({
                message: trim(event.target.value)
            });
            this.setState({
                message: ''
            });
        }
    }

    render() {
        return(
            <form>
                <textarea className = "textarea"
                    placeholder = "Type a message"
                    cols = "100" 
                    onChange = {this.onChange} 
                    onKeyUp = {this.onKeyup} 
                    value = {this.state.message} />
            </form>
        );
    }
}

export default MessageBox;