import React from 'react';
import { Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import './alert.modal.scss';

function getModalStyle() {
	return {
		top: '175px',
		left: '364px',
		width: '639px',
		height: '379px'
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: 'none',
		borderRadius: '6px',
		color: '#727272',
		opacity: 1,
		boxShadow: theme.shadows[5],
		font: 'normal normal normal 18px/30px CiscoSansTT',
		padding: theme.spacing(2, 4, 3)
	},
	title: {
		color: '#000000'
	},
	close: {
		height: '16px',
		opacity: 0.5,
		cursor: 'pointer',
		float: 'right',
		marginTop: '-3em'
	},
	btn: {
		background: '#00bff0 0% 0% no-repeat padding-box',
		borderRadius: '20px',
		opacity: 1,
		width: '15%',
		color: 'white'
	},
	btn1: {
		marginLeft: '30em'
	},
	btn2: {
		marginLeft: '1.5em'
	},
	btnContainer: {
		marginTop: '10em'
	}
}));

export default function SimpleModal(prop) {
	const { children } = prop;
	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<h2
				id="simple-modal-title"
				className={`alert-modal-title ${classes.title}`}
			>
				Modal Title
			</h2>
			<span
				role="button"
				className="close-btn"
				onClick={handleClose}
				onKeyDown={handleClose}
				tabIndex={0}
			>
				<img
					src="/images/Baseline_Close.svg"
					className={classes.close}
					alt="close modal"
				/>
			</span>
			<Divider />
			<p id="simple-modal-description" className="alert-modal-desc">
				{children}
			</p>
			<div
				className={`alert-button-container ok-cancel-btn-container ${classes.btnContainer}`}
			>
				<Button
					type="button"
					variant="outlined"
					className={`alert-button ${classes.btn} ${classes.btn1}`}
					onClick={handleOpen}
				>
					<div className="alert-button-text">Button</div>
				</Button>

				<Button
					type="button"
					variant="outlined"
					className={`alert-button ${classes.btn} ${classes.btn2}`}
					onClick={handleOpen}
				>
					<div className="alert-button-text">Button</div>
				</Button>
			</div>
		</div>
	);

	return (
		<div className="alert-modal-container">
			{!open && (
				<div className="alert-button-container">
					<Button
						type="button"
						variant="outlined"
						className="alert-button"
						onClick={handleOpen}
					>
						<div className="alert-button-text">Modal</div>
					</Button>
				</div>
			)}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<div>{body}</div>
			</Modal>
		</div>
	);
}
