import React from 'react';
import ReactDOM from 'react-dom';
import './resources/styles.css';

import Header from './components/header_footer/Header'
import Footer from './components/header_footer/Footer';

class App extends React.Component {
    render() {
      return (
        <div className="App">
            <Header/>
            <Footer/>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
