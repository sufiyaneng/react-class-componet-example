import React from "react";
import "./Card.css"
export class Card extends React.Component{
    render(){
        return (
            <div className="github-profile">
                <img  style={{width:"75px"}} src={this.props.avatar_url} alt=""/>
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="company">{this.props.company}</div>
                </div>
            </div>
        );
    }
}