import React from 'react'
import styled from 'styled-components'

function CategorieBtn({text , handleClick, selected}) {
const Button = styled.button`
padding: 8px 12px;
border : 1px solid #2b6afc;
color: ${selected ? '#f5fefb' : '#2b6afc'};
background-color: ${selected ? '#2b6afc' : 'transparent'};
border-radius: 8px;
cursor: pointer;
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
