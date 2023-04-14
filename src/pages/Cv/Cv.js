import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation'
import Footer from '../../components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'

const Cv = () => {
    const [name, setName] = useState("Yoav Cartozo")

    const HandleName = (cb) => {
      setName(cb)
    }
  
    return (
      <div className="App">
  
          <Header/>
  
          <NavBar />
      
          <SectionPresentation HandleName= {HandleName} />
         
          <Footer/>
       
      </div>
    );
}

export default Cv