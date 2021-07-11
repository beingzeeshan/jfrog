import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2)
		}
	}
}));

export default function SimpleAlerts(prop) {
	const classes = useStyles();
	const { type, message } = prop;

	return (
		<div className={classes.root}>
			{type === 'error' && (
				<Alert severity="error">
					{message || 'This is an error alert — check it out!'}
				</Alert>
			)}
			{type === 'warning' && (
				<Alert severity="warning">
					{message || 'This is a warning alert — check it out!'}
				</Alert>
			)}
			{type === 'info' && (
				<Alert severity="info">
					{message || 'This is an info alert — check it out!'}
				</Alert>
			)}
			{type === 'success' && (
				<Alert severity="success">
					{message || 'This is a success alert — check it out!'}
				</Alert>
			)}
		</div>
	);
}
