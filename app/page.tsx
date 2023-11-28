import Image from 'next/image'
import Menu from './Menu/page'
import Sobre from './Sobre/page'
import Projetos from './Projetos/page'
import Footer from './Footer/page'

export default function Home() {
  return (
    <>
    < Menu/>
    <Sobre/>
    <Projetos/>
    <Footer/>
    </>
   ) 
}