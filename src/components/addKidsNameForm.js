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
