import {Component} from 'react'
import Tabs from './component/Tabs'
import LanguageItem from './component/LanguageItem'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredProject = () => {
    const {activeTabId} = this.state

    const filteredProject = languageGreetingsList.filter(
      each => each.id === activeTabId,
    )

    return filteredProject
  }

  render() {
    const {activeTabId} = this.state
    const filteredProject = this.getFilteredProject()

    return (
      <div className="main-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tabs-container">
          {languageGreetingsList.map(each => (
            <Tabs
              key={each.id}
              tabDetails={each}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === each.id}
            />
          ))}
        </ul>

        {filteredProject.map(each => (
          <LanguageItem key={each.id} languageDetails={each} />
        ))}
      </div>
    )
  }
}

export default App
