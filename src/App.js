import Home from './Components/Home/Home';
import Helmet from 'react-helmet'

function App() {
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Shoe Shop</title>
                <link rel="canonical" href="http://http://localhost:3000/" />
      </Helmet>
      <Home/>
    </div>
  );
}

export default App;
