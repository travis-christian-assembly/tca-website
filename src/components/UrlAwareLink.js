import { Link } from 'gatsby'
import React from 'react'

const UrlAwareLink = ({ className, link }) => (
  <div>
    {/^https?:\/\//.test(link.link)
    ? <a className={className} href={link.link} target='_blank' rel='noopener noreferrer'>{link.name}</a>
    : <Link className={className} to={link.link}>{link.name}</Link>
    }
  </div>
)

export default UrlAwareLink
