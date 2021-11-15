import React from 'react'
import styled from 'styled-components'

const Tag = styled.li`
  color: white;
  display: inline-block;
  width: auto;
  padding: 3px 10px;
  border-radius: 5px;
  margin-right: 5px;
`

const hashCode = (str) => {
  str = str.replace('.', '')
  var hash = 0
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  return hash
}

export const intToRGB = (i) => {
  var c = (i & 0x00ffffff).toString(16).toUpperCase()
  return '00000'.substring(0, 6 - c.length) + c
}

const occurrences = (arr) =>
  arr.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc
  }, {})

const TagFilter = ({ posts }) => {
  const justTags = posts.map((post) => {
    const tags = post.node.frontmatter.tags
    return tags
  })

  const tags = justTags.flat()
  const tagOccurrencesAsEntries = Object.entries(occurrences(tags))
  const tagOccurrencesAsEntriesSorted = tagOccurrencesAsEntries.sort((a, b) => {
    return b[1] - a[1]
  })
  // const tagTitleStrings = tagOccurrences.sort((a,b) => a.)
  console.log(tagOccurrencesAsEntriesSorted)
  return (
    <div className="tagrow">
      {tagOccurrencesAsEntriesSorted &&
        tagOccurrencesAsEntriesSorted.map((tag) => (
          <Tag
            className="tag"
            style={{ background: `#${intToRGB(hashCode(tag[0]))}` }}
          >
            {`${tag[0]} (${tag[1]})`}
          </Tag>
        ))}
    </div>
  )
}

export default TagFilter
