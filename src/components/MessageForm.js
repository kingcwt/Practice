import React, {Component} from 'react';

export default class MessageForm extends Component {
    handleSubmit = () => {
        let username = this.username.value;
        let content = this.content.value;
        let createAt=new Date().toLocaleTimeString();
        this.props.addMessage({username,content,createAt});
        this.username.value=this.content.value='';

    };

    render() {
        return (
            <div>
                <form action="javascript:;">
                    <div className='list-group'>
                        <label htmlFor="username">用户名：</label>
                        <input type="text" id='username' className='form-control' ref={xxx => this.username = xxx}/>
                    </div>
                    <div className='list-group'>
                        <label htmlFor="content">内容：</label>
                        <input type="text" id='content' className='form-control' ref={xxx => this.content = xxx}/>
                    </div>
                    <div className='list-group'>
                        <button className='btn btn-primary' onClick={this.handleSubmit}>发表</button>
                    </div>
                </form>
            </div>
        )
    }
}