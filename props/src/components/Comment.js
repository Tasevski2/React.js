import React from "react";
import { Avatar } from "./Avatar";
import { UserInfo } from "./UserInfo";
export class Comment extends React.Component {
    render() {
        return(
            <div id="comment">
                <UserInfo data={this.props.author}/>                

                <div className="user-comment">
                    <p>
                        {this.props.comment.text}
                    </p>
                </div>
                    <span>
                        {this.props.comment.date}
                    </span>
                <div className="comment-date">
                </div>
            </div>
        )
    }
}