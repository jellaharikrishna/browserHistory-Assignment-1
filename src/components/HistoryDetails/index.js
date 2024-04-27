import './index.css'

const HistoryDetails = props => {
  const {historyDetailsList, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetailsList

  const deleteHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="li-container">
      <div className="time-card">
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="logo-domain-delete-container">
        <div className="logo-domain-card">
          <div className="logo-card">
            <img src={logoUrl} alt="domain logo" className="logo-icon" />
          </div>
          <div className="domain-card">
            <p className="domain-title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          data-testid="delete"
          className="delete-card"
          onClick={deleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryDetails
