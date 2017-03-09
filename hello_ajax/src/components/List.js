import React from 'react'
import axios from 'axios'
export default class List extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            firstVeiw : true,
            loading : false,
            users : [],
            errorMgs : null

        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            firstVeiw: false,
            loading:true
        })

        let searchName = nextProps.searchName

        const url =`https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(response => {
                const items = response.data.items
                const users = items.map(function (item) {
                    return {html_url:item.html_url,avatar_url: item.avatar_url, login:item.login}
                })
                this.setState({
                    loading:false,
                    users
                })
                console.log( this.setState.users)
            })
            .catch(error => {
                this.setState({
                    loading:false,
                    errorMgs : error.message
                })
            })

    }
    render() {
        console.log(this.props.searchName)
        
        if(this.state.firstVeiw){
            console.log(this.state);
            return <h2>Enter name to search</h2>;
        }else if (this.state.loading){
            return <h2>Loading result...</h2>;
        }else if(this.state.errorMgs){
            return <h2>{this.state.errorMgs}</h2>;
        }else{
            const userList =this.state.users.map( (user, index) => (

                <div className="card" key={index}>
                    <a href={user.html_url} target="_blank">
                        <img src={user.avatar_url} style={{width: '100px'}}/>
                    </a>
                    <p className="card-text">{user.login}</p>
                </div>

                //console.log( 123)
            ))
            return (
                <div className="row">{userList}</div>
            )
        } 
        }
       
        
}
