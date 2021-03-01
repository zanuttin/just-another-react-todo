import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, deleteTodo, filterTerm }) => {
	return (
		<div>
			{todoList
				.filter((todo) => {
					return todo.name.includes(filterTerm);
				})
				.map((todo) => {
					return (
						<Todo del={deleteTodo} id={todo.id} key={todo.id}>
							{todo.name}
						</Todo>
					);
				})}
		</div>
	);
};

export default TodoList;
