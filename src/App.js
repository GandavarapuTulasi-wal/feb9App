import logo from './logo.svg';
import './App.css';
import Comment from './Comment'
import Forum from './Forum'
import Ecommerse from './Ecommerse'

function App() {
  return (
    <div className="App">
      <Comment></Comment>
      <Forum topic = "What is React"></Forum>
      <Ecommerse></Ecommerse>
      
    </div>
  );
}

export default App;
