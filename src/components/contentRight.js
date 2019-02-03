import React from 'react'

const ContentRight = () => {
  const dummy = Array.from(Array(15).keys())
  return (
    <div className="content__right">
      <h2>All Issues</h2>
      <div className="issues">
        {dummy.map((data, index) => {
          return (
            <div className="issue" key={data}>
              <div className="issue__info">
                <span className="issue__no">Issue: {index + 1}</span>
                <time className="issue__date">Jan 3, 2019</time>
              </div>
              <a className="issue__title" href="/">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                a voluptatem reiciendis excepturi, aliquam quos sed, dolorem
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ContentRight
