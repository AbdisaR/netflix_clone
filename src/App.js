import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Originals" fetchrequest={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchrequest={requests.fetchTrending}/>
      <Row title="Top Rated" fetchrequest={requests.fetchTopRated}/>
    </div>
  );
}

export default App;
