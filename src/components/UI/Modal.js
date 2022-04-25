import {Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
const Backdrop = props =>{
	return <div className = {classes.backdrop}></div>
};
const ModalOverLay = (props) =>{
	return (
	<div className={classes.modal} >
		<div className={classes.content} >{props.children}</div>

	</div>

	)
}
const portalEle = document.getElementById("overlays");
const Modal = props =>{
	return <Fragment>
	{ReactDOM.createPortal(<Backdrop/>,portalEle)}
	{ReactDOM.createPortal(<ModalOverLay> {props.children} </ModalOverLay>,portalEle)}
	</Fragment>
}
export default Modal;