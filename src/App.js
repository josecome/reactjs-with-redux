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
    width: '100%',
    padding: '10px',
  };
  const divInputStyle = {
    display: 'flex',
  };
  const addTask = () => {

  }
  return (
    <div style={ divStyle }>
      <h1 style={ centerText }>Reactjs with Redux<br />(Task management)</h1><br />
      <div style={ contentStyle }>
      <div style={ divInputStyle }>
        <Button
          color={'blue'}
          text={'Add Task'}
          onClick={ addTask }
          class_name={'btn'}
        />
      </div>

      </div>
    </div>
  );
}

export default App;
