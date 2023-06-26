export default  function handleColor(bgcolor){
    if( bgcolor === "black" ){
        document.querySelector(':root').style.setProperty('--onyx', 'white') 
        document.querySelector(':root').style.setProperty('--eerie-black', 'white') 
        //filter : grayscale(100%)
    }else{
        document.querySelector(':root').style.setProperty('--onyx', 'hsl(0, 0%, 27%)') ;
        document.querySelector(':root').style.setProperty('--eerie-black', 'hsl(0, 0%, 27%)') 
    }
    
    return bgcolor === "black" ? {backgroundColor:"black",color:"white"} : {backgroundColor:"white",color:"black"}
}

