export default function HeaderMobile(){
    return(
      <div className="mobile-bottom-navigation">
        <button className="action-btn" data-mobile-menu-open-btn> <ion-icon name="menu-outline"></ion-icon> </button>
        <button className="action-btn"> <ion-icon name="bag-handle-outline"></ion-icon> <span className="count">0</span></button>
        <button className="action-btn"> <ion-icon name="home-outline"></ion-icon>  </button>
        <button className="action-btn"><ion-icon name="heart-outline"></ion-icon> <span className="count">0</span></button>
        <button className="action-btn" data-mobile-menu-open-btn> <ion-icon name="grid-outline"></ion-icon> </button>
      </div> 
    )
}