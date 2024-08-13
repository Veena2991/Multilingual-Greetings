import './index.css'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails

  return (
    <>
      <div className="item-container">
        <img src={imageUrl} alt={`${imageAltText}`} className="item-image" />
      </div>
    </>
  )
}

export default LanguageItem
