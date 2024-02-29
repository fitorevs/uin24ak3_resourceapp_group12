
import { Link } from 'react-router-dom'
import Main from './layouts/Main'
import BuildRoutes from './components/BuildRoutes'

import { resources } from "./assets/ressurser"

import { createContext, useContext } from 'react'

import './App.css'

import { siteData } from './components/StructureCTX';

import { useNavigate } from 'react-router-dom';

function App() {

    const retrieveData = () => {
      let placeholder = {"key" : []}

      resources.map(resource => {
        const category = resource.category
        
        const bundle = {
          "title" : resource.title,
          "url" : resource.url
        }
        
        placeholder["key"].includes(category)
        ?
        placeholder[category].push(bundle)
        :
        (placeholder["key"].push(category),
        placeholder[category] = [(bundle)],
        placeholder[category]["header"] =
          (category.includes("-")
          ?
          category.replace("-", " ")
          : 
          category)
        )
      })

      return placeholder
  }
  
  return (  
    <siteData.Provider value={retrieveData()}>
      <Main>
        <BuildRoutes/>
      </Main>
    </siteData.Provider>      
  )
}

export default App
