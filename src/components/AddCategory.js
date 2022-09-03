import React from 'react';
import {addCategory} from '../actions';
import { connect } from 'react-redux';
import { Button, Container, Form, Header } from 'semantic-ui-react';
import axios from 'axios';
import { API_URL } from '../utils/constants';

export function AddCategory(props) {

    let [input, setInput] = React.useState({
        category: ''
    });

    let handleChange = (data) => {
        setInput((prev) => ({...prev, [data.name]:data.value}))
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${API_URL}/category/add`, input);
        if (response.data.success) {
            props.history.push('/home');
        }
    }

    return (
        <React.Fragment>
            <Header as='h2' disabled textAlign='center'>
                Crear Nueva Categoria
            </Header>
            <br/>
            <Container>
            <Form>
                <Form.Field>
                    <Form.Input placeholder='Nueva Categoria'  name={'category'} value={input.category} onChange={(e, data) => handleChange(data)} />
                </Form.Field>
                <Button type='submit' onClick={(e) => handleSubmit(e)}>Aceptar</Button>
            </Form>
            </Container>
        </React.Fragment>

    )
}
function mapDispatchToProps(dispatch){
    return {
        add : (input) => dispatch(addCategory(input))
    }
}


export default (AddCategory, connect(null, mapDispatchToProps)(AddCategory));