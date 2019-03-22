import React from "react";

class AddKidsToyAnimalForm extends React.Component {
  nameRef = React.createRef();
  imageRef = React.createRef();

  createToy = event => {
    event.preventDefault();

    const toyAnimal = {
      name: this.nameRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addColoringPage(toyAnimal);
    //refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="toyAnimal-edit" onSubmit={this.createToy}>
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="Name of Your Kids Fav Toy Animal"
        />

        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Ta bilde av fargelegging"
        />
        <button type="submit">
          + Legg til barnets fargelegging på denne siden
        </button>
      </form>
    );
  }
}
export default AddKidsToyAnimalForm;

//A Photo of Coloring Page
//Add a Photo of Your Kids coloring page to this page
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
