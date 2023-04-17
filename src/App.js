import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
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
  const addTask = () => {

  };
  const getData = () => {
    return ''
  };
  const TasksList = (v) => {
    return ''
  }
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
          onClick={ addTask }
          class_name={'btn btn-primary'}
        />
      </div>
      <div style={ contentStyle }>
          Total tasks: <br />
          <div style={ marginBottom }>
            <Button
              text={'All tasks'}
              onClick={ getData }
              class_name={'btn btn-primary'}
              style={{ paddingLeft: '4px', marginRight: '4px' }}
            />
            <Button
              text={'Ongoing'}
              onClick={ TasksList('Ongoing') }
              class_name={'btn btn-primary'}
              style={{ paddingLeft: '4px', marginRight: '4px' }}
            />
            <Button
              text={'Completed'}
              onClick={ TasksList('Completed') }
              class_name={'btn btn-primary'}
              style={{ paddingLeft: '4px', marginRight: '4px' }}
            />           
          </div>
          <div style={ alltasks }>
            
          </div>
      </div>

      </div>
    </div>
  );
}

export default App;
