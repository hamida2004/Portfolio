import React from 'react'
import styled from 'styled-components'

function CategorieBtn({text , handleClick}) {
const Button = styled.button`
padding: 8px 12px;
border : 1px solid #2b6afc;
color: #2b6afc;
background-color: rgba(0,0,0,0);
border-radius: 8px;
&:hover{
background-color: #2b6afc;
color: #f5fefb;
}
`


  return (
    <Button onClick={handleClick}>{text}</Button>
  )
}

export default CategorieBtn
