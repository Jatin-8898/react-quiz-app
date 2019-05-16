import React from 'react';
import ReactDOM from 'react-dom';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Main from './components/core/Main';
import Footer from './components/header_footer/Footer';

class App extends React.Component {
    render() {
      return (
        <div className="App">
            <Header/>
            <Main />
            <Footer/>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
