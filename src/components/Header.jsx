import fileName from '../img/YRC_Worldwide.png';
import  React from "react";
import {Link} from 'react-router-dom'; 

export default function Header()
{  
return (
    <header>
          <div >
           <h1> 
            <img className="logo" src ={fileName} title = 'YRC' alt=''/>
            <br/>
          
            </h1> 
            </div>
            <nav className="NV">
            <ul >
      <li> <Link to='/home'> Home</Link></li>
      <li> <Link to='/product'> Product</Link></li>
      <li> <Link to='/searchingOrder'> SearchingOrder</Link></li>
            </ul>
            </nav>
</header>
);
}
