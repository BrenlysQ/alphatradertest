import './style.css'
import Like from '../../assets/avatares/like.png'
import avatar1 from '../../assets/avatares/12.jpg'
import avatar2 from '../../assets/avatares/josee.jpg'
import avatar3 from '../../assets/avatares/6.jpg'
import avatar4 from '../../assets/avatares/luis.jpg'

function Comments() {
  const dataComments = [
    {avatar: avatar1,name: 'María Paz', comment:"¿Realmente funciona? He oído algo parecido, pero nunca he visto ninguna reseña.",time:'12h', likes:"12"},
    {avatar: avatar2,name:'Luis Martínez', comment:"Acabo de retirar mis ganancias ... Activa tu cerebro y apúntate.", time:"10m",likes:"23"},
    {avatar: avatar3,name:'Josefa Zelaya', comment:"Finalmente pude comprar un auto nuevo. Los sueños se hacen realidad)))", time:"5h",likes:"50"},
    {avatar: avatar4,name:'José López', comment:"Acabo de inscribirme, amigos, ¡deséenme suerte!", time:"3h",likes:"40"}] 
 
  return (
    <>
     <h1 className='HC-title'>Comentarios</h1>
     <div className='HC-divider'/>
     {dataComments.map((item, key)=>( 
     <div className='HC-container'  key={key}>
        <img src={item.avatar} alt="avatar" style={{borderRadius:'50%', width:'50px', height:'50px'}}/>
        <div style={{marginLeft:'15px'}}>
            <p style={{color:'#3B5998', fontSize:'16px', fontWeight:'600', margin:'0'}}>{item.name}</p>
            <p style={{fontSize:'16px', color:'#212529', fontWeight:'400', margin:'0'}}>{item.comment}</p>
            <p style={{fontWeight:'600', margin:'0', fontSize:'16px'}}>{item.time}</p>
            <div className='HC-interactions'>
                <li className='HC-list-items'><a href="#registro" style={{fontSize:'16px', color:'#3B5998', fontWeight:'400'}}>Me gusta</a></li>
                <li className='HC-list-items'><a href="#registro" style={{fontSize:'16px', color:'#3B5998', fontWeight:'400'}}>Respuestas</a></li>
                <li className='HC-list-items'><img src={Like} style={{width:'20px', padding:'0'}}/><a href="#registro" style={{fontSize:'16px', color:'#3B5998', fontWeight:'400'}}>{item.likes}</a></li>              
            </div>
        </div>
     </div>))
       }     
    </>
  )
}

export default Comments