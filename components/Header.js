import React from 'react'

function Header({title, description, image, children}) {
  return (
    <div className={`bg-${image} `}>
      <div className=''>
        <h1 className=''>{title}</h1>
        <p className=''>{description}</p>
        <div className=''>{children}</div>
      </div>
    </div>
  )
}

export default Header