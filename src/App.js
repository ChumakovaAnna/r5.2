import './App.css';
import * as data from './data';
import NewsLink from './components/NewsLink';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <div>
        <NewsLink data={data.newsLink} news={data.news}></NewsLink>
      </div>
    </div>
  );
}

export default App;
