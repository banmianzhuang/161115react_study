import React from 'react'
import List from './List'
import Search from './Search'
export default class App extends React.Component {
    constructor(props){
        super(props)
        this.searchSetName = this.searchSetName.bind(this)
        this.state = {
            searchName: ''
        }
    }
    searchSetName(searchName){
        this.setState({searchName})
    }
    render() {
        return (
            <div className="container">
               <Search searchSetName = {this.searchSetName}/>
               <List searchName={this.state.searchName}/>
            </div>
        )
    }
}
