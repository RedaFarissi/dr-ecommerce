export default function Start(props){
    let number
    if( props.start === 1){ 
        number = ( 
        <div>  
           <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
           <i className="fa-solid fa-star-half-stroke text-warning"></i>
           <i className="fa-solid fa-star-half-stroke text-warning"></i>
           <i className="fa-solid fa-star-half-stroke text-warning"></i>
           <i className="fa-solid fa-star-half-stroke text-warning"></i>
        </div> 
        )
    }else if( props.start === '2' ){ 
        number = ( <div> 
            <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
            <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
            <i className="fa-solid fa-star-half-stroke text-warning"></i>
            <i className="fa-solid fa-star-half-stroke text-warning"></i>
            <i className="fa-solid fa-star-half-stroke text-warning"></i>
        </div> )
    }else if( props.start === '3' ){ 
        number = ( <div> 
            <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
            <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
            <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
            <i className="fa-solid fa-star-half-stroke text-warning"></i>
            <i className="fa-solid fa-star-half-stroke text-warning"></i>
        </div> )
    }else if( props.start === '4' ){ 
        number = ( <> 
            <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
            <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
            <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
            <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
            <i className="fa-solid fa-star-half-stroke text-warning"></i>
        </> )
    }
    else if( props.start === '5' ){ 
        number = ( <> 
            <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
            <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
            <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
            <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
            <i className="fa-solid fa-star fa-star-sharp text-warning"></i>
        </> )
    }
    return (
        <>
        {number}   
        </>
    )
    
}