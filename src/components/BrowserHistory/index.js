import {Component} from 'react'
import HistoryDetails from '../HistoryDetails'
import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: '', historyDetails: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyDetails: initialHistoryList})
  }

  onChangeSearchText = event => {
    this.setState({searchInput: event.target.value})
  }

  filterHistory = () => {
    const {searchInput, historyDetails} = this.state
    const updateHistory = historyDetails.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return updateHistory
  }

  onDeleteHistory = id => {
    const {historyDetails} = this.state
    const deletedHistory = historyDetails.filter(eachItem => eachItem.id !== id)
    this.setState({historyDetails: deletedHistory})
  }

  render() {
    const {searchInput} = this.state
    const filteredHistory = this.filterHistory()
    return (
      <div className="app-container">
        <nav className="navbar-container">
          <div className="history-logo-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="history-logo"
            />
          </div>
          <div className="search-container">
            <div className="search-logo-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-logo"
              />
            </div>
            <div className="search-text-card">
              <input
                type="search"
                value={searchInput}
                placeholder="Search history"
                className="search-text"
                onChange={this.onChangeSearchText}
              />
            </div>
          </div>
        </nav>
        <div className="history-bg-container">
          {filteredHistory.length === 0 ? (
            <p className="no-history">There is no history to show</p>
          ) : (
            <div className="history-container">
              <ul className="history-card">
                {filteredHistory.map(eachHistory => (
                  <HistoryDetails
                    historyDetailsList={eachHistory}
                    key={eachHistory.id}
                    onDeleteHistory={this.onDeleteHistory}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
