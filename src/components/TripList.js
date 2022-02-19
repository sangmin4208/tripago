// import { useState, useEffect, useCallback } from 'react'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
// styles
import './TripList.css'

function TripList() {
  const [url, setUrl] = useState('http://localhost:3000/trips')
  const { data: trips, isPending, error } = useFetch(url, { method: 'GET' })

  // const fetchTrips = useCallback(async () => {
  //   const response = await fetch(url)
  //   const json = await response.json()
  //   setTrips(json)
  // }, [url])

  // useEffect(() => {
  //   fetchTrips()
  // }, [fetchTrips])
  // console.log(trips)

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button onClick={() => setUrl('http://localhost:3000/trips')}>
          All Trips
        </button>
        <button
          onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}
        >
          European Trips
        </button>
      </div>
    </div>
  )
}

export default TripList
