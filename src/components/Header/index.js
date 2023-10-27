import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const deleteToken = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div>
      <ul className="HeaderContainer">
        <li>
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="HeaderLogo"
            />
          </Link>
        </li>
        <li>
          <Link to="/">
            <button type="button" className="HeaderButton">
              Home
            </button>
          </Link>
          <Link to="/jobs">
            <button type="button" className="HeaderButton">
              Jobs
            </button>
          </Link>
        </li>
        <li>
          <button type="button" onClick={deleteToken} className="LogoutButton">
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}
export default withRouter(Header)
