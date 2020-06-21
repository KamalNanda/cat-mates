import React ,{Component} from 'react'
import Cardlist from './components/CardList'
import Searchbar from './components/SearchBar'
import {robots} from './robots'
import './app.css'
import { connect } from 'react-redux'
import { setSearchField } from './actions'
import Contact from './Contact/Contact'
const matchStateToProps = state => {
  return {
    searchField : state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: []
    }
  }

componentDidMount(){
    this.setState({robots : robots})  
}

  render(){
    const {searchField , onSearchChange} = this.props
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if(this.state.robots.length === 0){
      return <h1>LOADING.....</h1>
    }else{
      return(
        <div className='tc '>
          <h1 className="f1">Cat Mates</h1>
          <Searchbar searchChange={onSearchChange}/>
          <Cardlist robots={filteredRobots}/>
          <Contact/>
        </div>
      )
    }
    
  }
}
export default connect(matchStateToProps , mapDispatchToProps)(App)