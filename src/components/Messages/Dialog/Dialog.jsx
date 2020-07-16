import style from "./Dialog.module.sass";
import React, {useEffect, useRef} from "react";
import Message from "./Message";

function Dialog(props) {
    let messages = props.messages.map(d => <Message key={d.id} data={d}/>);


    let onSendMessage = () => {
        props.sendMessage(messagesContainer);
    }
    let onInputMessage = (e) => {
        let text = e.target.value;
        props.updateInputMessage(text);
    }

    let messagesContainer = useRef(null);
    const scrollToBottom = () => {
        let scrollContainer = messagesContainer.current;
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
        let observer = new MutationObserver(() => {
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        });
        observer.observe(scrollContainer, {childList: true});
    }

    useEffect(scrollToBottom, [messages]);

    return (
        <div className={style.dialog}>
            <div ref={messagesContainer} className={style.messageContainer}>
                {messages}
            </div>
            <div className={style.sendMessageForm}>
                <span role="img" aria-label="Add" className="Add">📎</span>
                <textarea id="input" onChange={onInputMessage} type="text" placeholder="message"
                       value={props.newMessageText}/>
                <span role="img" aria-label="Sent" className={style.send} onClick={onSendMessage}>✉</span>
                <span role="img" aria-label="Smiles" className="Smiles">😊</span>
            </div>
        </div>
    );

}

export default Dialog;