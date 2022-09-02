import React from 'react'
import { Button, Icon, Table } from 'semantic-ui-react'
import EditArticle from './EditArticle';
import DeleteArticle from './DeleteArticle';


const Articles = (props) => (
    <Table columns={5}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Articulo</Table.HeaderCell>
          <Table.HeaderCell>Inventario</Table.HeaderCell>
          <Table.HeaderCell>Precio</Table.HeaderCell>
          <Table.HeaderCell>Categoria</Table.HeaderCell>
          <Table.HeaderCell>Opciones</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body> 
      {
        props.articles.map((r, index)=>(
          <Table.Row key={index}>
            <Table.Cell>{r.name}</Table.Cell>
            <Table.Cell>{r.inventory}</Table.Cell>
            <Table.Cell>{r.price}</Table.Cell>
            <Table.Cell>{r.category}</Table.Cell>
            <Table.Cell collapsing>
                <EditArticle data={r} updateItem={() => props.updateItem()}/>
                <DeleteArticle data={r} deleteItem={() => props.deleteItem()}/>
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
  


export default Articles;