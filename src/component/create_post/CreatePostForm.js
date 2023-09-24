import { useRef } from 'react';

export default function CreatePostForm(props){
    const inputFileRef = useRef(null);

    const clickInputFile=()=>{
        const element = inputFileRef.current
        element.click()
    }
    
    return(
    <div ref={props.myElementRef} className="create-post-form alert alert-secondary"> 
        
        
        <i  onClick={props.display_create_post} 
            className="fa-solid fa-xmark position-absolute fs-3 text-danger" 
            style={{left:"20px",cursor:"pointer"}}
        ></i>
        
        <form onSubmit={props.handleCreatePost} encType="multipart/form-data"  method="POST"> 
          
            <input 
                type="file" name="image" ref={inputFileRef}
                className="CreatePostForm-img" onChange={props.handleInputChange} 
            />
            <div className='create-post-form2'>
                <div className="cadre-img" onClick={clickInputFile}>
                  {props.imageSrc ? (
                    <img
                      src={props.imageSrc}
                      alt="Selected img"
                      style={{ width: '100%', height: '100%', borderRadius:"4px",objectFit:"cover" }}
                    />
                  ) : (
                    <i className="fa-sharp text fa-regular fa-image"></i>
                  )}
                </div> 
                <div  className="cadre-title-price">
                    <h3> Sell Product</h3>
                    <input 
                        type="text" name="title" className='from-title' value={props.data.title} 
                        onChange={props.handleInputChange} placeholder='Product Title'
                    />
                    <div className='d-flex box-prices'>
                        <input 
                            type="number" className='form-default-price' value={props.data.default_price} 
                            name="default_price" placeholder='default price' onChange={props.handleInputChange} 
                        />
                        <input 
                            type="number" className='form-reduction-price' name="price_reduction"  
                            value={props.data.price_reduction}  onChange={props.handleInputChange} placeholder='Price Reduction'
                        />
                    </div>  
                    <div className='d-flex box-prices'>
                        <div className='form-satrt'>
                            <span>Start</span>
                            <select 
                                name="start" className='form-select' value={props.data.start} 
                                onChange={props.handleInputChange} size="3" aria-label="size 3 select example"
                            >
                                <option value="5">Five</option>
                                <option value="4">Four</option>
                                <option value="3">Three</option>
                                <option value="2">Two</option>
                                <option value="1" selected>One</option>
                            </select>
                        </div>
                        <div className='form-category'>
                            <span>Category</span>
                            <select 
                                name="category" className='form-select' id='select_category' 
                                onChange={props.handleInputChange} size="3" aria-label="size 3 select example"
                            >
                            { props.all_category.map(e=> <option key={e.id} value={e.name} selected> {e.name} </option>) }
                            </select>
                        </div>
                    </div>
                </div>
            </div>  
            <textarea 
                name="description" rows="4" cols="50" className='textarea-description'
                value={props.data.description} onChange={props.handleInputChange}
                placeholder='description'
            ></textarea>
           <div className='d-flex justify-content-center'>
             <button type="submit" className='Create-Product-BTN btn btn-lg mt-3 bg-primary text-light'>
                Create Product
             </button>
           </div>
        </form>
        
    </div>
    )
}