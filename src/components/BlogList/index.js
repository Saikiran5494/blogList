// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogItem-container">
      {blogsList.map(eachItem => (
        <BlogItem blogDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default BlogList
