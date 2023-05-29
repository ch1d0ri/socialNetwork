import React from "react";

import {giveMessageActionCreator, receiveMessageActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage,
        sendMes: state.dialogsPage.sendMes,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        receiveMessage: (body) => {
            dispatch(receiveMessageActionCreator(body))
        },
        giveMessage: () => {
            dispatch(giveMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;