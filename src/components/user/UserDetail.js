import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";

const UserDetail = ({ user }) => (
	<>
		{user && (
			<div style={{ padding: 20 }}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Avatar alt={user.first_name} src={user.avatar} />
					<div style={{ marginLeft: 20 }}>
						{user.first_name} - {user.last_name}
					</div>
				</div>
				<div style={{ marginLeft: 20, marginTop: 20 }}>{user.email}</div>
			</div>
		)}

		{!user && <div style={{ padding: 20 }}>No User Selected</div>}
	</>
);

UserDetail.propTypes = {
	user: PropTypes.object,
};

export default UserDetail;
