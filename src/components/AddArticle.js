import React from 'react';
import { Button, Form, Dropdown, Header, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addArticles } from '../actions';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export function AddArticle(props) {
    let [input, setInput] = React.useState({
        name: null, 
        inventory: null,
        price: null,
        category: null
    });

    const notifyBoxes = () =>{
        toast('Fill up all the inputs');
    }

    let handleChange = (data) => {
        setInput((prev) => ({...prev, [data.name]:data.value}));
    }

    let validateSubmit = () => {
        if (!input.name || !input.inventory || !input.price || !input.category) {
            return true;
        }
        return false;
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3005/items/add', input);
        if (response.data.success) {
            props.history.push('/home');
        } else{

        }
    }

    
    let options = [];
    if(!props.categories.length > 0){
        options = [
            {
                text: 'No category',
                value: 'No category',
                key: 0
            }
        ]
    } else {
        options = props.categories.map((item, index) => {
            return {
                text: item.category,
                value: item.category,
                key: `dropdown${index}`
            };
        });
    }

    return (
        <React.Fragment>
            <Header as='h2' disabled textAlign='center'>
                Añadir Nuevo Articulo
            </Header>
            <br/>
            <Container>
            <Form>
                <Form.Field>
                    <label>Nombre Del Articulo</label>
                    <Form.Input placeholder='Item Name' type='string' name={'name'} value={input.name} onChange={(e, data) => handleChange(data)} />
                </Form.Field>
                <Form.Field>
                    <label>Inventario</label>
                    <Form.Input placeholder='Inventory' type='integer' name={'inventory'} value={input.inventory} onChange={(e, data) => handleChange(data)}/>
                </Form.Field>
                <Form.Field>
                    <label>Precio</label>
                    <Form.Input placeholder='Price' type='float' name={'price'} value={input.price} onChange={(e, data) => handleChange(data)}/>
                </Form.Field>
                <label>Categoria</label>
                <Dropdown
                    placeholder='Selecciona Una Categoria'
                    fluid
                    selection
                    options={options} 
                    name={'category'}
                    value={input.category} 
                    onChange={(e, data) => handleChange(data)}
                />
                <br/>
                <Button disabled={validateSubmit()} type='submit' onClick={(e) => handleSubmit(e)}>Aceptar</Button>
            </Form>
            </Container>
            <Toaster />
        </React.Fragment>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        add : (input) => dispatch(addArticles(input))
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);