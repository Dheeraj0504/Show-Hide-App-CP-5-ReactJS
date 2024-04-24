// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onShowFirstName = () => {
    // console.log('Firstname')
    this.setState(prevState => {
      // console.log(`previous state value: ${prevState.showFirstName}`)
      return {
        showFirstName: !prevState.showFirstName,
      }
    })
  }

  onShowLastName = () => {
    // console.log("Lastname")
    this.setState((prevState) => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.onShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {/*---Using Logical && Operator---*/}
            {showFirstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button className="button" type="button" onClick={this.onShowLastName}>
              Show/Hide Lastname
            </button>
            {/*---Using Logical && Operator---*/}
            {showLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
