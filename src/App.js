import React from 'react';
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AddArticle from './components/AddArticle';
import AddCategory from './components/AddCategory';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Route path={'/home'} component={Home}/>
      <Route path={'/add-article'} component={AddArticle}/>
      <Route path={'/add-category'} component={AddCategory}/>
    </React.Fragment>
  );
}

export default App;
