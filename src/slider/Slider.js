import React, {Component} from 'react';

export default class Slider extends Component {
    render() {
        const {style, items} = this.props;
        return (
            <ul style={style} className='mob'>
                {items.map((item, index) => (
                    <li key={index}><img src={item.src}/></li>
                ))}
                <li key={items.length}><img src={items[0].src}/></li>
            </ul>
        )
    }
}