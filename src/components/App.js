// import React from "react";
// import { render } from "react-dom";

// import Inventory from "../pages/p2";

// class App extends React.Component {
//   state = {
//     toyAnimals: {}
//   };

//   addToyAnimal = toyAnimal => {
//     const toyAnimals = { ...this.state.toyAnimals };
//     toyAnimals[`drawing${Date.now()}`] = toyAnimal;
//     this.setState({ toyAnimals });
//   };

//   render() {
//     return (
//       <div className="catch-of-the-day">
//         <Inventory addToyAnimal={this.addToyAnimal} />
//       </div>
//     );
//   }
// }

// export default App;

//<fish /> = book
// don't reach into an object in react vid# 13
// since 1970 milliseconds

//  addDrawing
//1 localstorage

//  addName
//1 localstorage

// addFish = fish => {
//   // 1. Take a copy of the existing state
//   const fishes = { ...this.state.fishes };
//   // 2. Add our new fish to that fishes variable
//   fishes[`fish${Date.now()}`] = fish;
//   // 3. Set the new fishes object to state. WTHeck?
//   this.setState({ fishes });
// };
