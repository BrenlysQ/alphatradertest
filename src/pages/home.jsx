import './styles.css'
import {  Element } from 'react-scroll'
//components
import Article from './components/article'
import Register from './components/register'
import Profit from './components/profit'
import Comment from './components/comments'

function Home() {


  return (
    <>
      <Article/>
      <Profit/>
      <Element name='register'> <Register/> </Element>
      <Comment/>
    </>
  )
}

export default Home
