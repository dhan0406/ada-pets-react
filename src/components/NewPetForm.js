import React, { Component } from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NewPetForm.css"

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      species: "",
      location: "",
      images: "",
      about: "",
    };
  }
  
  onNameChange = (event) => {
    const name = event.target.value;
    this.setState({
      name,
    })
  }

  onSpeciesChanges = (event) => {
    const species = event.target.value;
    this.setState({
      species,
    })
  }

  onLocationChange = (event) => {
    const location = event.target.value;
    this.setState({
      location,
    })
  }

  onImagesChange = (event) => {
    const images = event.target.value;
    this.setState({
      images,
    })
  }

  onAboutChange = (event) => {
    const about = event.target.value;
    this.setState({
      about,
    })
  }

  onSubmitPet = (event) => {

    event.preventDefault();

    const pet = {
      name: this.state.name,
      species: this.state.species,
      location: this.state.location,
      images: this.state.images,
      about: this.state.about,
    }

    this.props.addPetCallback(pet);
    this.setState({
      name: "",
      species: "",
      location: "",
      images: "",
      about: "",
    });

    this.props.addPetCallback(pet);
  }

  render() {
    return (
      <form  className="new-pet-form" id="new-pet-form" onSubmit={this.onSubmitPet} >

        <h3>Add a Pet</h3>

        <div>
          <label htmlFor="name">Name: </label>
          <input name="name" id="name" type="text" 
            onChange={this.onNameChange} 
            value={this.state.name} />
        </div>

        <div>
          <label htmlFor="species">Species: </label>
          <input name="species" id="species" type="text" 
            onChange={this.onSpeciesChange} 
            value={this.state.species} />
        </div>

        <div>
          <label htmlFor="location">Location: </label>
          <input name="location" id="location" type="text" 
            onChange={this.onLocationChange} 
            value={this.state.location} />
        </div>

        <div>
          <label htmlFor="images">Image Link: </label>
          <input name="images" id="images" type="text" 
          onChange={this.onImagesChange}
          value={this.state.image} />
        </div>

        <div>
          <label htmlFor="about">About: </label>
          <input name="about" id="about" type="text"  
            onChange={this.onAboutChange}
            value={this.state.about} />
        </div>
        
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }
}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;