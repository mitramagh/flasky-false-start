import { Component, useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CatList from "./components/CatList";
import Cat from "./components/Cat";
import CatForm from "./components/CatForm";

function App() {
  const [placeholder, setPlaceholder] = useState("Hi");
  // const catData1 = [
  //   { id: 1, name: "Lily", saying: "Rainbow", age: 5, color: "tabby" },
  //   { id: 2, name: "richard", saying: "Food", age: 5, color: "tabby" },
  //   { id: 3, name: "Jeff", saying: "Cry", age: 5, color: "tabby" },
  // ];
  // const catData2 = [
  //   { id: 1, name: "Lily", saying: "Food", age: 5, color: "tabby" },
  //   { id: 2, name: "richard", saying: "Cry", age: 5, color: "tabby" },
  // ];

  // const [cats, setCats] = useState(catData1);
  const [cats, setCats] = useState([]);
  useEffect(() => {
    getCatsFromAPI();
  }, []);

  const getCatsFromAPI = () => {
    axios
      .get(`http://127.0.0.1:5000/cats`)
      .then((response) => {
        setCats(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };
  const handleAppClick = () => {
    setPlaceholder(placeholder + "!");
  };

  const deleteCat = (id) => {
    console.log("Delete: ", id);

    axios
      .delete(`http://127.0.0.1:5000/cats/${id}`)
      .then((response) => {
        const newCats = cats.filter((cat) => cat.id !== id);
        setCats(newCats);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const setCatAge = (id) => {
    console.log("inside setCatAge", id);

    //create a copy of cats
    const olderCats = [...cats];
    let targetCat;
    //increase the age of cat with id
    for (let cat of olderCats) {
      if (cat.id === id) {
        targetCat = cat;
      }
    }

    axios
      .put(`http://127.0.0.1:5000/cats/${targetCat.id}`, {
        name: targetCat.name,
        age: targetCat.age + 1,
        color: targetCat.color,
        saying: targetCat.saying,
      })
      .then((response) => {
        targetCat.age++;
        setCats(olderCats);
      })
      .catch((error) => {
        console.log("error");
      });
    //call setCats to update array
  };

  const makeNewCat = (data) => {
    console.log(data);
    axios
      .post("http://127.0.0.1:5000/cats", data)
      .then((response) => {
        getCatsFromAPI();
      })
      .catch((error) => {
        console.log("errorrrrrrr");
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Otters Flasky</h1>
      </header>
      <button onClick={handleAppClick}>{placeholder}</button>
      <main>
        <CatForm handleSubmission={makeNewCat} />
        <CatList
          catData={cats}
          setCatAgeCallback={setCatAge}
          deleteCatCallback={deleteCat}
        />
        {/* <CatList catData={catData2} /> */}
      </main>
    </div>
  );
}

export default App;
