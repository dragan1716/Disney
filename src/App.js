import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Navbar from "./components/Navbar";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
}

export default App;
