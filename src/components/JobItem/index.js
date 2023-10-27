import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import {RiSuitcaseFill} from 'react-icons/ri'
import './index.css'

const JobItem = props => {
  const {Item} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = Item
  return (
    <li className="jobItemContainer">
      <Link to={`/jobs/${id}`} style={{textDecoration: 'none'}}>
        <div>
          <div className="JobItemSection1">
            <img
              src={companyLogoUrl}
              alt="company logo"
              className="JobItemCompanyLogo"
            />
            <div>
              <h1 className="JobItemTitle">{title}</h1>
              <p className="ratingParagraph">
                {' '}
                <AiFillStar className="star" /> {rating}
              </p>
            </div>
          </div>
          <div className="JobItemSection2">
            <div className="locationAndEmployment">
              <p className="location ratingParagraph">
                {' '}
                <HiLocationMarker className="icon" />
                {location}
              </p>
              <p className="ratingParagraph">
                <RiSuitcaseFill className="icon" />
                {employmentType}
              </p>
            </div>
            <p>{packagePerAnnum}</p>
          </div>
          <hr />
          <h1 className="JobItemTitle">Description</h1>
          <p className="JobDescription">{jobDescription}</p>
        </div>
      </Link>
    </li>
  )
}
export default JobItem
