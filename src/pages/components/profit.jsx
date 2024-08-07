import './style.css'
import { useEffect, useState } from 'react'

function Profit() {
  const dataProfit = [
    {name: 'Karla', profit:"₡1 585 232", city:"San Carlos"},
    {name:'Luz', profit:"₡3 874 412", city:"Puntarenas"},
    {name:'Sonia', profit:"₡852 140", city:"Guanacaste"},
    {name:'Adriana', profit:"₡2 524 632", city:"Limon"},
    {name:'Luis', profit:"₡7 514 210", city:"Cartago"},
    {name:'Silvia', profit:"₡585 652", city:"Alajuela"},
    {name:'Alejandro', profit:"₡1 452 530", city:"Puntarenas"},
    {name:'Josefa', profit:"₡4 514 210", city:"Limon"},
    {name:'Rafael', profit:"₡2 485 458", city:"Cartagos"},
    {name:'Jose', profit:"₡2 025 580", city:"San Carlos"},
    {name:'Carlos', profit:"₡1 282 683", city:"Lima"},
    {name:'Elizabeth',profit:"₡2 852 173", city:"Cartago"},
    {name:'Adriana', profit:"₡1 254 200", city:"Valencia"},
    {name:'Adriana', profit:"₡6 547 240",  city:"San Carlos"},
    {name:'Roberto', profit:"₡3 241 240", city:"Limon"},
    {name:'Carmen', profit:"₡2 230 105",city:"Puntarenas"},
    {name:'Flor',profit:"₡958 520", city:"Caracas"},
    {name:'Rafael',profit:"₡1 470 587",  city:"San Carlos"}] 

    const [profit, setProfit] = useState([])
    const [updateProfit, setUpdateProfit] = useState(false)
   
    useEffect(() => {
      const cantidadAMostrar = 9;
      let elementosAleatorios = [];
    
      while (elementosAleatorios.length < cantidadAMostrar) {
        const indiceAleatorio = Math.floor(Math.random() * dataProfit.length);
        const elementoAleatorio = dataProfit[indiceAleatorio];
    
        if (!elementosAleatorios.includes(elementoAleatorio)) {
          elementosAleatorios.push(elementoAleatorio);
        }
      }

      setProfit(elementosAleatorios)
    }, [updateProfit])

    
  useEffect(() => {
    const timer = setTimeout(() => {
      setUpdateProfit(!updateProfit);
    }, 5000); 

    return () => clearTimeout(timer);
  }, [profit]);

  return (
    <>
      <h2 className='HP-title'> Ganancias de los usuarios del día anterior en <a href='#registro'><strong> Oil Profit</strong></a></h2>
      <p> Los datos se actualizan en tiempo real, cada 5 segundos desde la plataforma oficial de Oil Profit.</p>                            
      <div className='HP-div-head'>                    
          <h6 className='HP-text-table'><div className="HP-point-color"></div>Nombre</h6>
          <h6 className='HP-text-table'>Ganancia</h6>
          <h6 className='HP-text-table'>Ciudad</h6>
      </div>   
      
      {profit.map((item, key)=>( 
        <div className='HP-div-table' key={key}>                    
          <h6 className='HP-text-table'><div className="HP-point-color"></div>{item.name}</h6>
          <h6 className='HP-text-table'>{item.profit}</h6>
          <h6 className='HP-text-table'>{item.city}</h6>
      </div> ))
       }     
    </>
  )
}

export default Profit