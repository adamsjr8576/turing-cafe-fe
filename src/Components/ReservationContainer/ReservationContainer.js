import React from 'react';
import './ReservationContainer.css';
import ReservationCard from '../ReservationCard/ReservationCard.js'

const ReservationContainer = ({ reservations, handleReservationDelete, sortReservations }) => {
  const reservationCards = reservations.map(reservation => {
    return (
      <ReservationCard
        date={reservation.date}
        id={reservation.id}
        name={reservation.name}
        number={reservation.number}
        time={reservation.time}
        key={reservation.id}
        handleReservationDelete={handleReservationDelete}
      />
    )
  })
  return(
    <main className='main-container'>
      <div className='select-container'>
        <select className='order-select' onChange={(event) => sortReservations(event.target.value)}>
          <option value=''>--Choose An Option--</option>
          <option value='newest'>Sort by Newest</option>
          <option value='oldest'>Sort by Oldest</option>
        </select>
      </div>
      {reservationCards}
    </main>
  );
}

export default ReservationContainer;
