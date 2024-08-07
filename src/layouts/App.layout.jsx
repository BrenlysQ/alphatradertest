import { Outlet } from 'react-router-dom';
import Header from './header/header'
import Footer from './footer/footer'

function AppLayout () {
  
    return (
      <div>  
        <Header />        
          <div style={{maxWidth: '770px', margin: '0 auto', marginTop:'160px'}}>        
            <Outlet />        
          </div>   
        <Footer/>       
      </div>
    )
  }
  
  export default AppLayout