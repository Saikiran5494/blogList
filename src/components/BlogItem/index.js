// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="item-container">
      <div className="details">
        <h1 className="title">{title}</h1>
        <time>{publishedDate}</time>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
