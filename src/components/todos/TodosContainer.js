import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodosContainer extends Component {
    render() {
        return (
            <ul>
               {this.props.todos.map((todo, i) => <Todo key={i} text={todo}/>)}
            </ul>
        );
    }
}
let mapState = state => ({todos: state.todos})
export default connect(mapState)(TodosContainer);
