import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'
import {DISHES} from './shared/Dishes'
import './App.css';

class App extends React.Component {
   constructor(props){
      super(props)
      this.state={
         dishes: DISHES,
      }
   }
   render(){
      return (
         <div>
            <Navbar dark color='primary'>
               <div className='container'>
                  <NavbarBrand href='/'>Ristrorant Con Fusion</NavbarBrand>
               </div>
            </Navbar>
            <Menu dishes={this.state.dishes}/>
         </div>
      );
   }
   
}

export default App;
