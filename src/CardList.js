import React from "react";
import { Card } from "./Card";

export class CardList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.profiles.map((item, index) => {
                        return (<div key={index}>
                            {index}
                            
                            <Card {...item}></Card></div>)
                    })
                }
            </div>
        )
    }
}