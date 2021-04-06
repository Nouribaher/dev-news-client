import React from "react";
import Header from './components/Header';
import './styles/App.css';
import { Route ,Link} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import SearchingOrder from './pages/SearchingOrder';
import "antd/dist/antd.css";

export default function App() {
  return (
    <div>      
 <Header />
   <Route exact path='/home' component={Home}/>
   <Route exact  path='/product' component={Product}/>
   <Route exact  path='/searchingOrder' component={SearchingOrder}/>
    </div>
  );
}
