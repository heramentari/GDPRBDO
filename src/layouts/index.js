import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { url, productName, description, keywords, title, imagePreview, twitter } from '../shared/meta'

import { colors} from '../shared/styles'
import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>

    <Helmet
      title="The GDPR Checklist - Your GDPR compliance checklist"
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },

        { name: 'og:type', content: 'website', prefix: 'og: http://ogp.me/ns#' },
        { name: 'og:site_name', content: productName, prefix: 'og: http://ogp.me/ns#' },
        { name: 'og:url', content: url, prefix: 'og: http://ogp.me/ns#' },
        { name: 'og:title', content: title, prefix: 'og: http://ogp.me/ns#' },
        { name: 'og:description', content: description, prefix: 'og: http://ogp.me/ns#' },
        { name: 'og:locale', content: 'en_US', prefix: 'og: http://ogp.me/ns#' },

        { name: 'article:author', content: 'Privacy Radius' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: twitter },
        { name: 'twitter:creator', content: twitter },
        { name: 'twitter:url', content: url },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: imagePreview },
        { name: 'og:image', content: imagePreview, prefix: 'og: http://ogp.me/ns#' }
      ]}>
      <html lang="en" />
    </Helmet>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
