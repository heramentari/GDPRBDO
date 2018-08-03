import React from 'react'
import { steps } from '../data.js'
import logo from '../images/logo.png'
import logo2 from '../images/logo2.png'
import { url } from '../shared/meta'
import Scrollspy from 'react-scrollspy'

let time = new Date().toLocaleString();

const Sidebar = props => (
  <div className="fixed">
    <a href="/">
      <img src={logo} alt="GDPR Checklist" className="logo" />
    </a>
    <nav>
      <ul>
        <Scrollspy items={['your-data', 'accountability-management', 'new-rights', 'consent', 'follow-up', 'special-cases']} currentClassName="is-current">
          { steps.map(s => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}
        </Scrollspy>
      </ul>
    </nav>

    <div className='newsletter-sidebar'>
      <a href="/">
      <img src={logo2} alt="GDPR Checklist" className="logo" />
      </a>
    </div>
  </div>
)


export default Sidebar