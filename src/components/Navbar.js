import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
      
    const { activeItem } = this.state

    return (
      <div>
        <Menu 
          inverted 
          borderless='true' 
          style={{ justifyContent: 'center', borderRadius: 0, fontSize: 20 }}
        >
          <Menu.Item 
            style={{ borderRadius: 0 }}
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}>
            <NavLink to={'/home'}>Inicio</NavLink>
          </Menu.Item>
          <Menu.Item 
            name='addArticle'
            active={activeItem === 'addArticle'}
            onClick={this.handleItemClick}>
            <NavLink to={'/add-article'}>Añadir Articulo</NavLink>
          </Menu.Item>  
          <Menu.Item 
            name='addCategory'
            active={activeItem === 'addCategory'}
            onClick={this.handleItemClick}>
            <NavLink to={'/add-category'}>Añadir Categoria</NavLink>
          </Menu.Item>    
        </Menu>
      </div>
    )
  }
}
