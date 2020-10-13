import React, { useEffect, useState } from "react";
import Card from "./card";
import RangeSlider from "./RangeSlider";
import Search from "./searchBox";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../style/style.css";
const NavBar = () => {
  const [loading, setLoading] = useState(true);
  const [recepies, setRecepies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get(
          `https://api.edamam.com/search?q=${query}&app_id=3a1afa3c&app_key=
          64b18058601f05883f3d6aea26e561dd	
          `
        )
        .then((data) => setRecepies(data.data.hits.map((obj) => obj["recipe"])))
        .catch((e) => console.log(e));
      setLoading(false);
    };
    fetchData();
  }, [query]);
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Recepies</span>
        <div style={{ color: "white" }} id="loader">
          {loading ? <div id="loading" /> : ""}
          <Search search={search} setQuery={setQuery} setSearch={setSearch} />
        </div>
      </nav>
      <div className="container">
        <RangeSlider />
        <div className="row">
          {recepies.map((recipe, idx) => (
            <Card
              key={idx}
              label={recipe["label"]}
              imageUrl={recipe["image"]}
              ingredients={recipe["ingredientLines"]}
              calories={recipe["calories"]}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
