import React, { useState, useEffect } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

const cities = [
	{ name: "Tokyo", coordinates: [139.6917, 35.6895], capacity: 1 },
	{ name: "Jakarta", coordinates: [106.865, -6.1751], capacity: 500 },
	{ name: "Delhi", coordinates: [77.1025, 28.7041], capacity: 800 },
	{ name: "Manila", coordinates: [120.9842, 14.5995], capacity: 1100 },
	{ name: "Seoul", coordinates: [126.978, 37.5665], capacity: 1200 },
	{ name: "Shanghai", coordinates: [121.4737, 31.2304], capacity: 1300 },
	{ name: "Rio de Janeiro", coordinates: [-43.1729, -22.9068], capacity: 200 },
	{ name: "Kinshasa", coordinates: [15.2663, -4.4419], capacity: 1001 },
	{ name: "Tianjin", coordinates: [117.3616, 39.3434], capacity: 1500 },
	{ name: "Paris", coordinates: [2.3522, 48.8566], capacity: 10000 },
	{ name: "Lima", coordinates: [-77.0428, -12.0464], capacity: 2000 },
];
const projection = geoMercator()
	.scale(160)
	.translate([800 / 2, 450 / 2]);

const Map = () => {
	const [geographies, setGeographies] = useState([]);

	useEffect(() => {
		fetch("images/content/world_map.json").then((response) => {
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
		<svg width={800} height={600} viewBox="0 0 800 450">
			<g className="countries">
				{geographies.map((d) => (
					<path
						key={`path-${d}`}
						d={geoPath().projection(projection)(d)}
						className="country"
						fill="#FFFFFF"
						stroke="#000"
						strokeWidth={0.5}
					/>
				))}
			</g>
			<g className="markers">
				{cities.map((city) => (
					<circle
						key={`marker-${city}`}
						cx={projection(city.coordinates)[0]}
						cy={projection(city.coordinates)[1]}
						r={6}
						fill="red"
						stroke="#FFFFFF"
						className="marker"
					/>
				))}
			</g>
		</svg>
	);
};

export default Map;
