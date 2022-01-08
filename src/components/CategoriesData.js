import React from 'react'
import { Button, Icon, Table } from 'semantic-ui-react';
import DeleteCategory from './DeleteCategory';
import EditCategory from './EditCategory';

const Categories = (props) => (
  <Table columns={2}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body> 
      {
        props.categories.map((r, index)=>(
          <Table.Row key={index}>
              <Table.Cell>{r.category}</Table.Cell>
              <Table.Cell collapsing>
              <EditCategory data={r} updateItem={() => props.updateItem()}/>
              <DeleteCategory data={r} deleteItem={() => props.deleteItem()}/>
              </Table.Cell>
          </Table.Row>
        
        ))
      }
    </Table.Body>
  
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell />
        <Table.HeaderCell />
        <Table.HeaderCell />
        <Table.HeaderCell />
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default Categories;