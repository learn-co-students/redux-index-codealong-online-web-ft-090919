import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodosContainer extends Component {

    renderTodos = () => {
        this.props.todos.map( (todo, idx) => <Todo key={idx} text={todo} /> )
    }

    render() {
        return (
            <div>
                {this.renderTodos()}
            </div>
        )
    }
}

mapToStateProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapToStateProps)(TodosContainer)