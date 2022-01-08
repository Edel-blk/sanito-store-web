import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'
import axios from 'axios';

function EditCategory(props) {
    const [open, setOpen] = React.useState(false)

    let [input, setInput] = React.useState({
        category: props.data.category
    });

    let handleSubmit = async (e) => {
        const response = await axios.put('http://localhost:3005/category/update', {categoryId: props.data._id, newData: input});
        setOpen(false);
        props.updateItem();
        console.log('BOTON SUBMIT EDITAR CATEGORIA', e);
    }
    
    let handleCancel = async (e) => {
      setOpen(false);
      console.log('BOTON CANCELAR EDITAR CATEGORIA', e);
    }

    let handleChange = (data) => {
        setInput((prev) => ({...prev, [data.name]:data.value}));
    }  
    
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='mini'
            trigger={<Icon name='edit' style={{cursor: 'pointer'}}/>}
        >
            <Header icon>
                <Icon name='edit outline' />
                Edit Category : {props.data.category}
            </Header>
            <Modal.Content>
                <p>
                    <Form.Field required>
                        <label>Category</label>
                        <Form.Input type='string' name={'category'} value={input.category} onChange={(e, data) => handleChange(data)} />
                    </Form.Field>
                </p>
            </Modal.Content>
        <Modal.Actions>
            <Button floated='left' color='red' inverted onClick={(e) => handleCancel(e)}>
                <Icon name='remove' /> Cancel
            </Button>
            <Button color='green' inverted onClick={(e) => handleSubmit(e)}>
                <Icon name='checkmark' /> Submit
            </Button>
        </Modal.Actions>
        </Modal>
    )
}

export default EditCategory;