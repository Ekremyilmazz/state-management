import { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const UpdateName = (e) => {
    setName(e.target.value);
  };
  const UpdatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
  };
  return (
    <form className="form-container" onSubmit={addMovie}>
      <label>Movie Name</label>
      <input type="text" name="name" value={name} onChange={UpdateName} />
      <label>Movie Price</label>
      <input type="text" name="price" value={price} onChange={UpdatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
