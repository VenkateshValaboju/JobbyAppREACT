import './index.css'
import {AiFillStar} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import {RiSuitcaseFill} from 'react-icons/ri'

const SimilarJobsSection = props => {
  const {eachItem} = props
  return (
    <li>
      <div className="SJSList">
        <div className="SJSSection1">
          <img
            src={eachItem.companyLogoUrl}
            className="SJSLogo"
            alt="similar job company logo"
          />
          <div>
            <h1 className="SJSFontSize">{eachItem.title}</h1>
            <p className="ratingParagraph">
              {' '}
              <AiFillStar className="star" /> {eachItem.rating}
            </p>
          </div>
        </div>
        <h1 className="SJSFontSize">Description</h1>
        <p>{eachItem.jobDescription}</p>
        <div className="SJSSection3">
          <p className="location ratingParagraph">
            {' '}
            <HiLocationMarker className="icon" />
            {eachItem.location}
          </p>
          <p className="ratingParagraph">
            <RiSuitcaseFill className="icon" />
            {eachItem.employmentType}
          </p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobsSection
