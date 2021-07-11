import React, { useState, useEffect } from 'react';
import propTypes from "prop-types";
import { geoMercator, geoPath } from 'd3-geo';
import { select } from 'd3';
import { zoom, zoomTransform} from 'd3-zoom';
import { feature } from 'topojson-client';
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import RefreshIcon from '@material-ui/icons/Refresh';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { getColo } from '../../store/actions/coloAction';
import MapTootip from "./mapTooltip";

const projection = geoMercator();

const TooltipMap = withStyles((theme) => ({
	tooltip: {
		backgroundColor: theme.palette.common.white,
		border: "1px solid #707070",
		padding: "10px",
	},
	arrow: {
		color: theme.palette.common.white,
		"&::before": {
			border: "1px solid #707070",
		},
	},
}))(Tooltip);

const WorldMap = ({mapData, onChildClick}) => {
	const cities = mapData;
	const dispatch = useDispatch();

	const [geographies, setGeographies] = useState([]);

	const svg = select('#worldMap');

	const zoomed = () => {
		svg.selectAll('.countries').attr('transform', zoomTransform(svg.node()));
	};

	const zoomOption = zoom().scaleExtent([1, 8]).on('zoom', zoomed);

	svg.call(zoomOption);

	const zoomIn = () => {
		zoomOption.scaleBy(svg.transition().duration(750), 1.2);
	};

	const zoomOut = () => {
		zoomOption.scaleBy(svg.transition().duration(750), 0.8);
	};
	const onRefresh = () => {
		// TODO: API integration
		dispatch(getColo());
	};

	const reset = () => {
		zoomOption.scaleBy(svg.transition().duration(750), 0.0);
	};

	const openNetworkMap = (data) => {
		onChildClick(data);
	};

	useEffect(() => {
		fetch('images/content/world_map.json').then((response) => {
			if (response.status !== 200) {
				return;
			}
			response.json().then((worlddata) => {
				setGeographies(
					feature(worlddata, worlddata.objects.countries).features
				);
			});
		});
	}, []);

	return (
		<div>
			<Button className="refresh-button" onClick={onRefresh}>
				<RefreshIcon />
			</Button>
			<svg width="100%" height="100%" viewBox="0 0 850 450" id="worldMap">
				<g className="countries">
					{geographies.map((d) => (
						<path
							key={`path-${d.id}`}
							d={geoPath().projection(projection)(d)}
							className="country"
							fill="#f7f7f7"
							stroke="#707070"
							strokeWidth={1}
						/>
					))}
				</g>
				<g className="countries">
					{cities.map((city) => {
						if (city.capacity === 21) {
							return (
								<TooltipMap
									title={<MapTootip data={city} />}
									placement="top"
									arrow
								>
									<circle
										key={`marker-${city.sno}`}
										cx={projection(city.coordinates)[0]}
										cy={projection(city.coordinates)[1]}
										r={5}
										fill="#e80909"
										stroke="#FFFFFF"
										className="colos"
										onClick = {() => openNetworkMap(city)}
									/>
								</TooltipMap>
							);
						}
						if (city.capacity === 23) {
							return ( <TooltipMap
								title={<MapTootip data={city} />}
								placement="top"
								arrow
							>
								<circle
									key={`marker-${city.sno}`}
									cx={projection(city.coordinates)[0]}
									cy={projection(city.coordinates)[1]}
									r={5}
									fill="#4ac30a"
									stroke="#FFFFFF"
									className="colos"
									onClick = {() => openNetworkMap(city)}
								/>
								</TooltipMap>
							);
						}
						return ( 
						<TooltipMap
							title={<MapTootip data={city} />}
							placement="top"
							arrow
							key={`marker-${city.sno}`}
						>
							<circle
								key={`marker-${city.sno}`}
								cx={projection(city.coordinates)[0]}
								cy={projection(city.coordinates)[1]}
								r={5}
								fill="#f7c318"
								stroke="#FFFFFF"
								className="colos"
								onClick = {() => openNetworkMap(city)}
							/>
							</TooltipMap>
						);
					})}
				</g>

			</svg>
			<div className="mapControls">
				<HomeOutlinedIcon style={{ fontSize: 30 }} onClick={() => reset()} />
				<AddBoxOutlinedIcon style={{ fontSize: 30 }} onClick={() => zoomIn()} />
				<IndeterminateCheckBoxOutlinedIcon
					style={{ fontSize: 30 }}
					onClick={() => zoomOut()}
				/>
			</div>
		</div>
	);
};
WorldMap.propTypes = {
	mapData: propTypes.array,
	onChildClick: propTypes.func
};


export default WorldMap;
