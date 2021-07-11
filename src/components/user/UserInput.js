import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const UserInput = ({ onAddUser }) => {
	const { register, handleSubmit } = useForm();

	const onSaveCustomer = (data) => {
		if (data) {
			const user = { ...data };
			user.avatar = "https://reqres.in/img/faces/3-image.jpg";
			user.id = Math.floor(Math.random() * 10000 + 1);
			onAddUser(user);
		}
	};

	return (
		<form
			style={{
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<TextField
				{...register("first_name")}
				id="standard-basic"
				label="First Name"
			/>
			<TextField
				{...register("last_name")}
				id="standard-basic"
				label="Last Name"
			/>
			<TextField {...register("email")} id="standard-basic" label="Email" />
			<Button
				variant="contained"
				color="primary"
				onClick={handleSubmit(onSaveCustomer)}
			>
				Add
			</Button>
		</form>
	);
};

UserInput.propTypes = {
	onAddUser: PropTypes.func.isRequired,
};

export default UserInput;
