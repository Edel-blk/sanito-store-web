import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import axios from 'axios';
import { API_URL } from '../utils/constants';


function DeleteArticle(data) {
  
    const [open, setOpen] = React.useState(false);

    let handleDelete = async (e) => {
        
        const response = await axios.delete(`${API_URL}/items/delete?itemId=${data.data._id}`);
        if (response.data.success) {
            data.deleteItem();
            setOpen(false);
        }
    }
    
    let handleCancel = async (e) => {
        setOpen(false);
    }
    
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='mini'
            trigger={<Icon name='trash alternate outline' style={{cursor: 'pointer'}}/>}
        >
            <Header icon>
                <Icon name='trash alternate' />
                Are you sure want to delete the item {data.data.name}?
                {/* ARE YOU SURE YOU WANT TO DELETE THE ITEM {data.data.name}? */}
            </Header>
            <Modal.Actions>
                <Button floated='left' color='red' inverted onClick={(e) => handleCancel(e)}>
                    <Icon name='remove' /> Cancel
                </Button>
                <Button color='green' inverted onClick={(e) => handleDelete(e)}>
                    <Icon name='checkmark' /> Delete
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default DeleteArticle;