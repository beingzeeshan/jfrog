import React from "react";

export default function mapTootip(props) {
	console.log("props", props);

	return (
		<div>
			<div className="siteName">
				Site Name
				<div> {props.data.name} </div>
			</div>

			<div className="siteLocation">
				Location
				<div> {props.data.location} </div>
			</div>

			<div className="noPods">
				No of Pods
				<div> {props.data.capacity} </div>
			</div>

			<div className="healthStatus">
				Health Status
				<div> {props.data.healthstatus} </div>
			</div>
		</div>
	);
}
