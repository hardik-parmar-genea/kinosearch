import React from 'react';
import ReactDOM from 'react-dom';
import SearchKinos from "./searchKinos";
import style from './style.css'

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title"> Kino Search</h1>
        <SearchKinos/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));