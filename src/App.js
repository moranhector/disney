import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://api.disneyapi.dev/characters";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        console.log("datos traidos",data.data.data)
        console.log("PROXIMA PAGINA",data.data.nextPage)
        console.log("PAGINA anterior",data.data.prevPage)
        setCharacters(data.data.data);
        setInfo(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {
    fetchCharacters(info.nextPage);
    //console.log("next pagge adsfasdf",info)
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    //console.log("anterior",info)     
    fetchCharacters(info.prevPage);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <>
      <Navbar brand="Disney API" />

      <div className="container py-5">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prevPage ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.nextPage ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>

      <CharacterList characters={characters} />

      <div className="container pb-5">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prevPage ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.nextPage ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
