import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './main.scss';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex'
	},
	header: {
		background: '#FFFFFF 0% 0% no-repeat padding-box',
		boxShadow: '0px 3px 6px #00000029',
		opacity: 1,
		zIndex: theme.zIndex.drawer + 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function TopAppBar() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const onAction = (action) => {
		setAnchorEl(null);
		if (!action) return;
		switch (action) {
			case 'logout':
				dispatch({ type: 'User/OnLogout' });
				localStorage.removeItem('@backofficeState');
				break;
			case 'expires':
				dispatch({
					type: 'User/OnExpires',
					payload: { lastUrl: history.location.pathname }
				});
				break;
		}
	};

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.header}>
				<Toolbar>
					<div className="cisco-img-container">
						<img
							alt="Cisco"
							className="cisco-logo"
							src="images/content/Cisco_logo_blue.svg"
						/>
					</div>
					<div className="border" />
					<div className="title-container">
						<span className="title-Edge">Observability</span>
					</div>
					<div className="right-container">
						<span className="user-style">{user.login}</span>
						<div className="user-icon">
							<FiberManualRecordIcon
								className="user-menu"
								onClick={handleMenu}
							/>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								open={open}
								onClose={onAction}
							>
								<MenuItem onClick={() => onAction('logout')}>Logout</MenuItem>
								<Divider />
								<MenuItem onClick={() => onAction('expires')}>
									Expire Session
								</MenuItem>
							</Menu>
						</div>
					</div>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
	);
}
