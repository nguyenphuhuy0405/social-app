import './message.css';
import { format } from 'timeago.js';

function Message({ message, own }) {
    return (
        <div className={own ? 'message own' : 'message'}>
            <div className="messageTop">
                <img
                    class="messageImg"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                />
                <p className="messageText">{message?.text}</p>
            </div>
            <div className="messageBottom">{format(message?.createdAt)}</div>
        </div>
    );
}

export default Message;
