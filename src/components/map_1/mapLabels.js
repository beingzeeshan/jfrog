import React from 'react';
import './map_style.scss';

const colors = ['#4ac30a', '#f7c318', '#E80909'];

const legendText = ['Good', 'Warning', 'Critical'];

export default function mapLabels() {
	return (
		<svg width="100%" height={20} className="LegendText">
			<g>
				{colors.map((d, i) => (
					<circle
						key={`marker-${d}`}
						cx={10 + i * 90}
						cy={10}
						r={5}
						fill={d}
						stroke="#FFFFFF"
						className="marker"
					/>
				))}
			</g>

			<g className="mapLabels">
				{legendText.map((d, i) => (
					<text key={`marker-${d}`} data={d} x={20 + i * 90} y={10} dy=".35em">
						{d}
					</text>
				))}
			</g>
		</svg>
	);
}
