import React from 'react'
import { Container } from 'react-bootstrap'

class Comment extends React.Component{
    render(){
        return(
            <div className="ui comments">
                <div className="comment">
                    <a className="avatar">
                        {/* <image src="/images/avatar/small/stevie.jpg"> */}
                    </a>
                    <div className="content">
                        <a className="author">{this.props.name}</a>
                        <div class="metadata">
                        <div className="date">{this.props.date}</div>
                        </div>
                        <div className="text">
                            {this.props.comment}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment