import style from './Dialogs.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
    let takeMessage = React.createRef();
    let sendMessage = () => props.giveMessage()

    let writeText = () => {
        let body = takeMessage.current.value
        props.receiveMessage(body)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <textarea onChange={writeText} ref={takeMessage} value={props.sendMes} />
            <button onClick={sendMessage}>Send Message</button>
        </div>
    )
}

export default Dialogs;