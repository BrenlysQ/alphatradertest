import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import avatar1 from '../../assets/avatares/12.jpg'
import avatar2 from '../../assets/avatares/josee.jpg'
import avatar3 from '../../assets/avatares/6.jpg'
import avatar4 from '../../assets/avatares/luis.jpg'

//assets
import Logo from '../../assets/logo.png'
//styles
import './style.css'
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const [scroll, setScroll] = useState(true)
  const notify = () => toast(<div style={{display:'flex'}}>
    <img src={item[0].avatar} style={{borderRadius:'50%', width:'48px'}}/>
    <div style={{marginLeft:'10px'}}>
      <p style={{margin:'0', fontSize:'16px', color:'#3B5998', fontWeight:'600'}}>{item[0].name}</p>
      <p style={{margin:'0', fontSize:'16px', color:'#90949C'}}>acaba de generar {item[0].profit}</p>
      <p style={{margin:'0', fontSize:'16px', color:'#90949C'}}>de un deposito de {item[0].deposit}</p>
    </div>
  </div>, {
      autoClose: 3000,
      toastId: 'ToastTestSend',
      position: "top-right",
    });

  const dataPopUp = [
    {avatar:avatar1,name:'Sonia Lopez', profit:"₡852 140", deposit:"₡140 000"},
    {avatar:avatar3,name:'Adriana Carrero', profit:"₡2 524 632", deposit:"₡100 000" },
    {avatar:avatar2,name:'Luis Perez', profit:"₡7 514 210", deposit:"₡135 000"},
    {avatar:avatar4,name:'Alejandro Paez', profit:"₡1 452 530", deposit:"₡200 000"}
   ] 

   const [item, setItem] = useState([])
   const [updatePopUp, setUpdatePopUp] = useState(false)
  
   useEffect(() => {
     const cantidadAMostrar = 1;
     let elementosAleatorios = [];
   
     while (elementosAleatorios.length < cantidadAMostrar) {
       const indiceAleatorio = Math.floor(Math.random() * dataPopUp.length);
       const elementoAleatorio = dataPopUp[indiceAleatorio];
   
       if (!elementosAleatorios.includes(elementoAleatorio)) {
         elementosAleatorios.push(elementoAleatorio);
       }
     }

     setItem(elementosAleatorios)
   }, [updatePopUp])

   
 useEffect(() => {
   const timer = setTimeout(() => {
     setUpdatePopUp(!updatePopUp);
     notify()
   }, 10000); 

   return () => clearTimeout(timer);
 }, [item]);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY === 0) {
           setScroll(true)
        }
        else {
          setScroll(false)
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

return (
    <div className='header-general'>
      <ToastContainer closeButton={false} hideProgressBar/>
      <Link to={'register'} spy={true} smooth={true} duration={1000} >
        <div className='header-navbar'>
          <p >Inicio</p>
          <p >Canal Trece</p>
          <p >Trece Noticias</p>
          <p >La Nacional 101.5 FM</p>
          <p >Deportivas del trece</p>
          <p >Transparencia</p>
        </div>
      </Link>
      <div className={scroll ? 'header-white' : 'header-white-off' }>
      <Link to={'register'} spy={true} smooth={true} duration={1000} ><p>@trecenoticiascr</p></Link>
      <Link to={'register'} spy={true} smooth={true} duration={1000} ><img src={Logo} alt='Logo' className='header-logo'/></Link>
      <Link to={'register'} spy={true} smooth={true} duration={1000} ><div style={{display:'flex', flexDirection:'column'}}>
          <p>De Lunes a Domingo</p>
          <p>6:30am - 12md - 6pm</p>
        </div></Link>
      </div>
      <Link to={'register'} spy={true} smooth={true} duration={1000} ><div className={scroll ? 'header-red' : 'header-red-off' }>
        <p>Nacionales</p>
        <p>Mundo</p>
        <p>Tecnología</p>
        <p>Economía</p>
        <p>Entretenimiento</p>
      </div></Link>
    </div>
  )
}

export default Header
