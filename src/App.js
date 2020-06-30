import React from 'react';
import './App.css';


class Header extends React.Component{
  render(){
    return <h1>Welcome to {this.props.name}'s Odometer app!</h1>;
  };
};

class Footer extends React.Component{
  render(){
    return <p>{this.props.trademark} &trade;</p>
  };
};

class Odometer extends React.Component{
  constructor(){
    super();
    this.state = {
      reading: 0
    };
  }
  
  updateOdometer(change){
    this.setState({
      reading: this.state.reading + change
    });
  }

  render(){
    return (
      <div>
        <div className='digits'>
          <p className='numbers'>{Math.floor(this.state.reading%10000 /1000)} </p>
          <button onClick = {()=>this.updateOdometer(1000)}>Increase</button>
        </div>
        <div className='digits'> 
          <p className='numbers'>{Math.floor(this.state.reading%1000 /100)} </p>
          <button onClick = {()=>this.updateOdometer(100)}>Increase</button>
        </div>
        <div className='digits'>
          <p className='numbers'>{Math.floor(this.state.reading %100 /10)} </p>
          <button onClick = {()=>this.updateOdometer(10)}>Increase</button>
        </div>
        <div className='digits'>
          <p className='numbers'>{this.state.reading % 10} </p>
          <button onClick = {()=>this.updateOdometer(1)}>Increase</button>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <header>
        < Header name='Peng' />
      </header>
      <main>
        < Odometer />
      </main>
      <footer>
        < Footer trademark='pengchen.work' />
      </footer>
    </div>  
  );
}

export default App;

