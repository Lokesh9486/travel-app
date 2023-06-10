import React from 'react'

export const BlogCard = ({img,content}) => {
  return (
    <div className={`item${img}`}>
            <img src={require(`../images/Blogs_0${img}.png`)} alt="" />
            <div className="content">
               {content}
            </div>
          </div>
  )
}
