import { PropTypes } from "prop-types";
function Lists(props) {
  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical

  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical

  //   fruits.sort((a, b) => a.calories - b.calories); // numerical order

  //   fruits.sort((a, b) => b.calories - a.calories); // reverse numerical order

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  //   const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

Lists.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

Lists.defaultProps = {
  category: "Category",
  items: [],
};
export default Lists;
