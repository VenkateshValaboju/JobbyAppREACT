import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillStar} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import {RiSuitcaseFill} from 'react-icons/ri'
import {FiExternalLink} from 'react-icons/fi'
import Header from '../Header'
import SkillsSection from '../SkillsSection'
import SimilarJobsSection from '../SimilarJobsSection'

import './index.css'

class JobItemDetails extends Component {
  state = {
    jobDetails: [],
    similarJobs: [],
    skills: [],
    LACimageUrl: '',
    LACdescription: '',
    isLoading: true,
    results: 'PENDING',
  }

  componentDidMount() {
    this.getJobDetails()
  }

  getJobDetails = async () => {
    const token = Cookies.get('jwt_token')
    const {match} = this.props
    const {id} = match.params
    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {Authorization: `Bearer ${token}`},
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const responseJobDetails = data.job_details
      const responseSimilarJobs = data.similar_jobs
      const jobDetails = {
        companyLogoUrl: responseJobDetails.company_logo_url,
        companyWebsiteUrl: responseJobDetails.company_website_url,
        employmentType: responseJobDetails.employment_type,
        id: responseJobDetails.id,
        jobDescription: responseJobDetails.job_description,
        lifeAtCompany: responseJobDetails.life_at_company,
        location: responseJobDetails.location,
        packagePerAnnum: responseJobDetails.package_per_annum,
        rating: responseJobDetails.rating,
        skills: responseJobDetails.skills,
        title: responseJobDetails.title,
      }
      const similarJobs = responseSimilarJobs.map(eachItem => ({
        companyLogoUrl: eachItem.company_logo_url,
        employmentType: eachItem.employment_type,
        id: eachItem.id,
        jobDescription: eachItem.job_description,
        location: eachItem.location,
        rating: eachItem.rating,
        title: eachItem.title,
      }))
      const {lifeAtCompany} = jobDetails
      const camelLifeAtCompany = {
        description: lifeAtCompany.description,
        imageUrl: lifeAtCompany.image_url,
      }

      this.setState({
        similarJobs,
        jobDetails,
        skills: jobDetails.skills,
        LACimageUrl: camelLifeAtCompany.imageUrl,
        LACdescription: camelLifeAtCompany.description,
        isLoading: false,
        results: 'SUCCESS',
      })
    } else {
      this.setState({
        isLoading: false,
        results: 'FAILURE',
      })
    }
  }

  retryDetails = () => {
    this.setState({
      isLoading: true,
    })
    this.getJobDetails()
  }

  getTheDetails = () => {
    const {skills, LACimageUrl, LACdescription, results} = this.state
    const {jobDetails, similarJobs} = this.state
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      title,
    } = jobDetails
    switch (results) {
      case 'SUCCESS':
        return (
          <div>
            <div className="JobDetailsSection">
              <div className="JIDsection1">
                <img
                  src={companyLogoUrl}
                  alt="job details company logo"
                  className="companyLogoJID"
                />
                <div>
                  <h1 className="JIDHeading">{title}</h1>
                  <p className="ratingParagraph">
                    {' '}
                    <AiFillStar className="star" /> {rating}
                  </p>
                </div>
              </div>
              <div className="JIDsection2">
                <div className="JIDLocationAndEmployment">
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
              <div className="JIDsection3">
                <h1 className="JIDHeading2">Description</h1>
                <a href={companyWebsiteUrl} className="Visit">
                  <FiExternalLink className="icons" />
                  Visit
                </a>
              </div>
              <p>{jobDescription}</p>
              <h1 className="JIDHeading2">Skills</h1>
              <ul className="SkillsUL">
                {skills.map(eachItem => (
                  <SkillsSection eachItem={eachItem} key={eachItem.name} />
                ))}
              </ul>
              <h1 className="JIDHeading2">Life at Company</h1>
              <div className="lifeAtCompany">
                <p className="LACdescription">{LACdescription}</p>
                <img
                  className="LACImage"
                  src={LACimageUrl}
                  alt="life at company"
                />
              </div>
            </div>
            <div className="similarJobsSection">
              <h1 className="JIDHeading2">Similar Jobs</h1>
              <ul className="similarJobsSectionUL">
                {similarJobs.map(eachItem => (
                  <SimilarJobsSection eachItem={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
          </div>
        )
      default:
        return (
          <div className="JIDFailure">
            <img
              src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
              alt="failure view"
            />
            <h1>Oop! Something Went Wrong</h1>
            <p>We cannot seem to find the page you are looking for</p>
            <button
              type="button"
              onClick={this.retryDetails}
              className="retryButton"
            >
              Retry
            </button>
          </div>
        )
    }
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="Route3">
        <Header />
        <div>
          {isLoading ? (
            <div className="loader-container JIDLoader" data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
          ) : (
            this.getTheDetails()
          )}
        </div>
      </div>
    )
  }
}

export default JobItemDetails
