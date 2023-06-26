import axios from 'axios';
import React , {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header , Home ,  Login , CreateStore , CreateAccount  , Cart , CategoryItems } from './component/index.js';
import './App.css';
import { handleColor } from './component/function.js'


class App extends Component {
  constructor(props){
    super(props)
    this.clickProfileRef = React.createRef(); //useRef
    this.state = {
      all_product :[], all_category: [] , best_discount: [] , last_four_produit: [] , 
      start_five_last_four: [] , deal_of_day: [] , last_produit_after_four: [] , 
      language: "arabic" , bg_black: localStorage.getItem("bg_color") !== null , 
    }
  }
  changeColor = (event) =>{
    this.setState( prevState => ({...prevState , bg_color : true }) );
    if (localStorage.bg_color === "black" || localStorage.bg_color === null) {
      localStorage.setItem("bg_color","white")
      window.document.body.style.backgroundColor = "white"
    }else{
      localStorage.setItem("bg_color","black")
      window.document.body.style.backgroundColor = "black"
    }
    event.stopPropagation();
  }

  clickProfile =(event)=>{
    const display = getComputedStyle(this.clickProfileRef.current).getPropertyValue('display');
    //check if profile is vissible or not , and save reverse result
    (display==="none")?this.clickProfileRef.current.style.display = "block":this.clickProfileRef.current.style.display = "none";
    event.stopPropagation()
  }

  async componentDidMount(){
    (localStorage.bg_color === undefined||localStorage.bg_color === null||localStorage.bg_color === "white")?document.body.style.backgroundColor = "white" : document.body.style.backgroundColor = "black" 
    //console.log(this.state)
    const url = "http://localhost:8000/";
    
    try {
      const response = await axios.get(url + "produit_api/");
      const responseData = response.data;
      this.setState({
        all_product: responseData.all_product || [],
        all_category : responseData.all_category || [],
        best_discount: responseData.best_discount || [],
        last_four_produit: responseData.last_four_produit || [],
        start_five_last_four: responseData.start_five_last_four || [],
        deal_of_day: responseData.deal_of_day || [],
        last_produit_after_four: responseData.last_produit_after_four || [],
      });
    } catch (error) {
      console.log(error);
    }
  }

   
  render(){
    return(
    <div onLoad={this.loading} style={handleColor(localStorage.bg_color)} >  
      <Router>
        <Header  
            changeColor={this.changeColor} 
            color={this.color}
            language={this.state.language}
            clickProfile={this.clickProfile}
            clickProfileRef={this.clickProfileRef}
            all_category={this.state.all_category}
        />
        <main>
            <Routes>                
                <Route path='/' element={<Home 
                    all_product={this.state.all_product}
                    best_discount={this.state.best_discount} 
                    last_four_produit={this.state.last_four_produit}
                    start_five_last_four={this.state.start_five_last_four}
                    deal_of_day={this.state.deal_of_day}
                    last_produit_after_four={this.state.last_produit_after_four}
                    bg_black={this.state.bg_black}
                    changeColor={this.changeColor}
                  />} 
                />

                <Route path='/create_account' element={<CreateAccount />} />    
                
                <Route path='/login' element={<Login />} />    
                
                <Route path='/createstore' element={<CreateStore />} />    

                <Route path='/cart' element={<Cart />} />   
                
                {this.state.all_category.map(i=><Route path={i.slug} element={<CategoryItems name={i.name} slug={i.slug} />} />)}
            </Routes>  
        </main>
      </Router>
    </div> 
    )
  }
}

export default App;