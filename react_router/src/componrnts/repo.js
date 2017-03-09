import React, {Component} from 'react'
export default class Repo extends Component {
    constructor(props){
        super(props)

    }
render(){
    return(
        <h2>用户名：{this.props.params.username}----仓库名：{this.props.params.repoName}</h2>
    )
}
}