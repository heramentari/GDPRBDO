import React from 'react'

import ProductHuntIcon from 'react-icons/lib/fa/product-hunt'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'
import Styled, { css } from 'react-emotion'
import Img from 'gatsby-image'


const Makers = Styled('div')`
  display: flex;
  justify-content: space-around
  @media (max-width: 768px) {
    flex-direction: column
  }
`

const Container = Styled('div')`
  max-width: 1200px;
  margin: 0 auto;
`

const Maker = ({name, img, bio }) => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
    <h2 style={{ color: 'white', textTransform: 'none', textAlign: 'center' }}>{name}</h2>
    { img !== undefined ? <Img resolutions={img.resolutions} style={{ maxWidth: '100px', borderRadius: '50px', margin: '0 auto' }} /> : '' }
    <p style={{ color: 'white', marginTop: '10px',  marginBottom: '10px', textAlign: 'center', lineHeight: '1.5em' }}>{bio}</p>
    <div className='socials' style={{ display: 'flex' }}>
    
      
    </div>
  </div>
)


const Footer = props => (
  <footer id='footer'>

    <span>Makers:</span>
    <div className="gradient">
      <h5>About GDPR Checklist</h5>
      <div className="subtitle">This GDPR Checklist is originally made by a small team from Belgium (Gertjan, Willem, and Johan) to help businesses navigate the GDPR landscape, checkout the original site <a href="https://gdprchecklist.io">here</a>.
      The project is inspired by <a href="https://cto-security-checklist.sqreen.io/">The SaaS CTO Security Checklist</a> created by <a href="https://www.sqreen.io">Sqreen.io</a> <p>This GDPR Checklist was Modified for BDO Indonesia by:</p></div>

      <Makers>
        <Maker
            key='hera'
            name='Hera Mentari'
            img={props.gertjan}
            bio={[
              " IT Advisory Intern -  ",
              <a key="bdoIndonesia" href='https://www.bdo.co.id/en-gb/home' target='_blank'>BDO Indonesia</a>,
              " - ✉ mail@heramentari.com "
             ]}
            /> 
        </Makers>

    </div>
  </footer>
)

export default Footer
