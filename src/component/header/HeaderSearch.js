import languages from '../language.js';

export default function HeaderSearch(props){
    return(
    <form method="POST">
        <input type="search" name="search" className="search-field" placeholder={languages.headerTop.placeholder}/>
        <button className="search-btn" name="search-btn" type="submit"> 
            <ion-icon name={`search-outlin`}></ion-icon> 
        </button>
    </form>
    )
}