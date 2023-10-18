
import './App.css';
import BasicExample from './components/Navbar';
import MovieList from './components/MovieList';
import Data from './components/Data'
function App() {
  
  return (
    <div className="App">
     <BasicExample/>
     <MovieList movies={Data}/>

    </div>
  );
}

export default App;
