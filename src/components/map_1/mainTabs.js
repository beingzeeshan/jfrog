import React from "react";
import propTypes from "prop-types";
import "./map_style.scss";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import WorldMap from "./worldMap";
import Maplabels from "./mapLabels";
import MapStatistics from "./mapStatistics";
import MapFilters from "./mapFilters";
import Breadcrumb from "./breadcrumb";
import NetworkGraph from "./networkGraph";

const useStyles = makeStyles({
	root: {
		flexGrow: 1
	}
});

function TabPanel(props) {
	const { children, value, index } = props;

	return (
		<div role="tabpanel" className="Tabs">
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
}

const cities = [
	{
		sno: 1,
		name: "Tokyo",
		coordinates: [139.6917, 35.6895],
		capacity: 21,
		location: "India",
		healthstatus: "critical",
	},
	{
		sno: 2,
		name: "Jakarta",
		coordinates: [106.865, -6.1751],
		capacity: 22,
		location: "America",
		healthstatus: "Warning",
	},
	{
		sno: 3,
		name: "Delhi",
		coordinates: [77.1025, 28.7041],
		capacity: 22,
		location: "South Africa",
		healthstatus: "Warning",
	},
	{
		sno: 4,
		name: "Manila",
		coordinates: [120.9842, 14.5995],
		capacity: 22,
		location: "Newzealand",
		healthstatus: "Warning",
	},
	{
		sno: 5,
		name: "Seoul",
		coordinates: [126.978, 37.5665],
		capacity: 22,
		location: "India",
		healthstatus: "Warning",
	},
	{
		sno: 6,
		name: 'Shanghai',
		coordinates: [121.4737, 31.2304],
		capacity: 21,
		location: "London",
		healthstatus: "critical",
	},
	{
		sno: 7,
		name: 'Rio de Janeiro',
		coordinates: [-43.1729, -22.9068],
		capacity: 21,
		location: "West Indies",
		healthstatus: "critical",
	},
	{
		sno: 8,
		name: "Kinshasa",
		coordinates: [15.2663, -4.4419],
		capacity: 21,
		location: "Srilanka",
		healthstatus: "critical",
	},
	{
		sno: 9,
		name: "Tianjin",
		coordinates: [117.3616, 39.3434],
		capacity: 23,
		location: "Asia",
		healthstatus: "Good",
	},
	{
		sno: 10,
		name: "Paris",
		coordinates: [2.3522, 48.8566],
		capacity: 23,
		location: "Japan",
		healthstatus: "Good",
	},
	{
		sno: 11,
		name: "Lima",
		coordinates: [-77.0428, -12.0464],
		capacity: 23,
		location: "UAE",
		healthstatus: "Good",
	}
];

const breadcrumbs = [
	{name : "Map View", link : "/mapView"},
   ];

export default function mainTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const [showMap, setShowMap] = React.useState(false);

	const handleChildClick = (data) => {
		const object = {name : data.name, link : ""}
		breadcrumbs.push(object);
      setShowMap(true);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};


	const renderMap = () => {
		if(showMap === false){
			return <WorldMap mapData={cities} onChildClick = {handleChildClick}/>;
		} 
			return  <NetworkGraph />
		
	};


	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={12}>
					<AppBar position="static" color="default">
						<Tabs
							value={value}
							onChange={handleChange}
							TabIndicatorProps={{
								style: {
									backgroundColor: '#707070',
									textColor: '#707070'
								}
							}}
							centered
						>
							<Tab label="Overview" />
							<Tab label="Forecast" />
						</Tabs>
					</AppBar>
					<TabPanel value={value} index={0}>
						<div className={classes.root}>
							<Grid item xs={12}>
								<Breadcrumb  data={breadcrumbs}/>
							</Grid>
							<Grid container spacing={3}>
								<Grid item xs={1} />
								<Grid item xs={10}>
									<MapFilters />
								</Grid>
								<Grid item xs={1} />
								<Grid item xs={4}>
									<MapStatistics />
									<Maplabels />
								</Grid>
								<Grid item xs={8}>
									{renderMap()}
								</Grid>
							</Grid>
						</div>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<NetworkGraph />
					</TabPanel>
				</Grid>
			</Grid>
		</div>
	);
}
TabPanel.propTypes = {
	children: propTypes.object,
	value: propTypes.number,
	index: propTypes.number
};
