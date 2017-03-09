import React, {Component} from 'react'
import {Link} from 'react-router'
export default class Repos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            repos: [
                {username: 'faceback', repoName: 'react'},
                {username: 'faceback', repoName: 'react_router'},
                {username: 'google', repoName: 'angular'},
                {username: 'ant', repoName: 'rantd'}
            ]
        }
    }

    render() {
        const list = this.state.repos.map((repo, index) => (
            <li key={index}><Link to={`/repos/${repo.username}/${repo.repoName}`} activeClassName='active'>{repo.repoName}</Link></li>
    ))

        return (
            <div>
                <h2>哈哈哈哈</h2>
                <ul>
                    {list}
                </ul>
                {this.props.children}
            </div>
        )

    }

}
