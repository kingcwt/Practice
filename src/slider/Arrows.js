import React, {Component} from 'react';

export default class Arrows extends Component {
    render() {
        const {turn} = this.props;
        return (
            <div className='arrows'>
                <span className=' arrow arrows-left' onClick={() => turn(-1)}>&lt;</span>
                <span className='  arrow arrows-right' onClick={() => turn(1)}>&gt;</span>
            </div>
        )
    }
}