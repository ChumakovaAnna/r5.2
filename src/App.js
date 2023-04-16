import './App.css';
import * as data from './data';
import NewsLink from './components/NewsLink';
import Course from './components/Course';
import BannerSmall from './components/BannerSmall';
import SearchLinks from './components/SearchLinks';
import Search from './components/Search';
import BannerBig from './components/BannerBig';
import Weather from './components/Weather';
import Widget from './components/Widget';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div>
          <NewsLink data={data.newsLink} news={data.news}></NewsLink>
          <Course data={data.course}></Course>
        </div>
        <div>
          <BannerSmall data={data.bannerSmall}></BannerSmall>
        </div>
      </div>
      <SearchLinks data={data.searchLinks}></SearchLinks>
      <Search></Search>
      <BannerBig data={data.bannerBig}></BannerBig>
      <div className='widgetBlock'>
        <Weather data={data.weather}></Weather>
        <Widget title={'Посещаемое'}>
          {data.visited.map(item => 
            <li key={item.id}>
              <span>{item.title}</span>
              <span>-</span>
              <span>{item.text}</span>
            </li>)}
        </Widget>
        <Widget title={"Телепрограмма"}>
          {data.programTV.map(item => 
            <li key={item.id}>
              <span>{item.time}</span>
              <span>{item.program}</span>
              <span>{item.channel}</span>
            </li>)}
        </Widget>
        <Widget title={"Эфир"}>
          {data.ether.map(item => 
            <li key={item.id}>
              <span>{item.title}</span>
              <span>{item.channel}</span>
            </li>)}
        </Widget>
      </div>
    </div>
  );
}

export default App;
