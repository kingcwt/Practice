import React from 'react';
import ReactDOM from  'react-dom';
import Sliders from "./Sliders";
let IMG=[
    {src:require('./img/2cf5e0fe9925bc3132c7142252df8db1ca1370f5.jpg')},
    {src:require('./img/9f2f070828381f302c8bf111a5014c086f06f0fc.jpg')},
    {src:require('./img/4b90f603738da97725af6c9cbc51f8198718e381.jpg')},
    {src:require('./img/b21c8701a18b87d6f183adad0b0828381e30fdbb.jpg')},
    {src:require('./img/eaf81a4c510fd9f9bebab92f292dd42a2934a4c3.jpg')},
    {src:require('./img/f9198618367adab498561e0e87d4b31c8601e4fd.jpg')},
    {src:require('./img/0df3d7ca7bcb0a467202098f6763f6246b60af60.jpg')}
];
ReactDOM.render(<Sliders
    items={IMG}
    speed={1.2}
    delay={2.1}
    pause={true}
    auto={true}

/>,document.querySelector('#root'));
