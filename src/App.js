import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
<div>
      <div class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="navbar navbar-expand-lg navbar-dark bg-dark">
   
    <Link to="/"> Beranda /  </Link>  <br/>
        <Link to="/protokol"> Protokol / </Link> 
        <Link to="/data"> Data / </Link> 
        
      
  </div>
</div>
<div class="jumbotron jumbotron-fluid"> 

<p><Utama /></p></div></div>
        
       
       
      
    );
  }
}

export default App;
