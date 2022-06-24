import "./CatList.css";
import Cat from "./Cat.js";
import PropTypes from "prop-types";

// const CatList = (props) => {
const CatList = ({ catData, setCatAgeCallback, deleteCatCallback }) => {
  // console.log("catlist prop: ", props);
  // const catData = props.catData;
  console.log("catdata: ", catData);
  // const catComponents = [];

  const catComponents = catData.map((cat) => (
    <Cat
      key={cat.id}
      id={cat.id}
      name={cat.name}
      saying={cat.saying}
      age={cat.age}
      color={cat.color}
      setCatAgeCallback={setCatAgeCallback}
      deleteCatCallback={deleteCatCallback}
    />
  ));

  // for (const cat of catData) {
  //   catComponents.push(
  //     <Cat
  //       key={cat.id}
  //       name={cat.name}
  //       saying={cat.saying}
  //       age={cat.age}
  //       color={cat.color}
  //     />
  //   );
  // }
  return (
    <div>
      <h2 className="catList">Super Amazing List of Cutie Cats</h2>
      {catComponents}
      {/* <Cat name="Lily" saying="Rainbow" age={5} color="tabby" />
      <Cat name="richard" saying="Food" age={5} color="tabby" />
      <Cat name="Jeff" saying="cry" age={5} color="tabby" /> */}
    </div>
  );
};
CatList.propTypes = {
  catData: PropTypes.array.isRequired,
  setCatAgeCallback: PropTypes.func.isRequired,
  deleteCatCallback: PropTypes.func.isRequired,
};

export default CatList;
