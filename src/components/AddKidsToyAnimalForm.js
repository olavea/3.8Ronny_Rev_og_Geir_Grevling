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
  //this is async look above
  //async  uploadFile = event => {

  render() {
    return (
      <form className="toyAnimal-edit" onSubmit={this.createToy}>
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="Name of Your Kids Fav Toy Animal"
        />
        Image
        <input
          type="file"
          id="file"
          name="file"
          placeholder="Last opp et bilde av fargelegging"
          required
          onChange={this.uploadFile}
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

{
  /*
    uploadFile = event => {
    console.log('yo')
    console.log("uploading file...");
    const files = event.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sickFits')

    const res = await fetch
    ('https://api.cloud-inary/olaboka/image/upload', {
      method: 'POST',
      body: data

    });

      const file = await res.json();
      console.log(file);
      this.setState({
        image: file.secure_url,

        largeImage: file.eager[0].secure_url
      });

  };

  */
}

{
  /*
  <Error error={error} />
    <fieldset disabled={loading} aria-busy={loading}>
      <label htmlFor="file">
        Image*/
}

{
  /*
  show the user the image she uploaded
          {this.state.image && <img src={this.state.image} alt="Opplastet fargelegging" }
      </label>
    </fieldset>*/
}
