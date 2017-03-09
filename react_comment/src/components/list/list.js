import React from 'react'
import Item from '../Item/item'
import './list.css'
export default class List extends  React.Component {
constructor(props){
    super(props)
}
    render () {
            //获取comments 获取remove
        const {comments, remove} = this.props
        //comments.length 为0事显示页面
        let display = comments.length === 0 ? 'block' : 'none'
            // 遍历comments 将结果传递给组件Item
        const items = comments.map(function (item, index) {
            //传递数据到 Item组件
            return < Item key = {index} index={index} item = {item} remove = {remove} />
        })
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display :display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {items}
                </ul>
            </div>
        )
    }
}

