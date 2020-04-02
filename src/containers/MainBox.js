import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      clickValue: "profile"
    }
  }
  
updateClickValue(event) {
  this.setState({clickValue: event.target.id})
}

showComponent() {
  if (this.state.clickValue === "profile") {
    return "<Profile />"
  } else if (this.state.clickValue ==="cocktail") {
    return "<Cocktails />"
  } else if (this.state.clickValue === "photo"){
    return "<Photos />"
  }
  else {
    return "<Pokemon />"
  }
}

  render() {

    return (
      <div>
        <MenuBar updateClickValue = {this.updateClickValue}/>
        {this.showComponent()}
      </div>
    )
  }

}

export default MainBox
