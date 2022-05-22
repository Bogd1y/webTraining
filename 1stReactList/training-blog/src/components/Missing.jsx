import { NavLink } from "react-router-dom"

const Missing = () => {
  return (
      <main className='Missing'>
          <h2>Page Not Found :{`${'('}`} </h2>
          <p>
              <NavLink to='/'>Homepage</NavLink>
          </p>
      </main>
  )
}

export default Missing