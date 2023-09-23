import './AdminButton.css'

export default function AdminButton(props){
  return(
    <button onClick={props.testingApi} className={`${(props.isAdmin)?"d-block":"d-none"} btn admin-button`} title="API auto add for admin to test"> 
      <i className="fa-solid fa-plus"></i>
    </button>
  )
}