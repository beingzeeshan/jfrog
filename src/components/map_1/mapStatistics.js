import React from 'react';
import './map_style.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function MapStatistics() {
	return (
		<div className="statisticsRect">
			<Card>
				<CardContent>
					<div className="boxTitle">Current Statistics</div>
					<div className="boxContent">
						<div className="currentTime"> 5:30 PM </div>
						<div> Wednesday, 26 May 2021 </div>
						<div> Last Modified 10 min ago </div>
					</div>
					<div className="totalSites">
						<span className="labelSize"> Total Sites </span> 15
					</div>
					<hr />
					<div className="flex-container">
						<div>
							Critical
							<div>1111</div>
						</div>
						<div>
							Warning
							<div>9999</div>
						</div>
						<div>
							Good
							<div>9090</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
