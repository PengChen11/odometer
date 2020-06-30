import React from 'react';
import logo from './logo.svg';
import './App.css';


class Header extends React.Component{
  render(){
    return <h1>Hello, {this.props.name}!</h1>;
  }
}



function App() {


  return (
    <div>
      <header>
        < Header name='Peter' />
      </header>
      <main>
      this is main
      </main>
      <footer>
      this is footer
      </footer>
    </div>  
  );
}









export default App;

