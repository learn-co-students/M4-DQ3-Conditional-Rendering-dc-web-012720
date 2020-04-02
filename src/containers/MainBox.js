import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super();
    this.state = {
      currentDisplay: 'profile'
    }
  }

  changeDisplay = (event) => {
    this.setState({
      currentDisplay: event.target.id
    })
  }


  updateDisplay = () => {
    if (this.state.currentDisplay === 'photo') {
      return <Photos />
    } else if (this.state.currentDisplay === 'pokemon') {
      return <Pokemon />
    } else if (this.state.currentDisplay === 'cocktail') {
      return <Cocktails />
    } else {
      return <Profile />
    }
    }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    Which component should have state? 
    Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar changeDisplay={this.changeDisplay}/>
        {this.updateDisplay()}
      </div>
    )
  }

}

export default MainBox
