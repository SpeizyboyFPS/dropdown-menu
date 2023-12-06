import { useState } from 'react'
import SectionMenu from './components/componentsMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

import './App.css'

function App() {
  const [isInactive, setIsInactive] = useState(true)

  let btnAbrir = 'btnOpen'

  if(isInactive) {
    return (
      <>
        <header>
          <div className="iconMenu">
            <FontAwesomeIcon icon={faBars}  className='bars' id={btnAbrir} 
              onClick={() => setIsInactive(false)}
            />
          </div>
        </header>
      </>
    )
  } else {
    return (
      <>
        <header>
          <div className="iconMenu">
            <FontAwesomeIcon icon={faBars}  className='bars' id={btnAbrir} 
              onClick={() => setIsInactive(false)}
            />
          </div>
        </header>

        <div className='menuSide'>
          <SectionMenu className='menu'>
            <br />
            <FontAwesomeIcon icon={faBars} rotation={90} className='icon iconBars'
            onClick={() => setIsInactive(true)}
            />
            <br />
          </SectionMenu>

          <SectionMenu className='menu'>
            <FontAwesomeIcon icon={faHouse} className='icon' />
            Inicio
          </SectionMenu>

          <SectionMenu className='menu'>
            <FontAwesomeIcon icon={faFile} className='icon' />
            Portafolio
          </SectionMenu>

          <SectionMenu className='menu'>
            <FontAwesomeIcon icon={faVideo} className='icon' />
            Cursos
          </SectionMenu>

          <SectionMenu className='menu'>
            <FontAwesomeIcon icon={faNoteSticky} className='icon' />
            Bloog
          </SectionMenu>

          <SectionMenu className='menu'>
            <FontAwesomeIcon icon={faIdBadge} className='icon' />
            Contacto
          </SectionMenu>

          <SectionMenu className='menu'>
            <FontAwesomeIcon icon={faAddressCard} className='icon' />
            Nosotros
          </SectionMenu>

        </div>

      </>
    )
  }
}

export default App
