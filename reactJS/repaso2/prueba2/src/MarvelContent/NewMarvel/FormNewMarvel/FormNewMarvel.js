import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarvelSelectList from '../MarvelSelectList/MarvelSelectList';
import {LangsString} from '../../../lang/Lang';

const InputName = (props) => {
  return (
    <div className="input-field">
      <label className="newLabel" htmlFor="Name">{ LangsString.LabelName[props.currentLanguage] }</label>
      <input id="Name" className="newInput" type="text" value={props.name} onChange={props.handleOnChangeName} />
    </div>
  )
}

InputName.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func
}

const InputSurname = (props) => {
  return (
    <div className="input-field">
      <label className="newLabel" htmlFor="Surname">{ LangsString.LabelSurname[props.currentLanguage] }</label>
      <input id="Surname" className="newInput" type="text" value={props.name} onChange={props.handleOnChangeSurname} />
    </div>
  )
}

InputSurname.propTypes = {
  name: PropTypes.string
}


const InputMessage = (props) => {
  return (
    <div className="input-field">
      <label className="newLabel" htmlFor="Message">{ LangsString.LabelMessage[props.currentLanguage] }</label>
      <input id="Message" className="newInput" type="textarea" value={props.name} onChange={props.handleChangeMessage} />
    </div>
  )
}

InputMessage.propTypes = {
  name: PropTypes.string,
  handleChangeMessage: PropTypes.func
}


const SelectRate = (props) => {
  return (
    <div className="input-field">
      <label className="newLabel" htmlFor="Rate">{ LangsString.LabelRate[props.currentLanguage] }</label>
      <select id="Rate" value={props.rate} className="rate-list" onChange={props.handleRateChange}>
          {props.rates.map((rateItem, index) => {
            return (
              <option value={ rateItem } key={index}>{rateItem}</option>
            );          
          } )}
        </select>
    </div>
  )
}

SelectRate.propTypes = {
  name: PropTypes.string,
  rate: PropTypes.string,
  handleRateChange: PropTypes.func,
  rates: PropTypes.array
}

export default class FormNewMarvel extends Component {
  constructor (...args) {
    super (...args);
    this.state = {
      id: '',
      name: '',
      surname: '',
      message: '',
      rate: '5',
      rates: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      marvelItem: ''     
    }

    this.handleOnChangeName = this.handleOnChangeName.bind(this);
    this.handleOnChangeSurname = this.handleOnChangeSurname.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleMarvelSelect = this.handleMarvelSelect.bind(this);
   
  }

  handleOnChangeName (event) {
    this.setState({name: event.target.value});
  }

  handleOnChangeSurname (event) {
    this.setState({surname: event.target.value});
  }

  handleRateChange (event) {
    this.setState({rate: event.target.value});
  }

  handleChangeMessage (event) {
    this.setState({message: event.target.value});
  }

  handleFormSubmit (event) {
    
    event.preventDefault();

    const message = {
      id: JSON.stringify( new Date() ),
      name: this.state.name,
      surname: this.state.surname,
      rate: this.state.rate,
      message: this.state.message,
      marvelItem: this.state.marvelItem
    };

    this.props.handleFormSubmit(message);
    this.setState({name:'' ,surname:'', rate:'5', message:''});

  }

  handleMarvelSelect (newMarvelItem) {
    
    this.setState({marvelItem: newMarvelItem});
  }


  render() {
    return (
      <form className="formnewmarvel">
        <InputName name={this.state.name} handleOnChangeName={this.handleOnChangeName} currentLanguage={this.props.currentLanguage} />
        <InputSurname name={this.state.surname} handleOnChangeSurname={this.handleOnChangeSurname} currentLanguage={this.props.currentLanguage} />
        <SelectRate rates={this.state.rates} 
                    handleRateChange={this.handleRateChange} 
                    currentLanguage={this.props.currentLanguage} />
        <InputMessage name={this.state.message} handleChangeMessage={this.handleChangeMessage} currentLanguage={this.props.currentLanguage} />
        <MarvelSelectList handleMarvelSelect={this.handleMarvelSelect} currentLanguage={this.props.currentLanguage} />   
        <button type='submit' onClick={this.handleFormSubmit}>Enviar</button>         
      </form>
    )
  }
}

FormNewMarvel.propTypes = {
  languages: PropTypes.array,
  currentLanguage: PropTypes.string,
  handleFormSubmit: PropTypes.func
}