import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import SearchForm from './view/pages/searchPage';
import SearchResult from './view/pages/searchResult';
import Question from './view/pages/question';
import { RouteWithAnimation } from './view/components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <RouteWithAnimation exact path="/" component={SearchForm} />
          <RouteWithAnimation
            path="/search/:searchValue"
            component={SearchResult}
          />
          <RouteWithAnimation
            path="/question/:questionId"
            component={Question}
          />
        </Router>
      </header>
    </div>
  );
}

export default App;
