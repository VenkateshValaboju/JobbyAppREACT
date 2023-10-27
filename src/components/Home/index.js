import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="HomeBg">
    <Header />
    <div className="HomeDescription">
      <h1 className="homeHeading">Find The Job That Fits Your Life</h1>
      <p className="homeDescription">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential
      </p>
      <Link to="/jobs">
        <button type="button" className="HomeButton">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)

export default Home
