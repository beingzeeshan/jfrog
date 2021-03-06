/*eslint-disable */
import * as d3 from "d3";

export default function InitChart() {
	const barData = [
		{
			x: 1,
			y: 5,
		},
		{
			x: 20,
			y: 20,
		},
		{
			x: 40,
			y: 10,
		},
		{
			x: 60,
			y: 40,
		},
		{
			x: 80,
			y: 5,
		},
		{
			x: 100,
			y: 60,
		},
	];

	const vis = d3.select("#visualisation");
	const WIDTH = 1000;
	const HEIGHT = 500;
	const MARGINS = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 50,
	};
	const xRange = d3.scale
		.ordinal()
		.rangeRoundBands([MARGINS.left, WIDTH - MARGINS.right], 0.1)
		.domain(
			barData.map(function (d) {
				return d.x;
			})
		);
	const yRange = d3.scale
		.linear()
		.range([HEIGHT - MARGINS.top, MARGINS.bottom])
		.domain([
			0,
			d3.max(barData, function (d) {
				return d.y;
			}),
		]);
	const xAxis = d3.svg.axis().scale(xRange).tickSize(5).tickSubdivide(true);
	const yAxis = d3.svg
		.axis()
		.scale(yRange)
		.tickSize(5)
		.orient("left")
		.tickSubdivide(true);

	vis
		.append("svg:g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
		.call(xAxis);

	vis
		.append("svg:g")
		.attr("class", "y axis")
		.attr("transform", "translate(" + MARGINS.left + ",0)")
		.call(yAxis);

	vis
		.selectAll("rect")
		.data(barData)
		.enter()
		.append("rect")
		.attr("x", function (d) {
			return xRange(d.x);
		})
		.attr("y", function (d) {
			return yRange(d.y);
		})
		.attr("width", xRange.rangeBand())
		.attr("height", function (d) {
			return HEIGHT - MARGINS.bottom - yRange(d.y);
		})
		.attr("fill", "grey")
		.on("mouseover", function () {
			d3.select(this).attr("fill", "blue");
		})
		.on("mouseout", function () {
			d3.select(this).attr("fill", "grey");
		});
}
