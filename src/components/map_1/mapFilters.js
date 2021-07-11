import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function MapFilters() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Paper square>
			<Tabs
				value={value}
				indicatorColor="primary"
				textColor="primary"
				onChange={handleChange}
				aria-label="Filters"
				centered
			>
				<Tab label="Current" />
				<Tab label="Yesterday" />
				<Tab label="Last Week" />
				<Tab label="Last Month" />
				<Tab label="Custom" />
			</Tabs>
		</Paper>
	);
}
