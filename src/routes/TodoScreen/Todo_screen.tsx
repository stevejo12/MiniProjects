import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../redux/store';
import { addTask, deleteTask } from '../../redux/tasks/tasksSlice';

import './TodoScreen.scss';

function TodoScreen() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const todos = useSelector((state: RootState) => {
    return state.tasks;
  })

  const handleAddTask = (): void => {
    if (task.trim().length === 0) {
      alert("Enter a task before adding !!");
      setTask("");
      return;
    }

    dispatch(
      addTask({
        id: uuidv4(),
        task: task
      })
    )

    setTask("");
  }

  const handleDeleteTask = (id: string): void => {
    dispatch(
      deleteTask({
        id: id
      })
    )
  }

  return (
    <div className='todo__wrapper'>
      <h1>To Do List</h1>
      <div className="todo__taskInput">
        <input 
          type="text" 
          placeholder="Enter a task" 
          value={task} 
          onChange={(e)=> setTask(e.target.value)} 
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ol className='taskList'>
        {todos.length === 0 && <div>There are no task recorded</div>}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.name}
              <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ol>
      <Link to="/">Go back home</Link>
    </div>
  )
}

export default TodoScreen;