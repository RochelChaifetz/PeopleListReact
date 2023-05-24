import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class People extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        age: '',
        people: []
    }

    onFirstNameChange = (e) => {
        this.setState({ firstName: e.target.value });
    }

    onLastNameChange = (e) => {
        this.setState({ lastName: e.target.value });
    }

    onAgeChange = (e) => {
        this.setState({ age: e.target.value });
    }

    onAddClick = () => {
        const copy = [...this.state.people];
        const person = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        }
        copy.push(person);
        this.setState({ people: copy, firstName: '', lastName: '', age: '' });
    }

    onClearClick = () => {
        this.setState({ people: [], firstName: '', lastName: '', age: '' });
    }

    render() {
        return (<>
            <div className='container mt-5'>
                <PersonForm onClearClick={this.onClearClick}
                    onAddClick={this.onAddClick}
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age} />

                {this.state.people.length === 0 ?
                    <h1>No people added yet! Add some people!</h1> :
                    <table className='table table-hover table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <PersonRow people={this.state.people} />
                        </tbody>
                    </table>
                }
            </div>
        </>);
    };

};

export default People;

