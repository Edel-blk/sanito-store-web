import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Tab,  Header, Divider, Icon, Container, Input } from 'semantic-ui-react';
import Articles from './ArticlesData';
import Categories from './CategoriesData';
import { addArticles, addCategory } from '../actions';
import axios from 'axios';
import { API_URL } from '../utils/constants';

export function Home (props) {

    const [isDeleted, setIsDeleted] = React.useState(false);
    const [isUpdated, setIsUpdated] = React.useState(false);

    let [searchCategory, setSearchCategory] = React.useState('');

    useEffect(() => {
        const fetchData = async () => {
            const resultItems = await axios.get(`${API_URL}/items`);
            
            const resultCategories = await axios.get(`${API_URL}/category`);

            setIsUpdated(false);
            setIsDeleted(false);

            props.addArticle(resultItems.data.data);
            props.addCategory(resultCategories.data.data);
        };
        fetchData();
    },[isDeleted, isUpdated]);

    const filteredItems = props.articles.filter(item => item.category.toLowerCase().includes(searchCategory.toLowerCase()));

    const panes = [
        { menuItem: 'Articulos', render: () => 
        <Tab.Pane >
            <div style={{display: 'flex', justifyContent: 'flex-end' }}>
            <Input  placeholder='Search by Category' value={searchCategory} onChange={(e, data) => setSearchCategory(data.value)} />
            </div>
            <Articles 
                articles={filteredItems} 
                deleteItem={() => setIsDeleted(true)} 
                updateItem={() => setIsUpdated(true)}
            />
        </Tab.Pane> },
        { menuItem: 'Categorias', render: () => 
        <Tab.Pane>
            <Categories 
                categories={props.categories} 
                deleteItem={() => setIsDeleted(true)} 
                updateItem={() => setIsUpdated(true)}
            />
        </Tab.Pane> }
    ]

    return (
        <React.Fragment>
            <br/>
            <Divider horizontal>
                <Header as='h4' disabled>
                    <Icon name='archive' />
                    Sanito Store Inventario
                </Header>
            <br/>
            </Divider>

            <Container>
                <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
            </Container>
           
        </React.Fragment>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle : (input) => dispatch(addArticles(input)),
        addCategory : (input) => dispatch(addCategory(input))
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles,
    categories: state.categories
})


export default (Home, connect(mapStateToProps, mapDispatchToProps)(Home));