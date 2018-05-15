import React, {Component} from 'react';

export default class Dots extends Component {
    render() {

        return (
            <div className='dots'>
                {
                    this.props.items.map((item, index) => (
                        <span
                            onClick={() => this.props.turn(index - this.props.index)}
                            key={index}
                            className={"dots-span " +
                            (index === this.props.index||(this.props.index===this.props.items.length&&index===0) ? 'active' : "")}>

                        </span>
                    ))
                }
            </div>
        )
    }
}