import { Link } from 'react-scroll';
import { useState } from 'react'
//styles
import './style.css'

function Footer() {
  const [show, setShow] = useState(true)

return (
  <div>
    {show && <div className='footer-general'>
        <span className='footer-X' onClick={() => setShow(false)}>X</span>
        <div style={{display:'flex', justifyContent:'space-evenly'}}>
          <h2>Regístrate en Oil Profit y recibe 20% en bonificación sobre tu primera inversión.</h2>
          <Link to={'register'} spy={true} smooth={true} duration={1000} >
          <button className='footer-button' onClick={() => setShow(false)}>Regístrate Ahora</button>
          </Link>
        </div>
    </div>}
  </div>
  )
}

export default Footer