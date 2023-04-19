import './App.css';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import { useSelector, useDispatch } from 'react-redux'
import { loadTasks, filterTasks } from './features/tasks/storeTasks'
import axios from 'axios'

function App() {

  const tasks = useSelector((state) => state.storetask.tasks)
  const totalTasks = useSelector((state) => state.storetask.tasks.length )
  const dispatch = useDispatch()

  // const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const divStyle = {
    with: '800px',
  };
  const centerText = {
    textAlign: 'center',
  };
  const contentStyle = {
    margin: 'auto',
    width: '50%',
    padding: '10px',
  };
  const divInputStyle = {
    display: 'flex',
    margin: 'auto',
    width: '50%',
    padding: '10px',
  };
  const marginBottom = {
    marginBottom: '8px',
  };
  const alltasks = {

  };
  const addTask = async () => {
    const v = { "id": (Number(totalTasks) + 1), "task":inputValue, "status":"Ongoing", "favorite":0 }
    const res = await axios.post('http://127.0.0.1:3000/task/', v,
      {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }
    );
    console.log(res);
  };
  const getData = async () => {
    const res = await axios.get("http://127.0.0.1:3000/task");
    dispatch(loadTasks(res.data))
    console.log(res);
  };
  const TasksList = (v) => {
    console.log(tasks.filter((task) => { return task.status === v }))
    dispatch(filterTasks(tasks.filter((task) => { return task.status === v })))
  };
  const completed = async (id) => {
    let confirm_message = "Confirm to update task as completed"
    if (window.confirm(confirm_message) === false) {
        return false;
    }
    const v = { "status":"Completed" }
    const res = await axios.patch(`http://127.0.0.1:3000/task/${id}`, v,
      {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }
    );
    console.log(res);
  };
  const taskStyle = {
    padding: '8px',
    width: '80%',
    border: '1px solid gray',
  };
  const statusStyle = {
    fontSize: '24px',
    color: '#EC7063',
  };
  return (
    <div style={ divStyle }>
      <h1 style={ centerText }>Reactjs with Redux<br />(Task management)</h1><br />
      <div style={ contentStyle }>
      <div style={ divInputStyle }>
        <input type="text" id="txtaddTask"  class="form-control"
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Add task"
          style={{ width: '180px' }}></input>
        <Button
          text={'Add Task'}
          onClick={ () => addTask() }
          class_name={'btn btn-primary'}
        />
      </div>
      <div style={ contentStyle }>
          Total tasks: { totalTasks }<br />
          <div style={ marginBottom }>
            <Button
              text={'All tasks'}
              onClick={ () => getData() }
              class_name={'btn btn-primary'}
              style={{ paddingLeft: '4px', marginRight: '4px' }}
            />
            <Button
              text={'Ongoing'}
              onClick={ () => TasksList('Ongoing') }
              class_name={'btn btn-primary'}
              style={{ paddingLeft: '4px', marginRight: '4px' }}
            />
            <Button
              text={'Completed'}
              onClick={ () => TasksList('Completed') }
              class_name={'btn btn-primary'}
              style={{ paddingLeft: '4px', marginRight: '4px' }}
            />           
          </div>
          <div style={ alltasks }>
            {
              tasks?.map((task) => ( 
                <div key={tasks.indexOf(task)} style={ taskStyle } >
                  <table>
                    <tbody>
                      <tr>
                        <td><div id="iddiv">{ task.id }</div></td>
                        <td>{ task.task }</td>
                        <td>{ task.status === 'Completed' && (
                          <i class="bi bi-check-circle-fill" style={ statusStyle }></i>
                        ) }</td>
                        <td>
                          {
                            task.status === 'Ongoing' && (
                              <Button
                                text={'Mark as completed'}
                                onClick={ () => completed( task.id ) }
                                class_name={'btn btn-primary'}
                                style={{ paddingLeft: '4px', marginRight: '4px' }}
                              />    
                            )
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>      
                </div>
              ))
            }
          </div>
      </div>

      </div>
    </div>
  );
}

export default App;
