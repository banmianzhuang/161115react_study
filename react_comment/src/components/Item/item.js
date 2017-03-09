import React from 'react'
import './item.css'

export default class Item extends React.Component {
    constructor (props){
        super(props)
        this.removeChick = this.removeChick.bind(this)
    }
    //绑定删除事件
    removeChick () {
        //获取数据
        const {item,remove,index} = this.props
        if(confirm(`你确定删除${item.username}吗？`)){
            //删除
            remove(index)
        }
    }

    render () {
        //取出item 进行应用 形成初始页面
        const {item} = this.props
        return (
        <li className="list-group-item">
            <div className="handle">
                <a href="javascript:;" onClick={this.removeChick}>删除</a>
            </div>
            <p className="user"><span >{item.username}</span><span>说:</span></p>
            <p className="centence">{item.content}</p>
        </li>


        )
    }
}

