import './index.css'

const SkillsSection = props => {
  const {eachItem} = props

  const Item = {
    name: eachItem.name,
    ImageUrl: eachItem.image_url,
  }

  return (
    <li className="skills">
      <div className="skills2">
        <img src={Item.ImageUrl} alt={Item.name} className="skillLogo" />
        <p>{Item.name}</p>
      </div>
    </li>
  )
}
export default SkillsSection
