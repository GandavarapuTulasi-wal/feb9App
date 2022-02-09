import logo from './logo.svg';
import './App.css';
import Comment from './Comment'
import Forum from './Forum'
import Ecommerce from './Ecommerce'

function App() {
  return (
    <div className="App">
      <Comment></Comment>
      <Forum topic = "What is React"></Forum>
      <Ecommerce></Ecommerce>
      
    </div>
  );
}

export default App;
