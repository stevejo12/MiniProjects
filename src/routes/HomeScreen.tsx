import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <>
      <h1>Click One of These Mini Project</h1>
      <ul>
        <li>
          <Link to="/todo">To Do App</Link>
        </li>
        {/* <li>
          <Link to="/weather">Weather App</Link>
        </li> */}
      </ul>
    </>
  )
}

export default HomeScreen