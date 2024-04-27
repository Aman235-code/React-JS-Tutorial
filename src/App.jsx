import Lists from "./Lists";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import Button from "./Button";

// props-- read only properties that are shared b/2 components.
// parent comp can send data to child comp
// <Comp key=value/>

// click event --> interaction when a user clicks on a specific element we can respond to clicks by passing a callback to onCLick event handler
function App() {
  const fruits = [
    { id: 1, name: "apple", calories: "ap" },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "Potatoes", calories: 110 },
    { id: 7, name: "Celery", calories: 15 },
    { id: 8, name: "Carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoii", calories: 50 },
  ];
  return (
    <>
      {/* <Student name="aman" age={66} isStudent={false} />
      <Student name="patroc" age={56} isStudent={true} />
      <Student name="ayan" age={36} isStudent={false} />
      <Student name="sandy" age={16} isStudent={true} />
      <Student name="larry" /> */}
      {/* <UserGreeting isLoggedIn={true} username="Aman" /> */}
      {/* {fruits.length > 0 && <Lists items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <Lists items={vegetables} category="Vegetables" />
      )} */}
      <Button />
    </>
  );
}

export default App;
