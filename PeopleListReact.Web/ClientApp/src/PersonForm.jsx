import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonForm extends React.Component {
    render() {
        return (
            <>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <input value={this.props.firstName} onChange={this.props.onFirstNameChange} type='text' placeholder='First Name' className='form-control' />
                        </div>
                        <div className='col-md-3'>
                            <input value={this.props.lastName} onChange={this.props.onLastNameChange} type='text' placeholder='Last Name' className='form-control' />
                        </div>
                        <div className='col-md-3'>
                            <input value={this.props.age} onChange={this.props.onAgeChange} type='text' placeholder='Age' className='form-control' />
                        </div>
                        <div className='col-md-1'>
                            <button onClick={this.props.onAddClick} className='btn btn-primary w-100'>Add</button>

                        </div>
                        <div className='col-md-1'>
                            <button onClick={this.props.onClearClick} className='btn btn-warning w-100'>Clear</button>
                        </div>

                    </div>
                </div>
            </>

        );
    }
}

export default PersonForm;
