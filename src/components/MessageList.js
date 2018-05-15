import React,{Component} from 'react';
import './MessageList.css';
export default class MessageList extends Component{


    render(){
        const {item,index}=this.props;
        return (
            <li className='list-group-item' key={index} style={{}}>
               <span style={{color:'rgb(9, 222, 249)'}}> {item.username}</span>: <span style={{color:'rgb(63, 243, 10)'}}>{item.content}</span>
                <span className='pull-right' style={{color:'rgba(0, 0, 0, 0.43)'}}>{item.createAt}</span>
                <button
                    onClick={()=>this.props.handleRemove(index)}
                    className='btn btn-danger btn-xs'
                    style={{marginLeft:20,textAlign:'center'}}>delete</button>
            </li>
        )
    }
}