import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link className={"link"} to={'/'}>
      <span className={"logo"}>
        EasyC
      </span>
    </Link>
  )
}

export default Logo