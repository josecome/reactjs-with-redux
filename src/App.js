import './App.css';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([]);
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
    return ''
  };
  const getData = async () => {
    const res = await axios.get("http://127.0.0.1:3000/task");
    setTasks(res.data)
    console.log(res);
  };
  const TasksList = (v) => {
    setTasks(tasks.filter((task) => { return task.status === v }))
  };
  const completed = (v) => {
    return ''
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
        <input type="text" id="txtaddTask"  class="form-control" v-model="taks_input" 
          placeholder="Add task"
          style={{ width: '180px' }} />
        <Button
          text={'Add Task'}
          onClick={ () => addTask() }
          class_name={'btn btn-primary'}
        />
      </div>
      <div style={ contentStyle }>
          Total tasks: <br />
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
              tasks.map((task) => ( 
                <div key={tasks.indexOf(task)} style={ taskStyle } >
                  <table>
                    <tbody>
                      <tr>
                        <td><div id="iddiv">{ task.id }</div></td>
                        <td>{ task.task }</td>
                        <td><i v-show="task.status === 'Completed'" class="bi bi-check-circle-fill" 
                          style={ statusStyle }></i></td>
                        <td>
                          <Button
                            v-show="task.status === 'Ongoing'"
                            text={'Mark as completed'}
                            onClick={ () => completed(task) }
                            class_name={'btn btn-primary'}
                            style={{ paddingLeft: '4px', marginRight: '4px' }}
                          />    
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
