
import React from "react";

// 1.
class AddKidsToyAnimalForm extends React.Component {
// 9.
  nameRef = React.createRef();
  imageRef = React.createRef();
// 6.
  createToy = event => {
// 7 . stop the form from submitting
    event.preventDefault();
// 10. console.log(this.imageRef.current.value);
// 11.
    const toyAnimal = {
      // 13.

      image: this.imageRef.current.value

      // 14. into state into index
    };
    // 12. console what?
    // 21.
    // 22. console sdding s fish
    this.props.addToyAnimal(toyAnimal);
    //refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
// 2. w#13 7:11
      <form className="toyAnimal-edit" {/* 3.  <-w#13 7:22  5.*/} onSubmit={this.createToy}>
        <input
          name="name"
          // 8.
          ref={this.nameRef}
          type="text"
          placeholder="Name of Your Kids Fav Toy Animal"
        />

        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Photo of Your Kids fav toy animal"
        />
        <button type="submit">
          + Add Your Kids Fav Toy Animal Name and Photo // 4.
        </button>
      </form>
    );
  }
}
export default AddKidsToyAnimalForm;

// nameRef = React.createRef();
// imageRef = React.createRef();

// createToy = event => {
//   event.preventDefault();
//   const toy = {
//     name: this.nameRef.current.value,
//     image: this.imageRef.current.value
//   };
//   // this.props.addToyAnimal(toy);
// };
// ----Z
// <input
// name="name"
// ref={this.nameRef}
// type="text"
// placeholder="Name of Your Kids Fav Toy Animal"
// />
// <input
// name="image"
// ref={this.imageRef}
// type="text"
// placeholder="Photo of Your Kids fav toy animal"
// />
// <button type="submit">
// + Add Your Kids Fav Toy Animal Name and Photo
// </button>

// nameRef = React.createRef();
// imageRef = React.createRef();

// createToy = event => {
//   event.preventDefault();
//   const toy = {
//     name: this.nameRef.current.value,
//     image: this.imageRef.current.value
//   };
//   this.props.addToyAnimal(toy);
// };

// <input
//           name="name"
//           ref={this.nameRef}
//           type="text"
//           placeholder="Toy Animal Name"
//         />
//         <input
//           name="image"
//           ref={this.imageRef}
//           type="text"
//           placeholder="Toy Animal Image"
//         />
//         <button type="submit">+ Add Toy Animal 🐻</button>
//       </form>
// import React from "react";

// class AddKidsToyNameForm extends React.Component {
//   nameRef = React.createRef();
//   imageRef = React.createRef();

//   createKidsName = event => {
//     // 1.  stop the form from submitting
//     event.preventDefault();
//     console.log(this.nameRef.current.value);

//     const toyAnimal = {
//       name: this.nameRef.current.value,
//       image: this.imageRef.current.value
//     };
//     // this.props.addToyAnimal(toyAnimal);
//     // refresh the form
//     event.currentTarget.reset();
//   };

//   render() {
//     return (
//       <form className="fish-edit" onSubmit={this.createKidsName}>
//         <input
//           name="name"
//           ref={this.nameRef}
//           type="text"
//           placeholder="Name of Your Kids Fav Toy Animal"
//         />
//         <input
//           name="image"
//           ref={this.imageRef}
//           type="text"
//           placeholder="Photo of Your Kids fav toy animal"
//         />
//         <button type="submit">+ Add Your Kids Fav Toy Animal Name</button>
//       </form>
//     );
//   }
// }

// export default AddKidsToyNameForm;

// // What if I do it all on the pagr?

// // story todays obstacle , wait with it
// // it works now

// import React from "react";

// class AddKidsToyNameForm extends React.Component {
//   nameRef = React.createRef();

//   createKidsName = event => {
//     // 1.  stop the form from submitting
//     event.preventDefault();
//     const fish = {
//       name: this.nameRef.current.value,
//     };
//     this.props.addFish(fish);
//     // refresh the form
//     event.currentTarget.reset();
//   };

//   render() {
//     return (
//       <form className="fish-edit" onSubmit={this.createKidsName}>
//         <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
//         <button type="submit">+ Add KidsName</button>
//       </form>
//     );
//   }
// }

// export default AddKidsToyNameForm;
