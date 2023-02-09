import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsDribbble} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="http://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="http://gihub.com" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="http://dribbble.com" target="_blank" rel="noreferrer">< BsDribbble /></a>
    </div>
  )
}

export default HeaderSocials