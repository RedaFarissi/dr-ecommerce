import { useState } from 'react';
import languages from '../language.js';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function HeaderSearch(props){
    const navigate = useNavigate();
    const [data , setData ] = useState({ search: "" })

    const handleSearchChange = (event) => {
        setData({ ...data , search: event.target.value });
    }
    
    const headers = {
        Authorization: `Bearer ${localStorage.getItem('auth_token')}`, 
    };
    
    const search = async(event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('search', data.search);
        try {
            const response = await axios.post(`${props.url}produit_api/search/`, formData, { headers });
            navigate('/search', { state: {searchData: response.data.search, searchText: data.search} });
        }catch (error) {
            console.error('Error during search:', error);
        }
    }
   
    return(
    <form onSubmit={search} method="POST">
        <input type="text" name="search" value={data.search} onChange={handleSearchChange} className="search-field" placeholder={languages.headerTop.placeholder}/>
        <button className="search-btn" type="submit"> 
            <ion-icon name={`search-outlin`}></ion-icon> 
        </button>
    </form>
    )
}