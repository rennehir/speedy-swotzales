import React from 'react';
import Card from '@material-ui/core/Card'

import Form from './Form';
import List from './List';
import useTodoState from '../useTodoState';

const PieceOfSwot = (props) => {
    const { todos, addTodo, deleteTodo } = useTodoState([]);

    return (
        <Card>
            <h2>{props.title}</h2>
            <Form title={props.title} saveTodo={todoText => {
                const trimmedText = todoText.trim();
    
                if (trimmedText.length > 0) {
                    addTodo(trimmedText);
                }
            }} />

            <List todos={todos} deleteTodo={deleteTodo} />
        </Card>
    );
}

export default PieceOfSwot;
