import React from 'react';

const styles = {
  todo: { cursor: 'pointer' },
  complete: { color: 'green', textDecoration: 'line-through' },
}

const Todo = ({ id, name, complete, todoClick }) => (
  <div>
    <li
    style={ complete ? { ...styles.todo, ...styles.complete} : styles.todo }
    onClick={ () => todoClick(id) }
    >
      {name}
    </li>
  </div>
)

export default Todo;