export default function Start(props){
    let number
    if( parseInt(props.start) === 1){ 
        number = ( 
        <div>  
           <i className="fa-solid fa-star fa-star-sharp"></i>
           <i className="fa-solid fa-star-half-stroke"></i>
           <i className="fa-solid fa-star-half-stroke"></i>
           <i className="fa-solid fa-star-half-stroke"></i>
           <i className="fa-solid fa-star-half-stroke"></i>
        </div> 
        )
    }else if( parseInt(props.start) == 2 ){ 
        number = ( <div> 
            <i className="fa-solid fa-star fa-star-sharp"></i>
            <i className="fa-solid fa-star fa-star-sharp"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
        </div> )
    }else if( props.start === '3' ){ 
        number = ( <div> 
            <i className="fa-solid fa-star fa-star-sharp"></i>
            <i className="fa-solid fa-star fa-star-sharp"></i>
            <i className="fa-solid fa-star fa-star-sharp"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
        </div> )
    }else if( props.start === '4' ){ 
        number = ( <> 
            <i className="fa-solid fa-star fa-star-sharp"></i>
            <i className="fa-solid fa-star fa-star-sharp"></i>
            <i className="fa-solid fa-star fa-star-sharp"></i>
            <i className="fa-solid fa-star fa-star-sharp"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
        </> )
    }
    else if( props.start === '5' ){ 
        number = ( <> 
            <i className="fa-solid fa-star fa-star-sharp"></i>
            <i className="fa-solid fa-star fa-star-sharp"></i>
            <i className="fa-solid fa-star fa-star-sharp"></i>
            <i className="fa-solid fa-star fa-star-sharp"></i>
            <i className="fa-solid fa-star fa-star-sharp"></i>
        </> )
    }
    return (
        <>
        {number}   
        </>
    )
    
}