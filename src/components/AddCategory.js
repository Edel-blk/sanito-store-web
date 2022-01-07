import React from 'react';
import {addCategory} from '../actions';
import { connect } from 'react-redux';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

export function AddCategory({add}) {

    let [input, setInput] = React.useState({
        name: ''
    });

    let handleChange = (e) => {
        e.preventDefault();
        setInput((prev) => ({...prev, [e.target.name]:e.target.value}))
    }


    let handleSubmit = (e) => {
        // e.preventDefault();
        
        // add(input);
        console.log(e);
        setInput({ 
            name: ''
        });
    }

    let onChange = (data) => {
        console.log(data.value);

    }
    return (
        <React.Fragment>
             <div>Create Category</div>
            <br/>
            {/* <Input placeholder='Search...' onChange={(e, data) => onChange(data)}/> */}
            <Form onSubmit={(e, data) => handleSubmit(data)}>
                <Form.Field>
                <label>First Name</label>
                <Form.Input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                <label>Last Name</label>
                <Form.Input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </React.Fragment>

    )
}
function mapDispatchToProps(dispatch){
    return {
        add : (input) => dispatch(addCategory(input))
    }
}


export default (AddCategory, connect(null, mapDispatchToProps)(AddCategory));