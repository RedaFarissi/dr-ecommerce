import axios from 'axios';
import React , {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header , Home , Jewellery , Login , Electronics , Kids , Men , Women , CreateStore , CreateAccount} from './component/index.js';
import './App.css';
import { handleColor } from './component/function.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      best_discount: [] , last_four_produit: [] , start_five_last_four: [] , deal_of_day: [] ,
      last_produit_after_four: [] , category_name: [] , language: "arabic" , 
      bg_black: localStorage.getItem("bg_color") !== null , 
    }  
  }

  
  changeColor = () =>{
    this.setState( prevState => ({...prevState , bg_color : true }) );
    if (localStorage.bg_color === "white" || localStorage.bg_color === null) {
      localStorage.setItem("bg_color","black")
      window.document.body.style.backgroundColor = "black"
    }else{
      localStorage.setItem("bg_color","white")
      window.document.body.style.backgroundColor = "white"
    }
  }

  
  async componentDidMount() {
    const url = "http://localhost:8000/"
    const links = {
      "best_discount" : 'produit_api/best_discount/',
      "last_four_produit" : 'produit_api/last_four_produit/',
      "start_five_last_four" : 'produit_api/start_five_last_four/',
      "deal_of_day" : 'produit_api/deal_of_day/',
      "last_produit_after_four" : 'produit_api/last_produit_after_four/',
    };
    try {
      const requests = Object.values(links).map(link => axios.get(url + link));
      const responses = await Promise.all(requests);
      const data = {};
      Object.keys(links).forEach((key, index) => { 
        data[key] = responses[index].data; 
      });
      this.setState(data);
    }catch (error) {
      console.log(error);
    }
  }
  render(){
    return(
      
    <div onLoad={this.loading} style={handleColor(localStorage.bg_color)}>  

      <Router>
        <Header 
            changeColor={this.changeColor} 
            language={this.state.language}
        />
        <main>
            <Routes>
                <Route path='/' element={<Home 
                    best_discount={this.state.best_discount} 
                    last_four_produit={this.state.last_four_produit}
                    start_five_last_four={this.state.start_five_last_four}
                    deal_of_day={this.state.deal_of_day}
                    last_produit_after_four={this.state.last_produit_after_four}
                    
                    bg_black={this.state.bg_black}
                    changeColor={this.changeColor}
                  />} 
                />
                <Route path='/jewellery' element={<Jewellery />} />
                <Route path='/electronics' element={<Electronics />} />    
                <Route path='/kids' element={<Kids />} />    
                <Route path='/men' element={<Men />} />    
                <Route path='/women' element={<Women />} />   
                <Route path='/create_account' element={<CreateAccount />} />    
                <Route path='/login' element={<Login />} />    
                <Route path='/createstore' element={<CreateStore />} />    
            </Routes>  
        </main>
      </Router>
    </div> 
    )
  }
}

export default App;