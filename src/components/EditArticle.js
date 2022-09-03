import React from 'react'
import { Button, Header, Icon, Modal, Form, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../utils/constants';

function EditArticle(data) {
    
  const [open, setOpen] = React.useState(false)

  let [input, setInput] = React.useState({
    name: data.data.name, 
    inventory: data.data.inventory,
    price: data.data.price,
    category: data.data.category
  });

  let options = [];
  if(!data.categories.length > 0){
    options = [
      {
        text: 'No category',
        value: 'No category',
        key: 0
      }
    ]
  } else {
      options = data.categories.map((item, index) => {
        return {
          text: item.category,
          value: item.category,
          key: `dropdown${index}`
        };
      });
    }

  let validateSubmit = () => {
    if (!input.name || !input.inventory || !input.price || !input.category) {
      return true;
    }
    return false;
  }

  let handleChange = (data) => {
    setInput((prev) => ({...prev, [data.name]:data.value}));
  }
  console.log('DATAARTICLESSSS', data)
  let handleSubmit = async (e) => {
    const response = await axios.put(`${API_URL}/items/update`, {itemId: data.data._id,newData: input});
    if (response.data.success) {
      setOpen(false);
      data.updateItem();
    }

    console.log('BOTON SUBMIT EDITAR ARTICULO', e);
  }

  let handleCancel = async (e) => {
    setOpen(false);
    console.log('BOTON CANCELAR EDITAR ARTICULO', e);
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
        Editar Articulo : {data.data.name}
      </Header>
      <Modal.Content>
        <p>
        <Form  error>
          <Form.Field required>
            <label>Nombre del Articulo</label>
            <Form.Input default={data.data.name} type='string' name={'name'} value={input.name} onChange={(e, data) => handleChange(data)} />
          </Form.Field>
          <Form.Field required>
            <label>Inventario</label>
            <Form.Input placeholder={data.data.inventory} type='integer' name={'inventory'} value={input.inventory} onChange={(e, data) => handleChange(data)}/>
          </Form.Field>
          <Form.Field required>
            <label>Precio</label>
            <Form.Input placeholder={data.data.price} type='float' name={'price'} value={input.price} onChange={(e, data) => handleChange(data)}/>
          </Form.Field>
          <label>Categoria</label>
          <br/>
          <Dropdown
              placeholder={data.data.category}
              fluid
              selection
              options={options}
              name={'category'}
              value={input.category} 
              onChange={(e, data) => handleChange(data)}
          />
        </Form>
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button floated='left' color='red' inverted onClick={(e) => handleCancel(e)}>
          <Icon name='remove' /> Cancelar
        </Button>
        <Button color='green' inverted onClick={(e) => handleSubmit(e)} disabled={validateSubmit()}>
          <Icon name='checkmark' /> Aceptar
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default (EditArticle, connect(mapStateToProps, null)(EditArticle));