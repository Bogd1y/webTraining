import {FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa'

const Header = ({ title, width }) => {
  return (
      <header className="Header">
          <h1>{title}</h1>
          {/* if you change device width you'll see another icon */}
          {width < 768 ? <FaMobileAlt /> 
            : width < 992 ? <FaTabletAlt /> 
              : <FaLaptop />
          }
      </header>
  )
}

export default Header