import React, {Component} from 'react'

class Image extends Component{
    render(){
        return(
            <figure className="image is-1by1">
                <img src={this.props.src} alt={this.props.alt}/>
            </figure>
        );
    }

};

export default Image;