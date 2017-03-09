import React from 'react'

export default  class Add extends  React.Component {
    constructor(props){
        super(props)
        this.addClick = this.addClick.bind(this)
    }

        //绑定点击事件
    addClick () {
        // 获取value 值
       const comment = {
           username : this.refs.username.value,
         content : this.refs.content.value
       }
       //在父组件中添加修改 并将comment 作为参数传递
    this.props.add(comment)
        //清空文本框
        this.refs.username.value = ''
        this.refs.content.value = ''
    }
    render () {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref = 'username'/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref="content"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.addClick}>提交</button>
                        </div>
                    </div>
                </form>
            </div>


        )
    }
}
