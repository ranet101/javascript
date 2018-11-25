import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import MarvelContent from './MarvelContent/MarvelContent';
import MarvelCharacters from './MarvelCharacters/MarvelCharacters';
import MarvelCharacterItem from './MarvelCharacterItem/MarvelCharacterItem';

import About from './About/About';
import './App.css';

import { Switch, Route, Redirect } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMask } from '@fortawesome/free-solid-svg-icons';

library.add(faMask);

class App extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      currentLanguage: 'es',
      languages: ['es', 'eus', 'en']    
    }
    this.handleLangChange = this.handleLangChange.bind(this);
    
  }

  handleLangChange (lang) {
    this.setState({currentLanguage: lang});
  }

  render() {
    return (
      <div className="App">
        <Header currentLanguage={this.state.currentLanguage} languages={this.state.languages} handleLangChange={this.handleLangChange}/>
        
        <Switch>
          <Route exact path="/" component={ (props) => <MarvelContent currentLanguage={this.state.currentLanguage} languages={this.state.languages} {...props}/> } /> } />
          <Route exact path="/about" component={ (props) => <About currentLanguage={this.state.currentLanguage} languages={this.state.languages} {...props}/> } /> }/>
          <Redirect exact from="/characters" to="/characters/1" />
          <Route path="/characters/:MarvelPage" component={ (props) => <MarvelCharacters currentLanguage={this.state.currentLanguage} languages={this.state.languages} {...props}/> } />
          <Route path="/character/:MarvelItem" component={ (props) => <MarvelCharacterItem currentLanguage={this.state.currentLanguage} languages={this.state.languages} {...props}/> } />                                           
        </Switch>
      </div>
    );
  }
}

export default App;
