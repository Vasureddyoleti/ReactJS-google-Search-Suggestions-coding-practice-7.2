// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onSearch} = props
  const {suggestion} = suggestionDetails

  const onSearchUpdate = () => {
    onSearch(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion-text">{suggestion}</p>
      <button onClick={onSearchUpdate} className="button" type="button">
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
