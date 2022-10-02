let seatInCar = 7;
let passengers = 5;
let infants = 1
let infantSeats = 1
let fullTank = true;
if ( seatInCar >= passengers && infantSeats >= infants ) {
    console.log( 'lets ride' );
    if ( fullTank ) {
        console.log( 'all gassed up and ready' );
    }
    else{
        console.log( 'we need to fill up' );
    }
} 
else {
    console.log( 'we are not ready. check car, passengers, equipment' );
}