import React from 'react';
import { addArticles } from '../actions';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';

const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

export function Home (props) {
    return (
        <React.Fragment>
            { props.articles }
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
        </React.Fragment>

    )
}

function mapDispatchToProps(dispatch){
    return {
        add : (input) => dispatch(addArticles(input))
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);