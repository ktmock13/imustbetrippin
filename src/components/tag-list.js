import React from 'react'
import styled from "styled-components"

const Tag = styled.li`
  color: white;
  display: inline-block;
  width: auto;
  padding: 3px 10px;
  border-radius: 5px;
  margin-right: 5px
`



const hashCode = (str) => {
  str = str.replace('.', '')
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  return hash;
} 

export const intToRGB = (i) => {
  var c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
  return "00000".substring(0, 6 - c.length) + c;
}

const TagList = ({ tags }) => {

  return (
    <div>
      {
        tags && tags.map( tag => (<Tag className='tag' style={{background: `#${intToRGB(hashCode(tag))}`}}>{tag}</Tag>))
      }    
    </div>
  )
}


export default TagList