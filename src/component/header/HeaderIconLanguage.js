import languages from '../language.js';

export default function HeaderIconLanguage(props){
    return(
        <div  
            className='cursor-pointer mt-1 rounded-circle d-flex justify-content-center align-items-center'
            title={languages.headerTop.icon_lang} onClick={props.handleLanguage}
            style={{width:"38px",height:"38px",color:"black"}} 
        >
            <div className={`fa-solid fa-toggle-off ${(localStorage.getItem("bg_color") === "white" || localStorage.getItem("bg_color") == null )?"text-black":"text-light"}`}> </div>
            &nbsp;
            <div className={`mb-1  ${(localStorage.getItem("bg_color") === "white" || localStorage.getItem("bg_color") == null )?"text-black":"text-light"}`}><b>{(localStorage.getItem("language") === "arabic")?"en":"ar"}</b></div>
        </div>
    )    
}
