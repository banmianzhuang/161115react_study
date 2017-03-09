import React from 'react'
import Add from '../add/Add'
import List from '../list/list'
export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        //初始comments 为空数组
            comments : [ ]
        }
    }
        //为父组件添加add
    add = (comment) => {
        //获取当前的comments
        const {comments} = this.state
        //添加comment 到 comments
        comments.unshift(comment)
        //重新修改comments
        this.setState({comments})
    }
    //天剑删除
    remove = (comment,index) => {
        // 获取当前数据
        const {comments} = this.state
        comments.splice(index, 1)
        //重汇
        this.setState({comments})
    }
    componentDidMount () {
        //获取初始化数据
        let comments = [
            {
                username: "Tom",
                content: "ReactJS好难啊!",

            },
            {
                username: "JACK",
                content: "ReactJS还不错!",

            }
        ]
        //重新设置comments 更新state数据
        this.setState({comments})
    }
    render () {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    {/*把add传给Add组件*/}
                    <Add add={this.add}/>
                    {/*把comments传递给组件List 把remove传递给组件List*/}
                    <List comments = {this.state.comments} remove = {this.remove}/>
                </div>
            </div>
        )
    }
}
