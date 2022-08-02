import { Component, useContext } from "react";
import { ChatMessage } from "../contexts/ChatRoomContext";
import { User, UserContext } from "../contexts/UserContext";

class ChatMessageElement extends Component<ChatMessage> {

    static contextType = UserContext;

    render(): any {
        let user = this.context
        console.log('USER', user)
        return (
            <>
                <div className="inline-block bg-green-100 shadow-lg p-2 rounded-b-lg rounded-tr-lg mb-3">
                    <img className="inline-block w-14 h-14 rounded-full mr-3" src={'' + this.props.photo || undefined} alt="" />
                    <div className="inline-block mr-3">
                        {this.props.text}
                    </div>
                </div>
            </>
        )
    }

}

export default ChatMessageElement
