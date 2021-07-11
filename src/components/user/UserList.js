import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";

const UserList = ({ users = [], isLoading, onSelectedUser }) => {
	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{ field: "email", headerName: "Email", width: 130 },
		{ field: "first_name", headerName: "First name", width: 130 },
		{ field: "last_name", headerName: "Last name", width: 130 },
		{
			field: "fullName",
			headerName: "Full name",
			description: "This column has a value getter and is not sortable.",
			sortable: false,
			width: 160,
			valueGetter: (params) =>
				`${params.getValue("first_name") || ""} ${
					params.getValue("last_name") || ""
				}`,
		},
	];

	const selectedRow = (dataRow) => {
		const id = dataRow.selectionModel[0];
		const selectedUser = users.find((user) => user.id == id);
		onSelectedUser(selectedUser);
	};

	return (
		<>
			{!isLoading && (
				<div style={{ height: 400, width: "100%", marginBottom: 20 }}>
					<div>Total of Users: {users.length}</div>
					<DataGrid
						rows={users}
						columns={columns}
						pageSize={5}
						onSelectionModelChange={selectedRow}
					/>
				</div>
			)}
			{isLoading && <CircularProgress />}
		</>
	);
};

UserList.propTypes = {
	// users: PropTypes.arrayOf(
	// 	PropTypes.shape({
	// 		id: PropTypes.number,
	// 		email: PropTypes.string,
	// 		first_name: PropTypes.string,
	// 		last_name: PropTypes.string,
	// 		avatar: PropTypes.string
	// 	})
	// ).isRequired
	users: PropTypes.array.isRequired,
	onSelectedUser: PropTypes.func.isRequired,
	isLoading: PropTypes.bool,
};

export default UserList;
