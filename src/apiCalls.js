export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(res => res.json())
}

export const postReservation = (state) => {
  const { name, date, time, number } = state
  const dateSplit = date.split('-');
  dateSplit.shift();
  const newDate = dateSplit.join('/');
  const options = {
    method: "POST",
    body: JSON.stringify({
      name: name,
      date: newDate,
      time: time,
      number: parseInt(number)
    }),
    headers: {
      "Content-Type": "application/json"
      }
    }
  return fetch('http://localhost:3001/api/v1/reservations', options)
  .then(res => res.json())
}

export const deleteReservation = (id) => {
  const options = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
      }
  }

  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, options)
    .then(res => res.json())
}
