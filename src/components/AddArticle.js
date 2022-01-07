import React from 'react';
import { Button, Form } from 'semantic-ui-react';


export default function AddArticle() {

    let [input, setInput] = React.useState({
        name: '', 
        inventory: '',
        price: ''
    });

    let handleChange = (data) => {
        setInput((prev) => ({...prev, [data.name]:data.value}));
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        setInput({ 
            name: '', 
            inventory: '',
            price: ''
        });
    }

    return (
        <React.Fragment>
            <div>Create Article</div>
            <br/>
            <Form>
                <Form.Field>
                <label>Item Name</label>
                <Form.Input placeholder='Item Name'  name={'name'} value={input.name} onChange={(e, data) => handleChange(data)} />
                </Form.Field>
                <Form.Field>
                <label>Inventory</label>
                <Form.Input placeholder='Inventory'  name={'inventory'} value={input.inventory} onChange={(e, data) => handleChange(data)}/>
                </Form.Field>
                <Form.Field>
                <label>Price</label>
                <Form.Input placeholder='Price'  name={'price'} value={input.price} onChange={(e, data) => handleChange(data)}/>
                </Form.Field>
                <Button type='submit' onClick={(e) => handleSubmit(e)}>Submit</Button>
            </Form>
        </React.Fragment>

    )
}