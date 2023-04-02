export default function Start(props){
    let start
    if( props.number == 1){ start = ( <> <ion-icon name="star"></ion-icon> <ion-icon name="star-half-outline"></ion-icon> <ion-icon name="star-half-outline"></ion-icon> <ion-icon name="star-half-outline"> </ion-icon><ion-icon name="star-half-outline"> </ion-icon> </> )}
    else if( props.number == 2 ){ start = ( <> <ion-icon name="star"></ion-icon><ion-icon name="star"> </ion-icon><ion-icon name="star-half-outline"></ion-icon> <ion-icon name="star-half-outline"> </ion-icon><ion-icon name="star-half-outline"> </ion-icon> </> )}
    else if( props.number == 3 ){ start = ( <> <ion-icon name="star"></ion-icon><ion-icon name="star"> </ion-icon><ion-icon name="star"> </ion-icon><ion-icon name="star-half-outline"> </ion-icon><ion-icon name="star-half-outline"> </ion-icon> </> )}
    else if( props.number == 4 ){ start = ( <> <ion-icon name="star"></ion-icon><ion-icon name="star"> </ion-icon><ion-icon name="star"> </ion-icon><ion-icon name="star"> </ion-icon><ion-icon name="star-half-outline"> </ion-icon> </> )}
    else if( props.number == 5 ){ start = ( <> <ion-icon name="star"></ion-icon><ion-icon name="star"> </ion-icon><ion-icon name="star"> </ion-icon><ion-icon name="star"> </ion-icon><ion-icon name="star"> </ion-icon> </> )}
    return( 
    <>
        {start}
    </> 
    )
}