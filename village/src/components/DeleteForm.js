import React, { Component } from 'react';
import axios from 'axios';

class DeleteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                id: "",
            }
        };
    }
    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.delete(`http://localhost:3333/smurfs/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="DeleteForm">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Smurf ID:
            <input type="text" name="id" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}

export default DeleteForm;