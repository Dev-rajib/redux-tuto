
import './App.css';
import User from './User';
import HomeContainer from './container/HomeContainer';


function App() {
  return (
    <div className="App">
      <HomeContainer/>
      <h1><User data={{name:'Rajib',age:26}} /></h1>
    </div>
  );
}

export default App;
