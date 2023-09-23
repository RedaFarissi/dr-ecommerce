export default function HeaderIconDarkOrSun(props){
    return( 
    <div className='rounded-circle d-flex justify-content-center align-items-center position-relative' style={{width:"38px",height:"38px",color:"black"}} title="Dark mode">
        <div className={`fa-solid fa-${( localStorage.bg_color === undefined || localStorage.bg_color === null || localStorage.bg_color === "white")?"moon":"sun"} fs-3 btn d-flex justify-content-around fs-5`} onClick={props.changeColor} style={( localStorage.bg_color === undefined || localStorage.bg_color === null || localStorage.bg_color === "white")?{color:"black"}:{color:"gold"}}></div>  
    </div>
    )
}