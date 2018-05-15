import React, {Component} from 'react';
import './style.css';
import Slider from './Slider';
import Arrows from "./Arrows";
import Dots from "./Dots";

export default class Sliders extends Component {
    constructor() {
        super();
        this.state = {index: 0}
    }

    turn = (step) => {
        let index = this.state.index + step;
        console.log(index);
        if (index > this.props.items.length) {
            this.$slider.style.transitionDuration = '0s';
            this.$slider.style.left = 0;
            setTimeout(() => {
                console.log('xxx');
                index = 1;

                this.$slider.style.transitionDuration = this.props.speed + 's';
                this.setState({index});
            }, 0);

            return;
        }
        if (index < 0) {
            this.$slider.style.transitionDuration = '0s';
            this.$slider.style.left = this.props.items.length*-500+'px';
            index = this.props.items.length - 1;
            setTimeout(() => {
                console.log('xxx');
                index = this.props.items.length-1;

                this.$slider.style.transitionDuration = this.props.speed + 's';
                this.setState({index});
            }, 0);

            return;

        }

        this.setState({index})
    };
    go = () => {
        this.Timer = setInterval(() => {
            this.turn(1)
        }, this.props.delay * 1000)
    };

    componentDidMount() {
        this.$slider = document.querySelector('.mob');
        if (this.props.pause) {
            this.go();
        }
    }


    render() {
        let style = {
            width: (this.props.items.length + 1) * 500,
            left: this.state.index * -500 + 'px',
            transitionDuration: this.props.speed + 's'
        };
        return (
            <div className='container'
                 onMouseOver={() => clearInterval(this.Timer)}
                 onMouseOut={() => this.go()}
            >
                <Slider style={style} items={this.props.items}/>
                <Arrows turn={this.turn}/>
                <Dots items={this.props.items} index={this.state.index} turn={this.turn}/>
            </div>
        )
    }
}