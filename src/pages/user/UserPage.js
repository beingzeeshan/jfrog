import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import _ from "lodash";
import UserList from "../../components/user/UserList";
import UserDetail from "../../components/user/UserDetail";
import UserInput from "../../components/user/UserInput";
import { getAllUsersDelayed } from "../../services/api/userApi";
import ErrorBoundary from "../../components/shared/ErrorBoundary";
import "./user.page.scss";

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

const UserPage = () => {
	const classes = useStyles();
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);

	const loadUsers = async () => {
		setIsLoading(true);
		const response = await getAllUsersDelayed(4);
		setUsers(response.data);
		setIsLoading(false);
	};

	useEffect(() => {
		loadUsers();
	}, []);

	const onAddUser = (newUser) => {
		const clonedUsers = _.cloneDeep(users);
		clonedUsers.push(newUser);
		setUsers(clonedUsers);
	};

	return (
		<ErrorBoundary>
			<Container className="container">
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<UserInput onAddUser={onAddUser} />
						</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper className={classes.paper}>
							<UserList
								users={users}
								isLoading={isLoading}
								onSelectedUser={setSelectedUser}
							/>
						</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper className={classes.paper} style={{ height: 420 }}>
							<UserDetail user={selectedUser} />
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</ErrorBoundary>
	);
};

export default UserPage;
