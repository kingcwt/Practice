import React,{Component} from 'react';
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
export default class MessageBox extends Component{
    constructor(){
        super();
        this.state={messages:[]}
    }
    addMessage=(message)=>{
      let messages=[...this.state.messages,message];
      this.setState({
          messages:messages
      });

    };
    handelRemoveList=(p)=>{
        let messages=this.state.messages.splice(p,1);
        this.setState({messages:[...this.state.messages]})
    };
    render(){
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h5 className='text-center'>留言板</h5>
                            </div>
                            <div className="panel-body">
                                <ul className='list-group'>
                                    {this.state.messages.map((item,index)=>(
                                     <MessageList item={item} index={index} key={index} handleRemove={this.handelRemoveList}/>
                                    ))}
                                </ul>
                            </div>
                            <div className="panel-footer">
                                <MessageForm  addMessage={this.addMessage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}