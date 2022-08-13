import './App.css';
import Mypic from './My-pic';
import Headline from './Headline';
import Header from './Heder';

function App() {
  return (
    <div className="App">
      <Mypic imgurl="pic.jpg"/>
      <Headline/>
      <Header></Header>

    </div>
  );
}

export default App;
