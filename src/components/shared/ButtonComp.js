import React from 'react';
import { Button } from '@material-ui/core';

export default function ButtonComp(prop) {
	const { children, disabled } = prop;

	return (
		<div className="button-container">
			<Button
				type="button"
				variant="outlined"
				className="button-elem"
				{...prop}
			>
				<div className={`${disabled ? 'button-text-disabled' : 'button-text'}`}>
					{children || 'Button'}
				</div>
			</Button>
		</div>
	);
}
