import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import wajdi from './wajdi.jpg';



class App extends React.Component {

  state = {
    fullName:"Wajdi",
    bio :"Bonjour",
    imgSrc : wajdi ,
    profession :"Etudiant",
    show : false,
    date : ""

}


componentDidMount() {
  setInterval(() => {
    let dateNow = new Date()
    dateNow = dateNow.getHours() + ' : ' + dateNow.getMinutes()
    this.setState({ date : dateNow})

  },1000)
  
}

  render(){
  return (
    <>
    { this.state.show && (<>
     <h2>Full Name : {this.state.fullName}</h2>
     <h2>Bio : {this.state.bio}</h2>
     <img src={this.state.imgSrc} />
     <h2>Profession : {this.state.profession}</h2>
     
        </>)
    }
    
    <button onClick={() => {this.setState({show: !this.state.show})}}> Show</button>
    <h2>date : {this.state.date}</h2>
</> 
  )}

}


export default App;
