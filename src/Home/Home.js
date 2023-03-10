import "./Home.css"
import Posts from "./Posts/Posts"
import Stories from "./stories/Stories"

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Posts />
      
    </div>
  )
}

export default Home
