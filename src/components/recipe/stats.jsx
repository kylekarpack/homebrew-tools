import { Component } from "react";
import { Statistic } from "semantic-ui-react";

class Stats extends Component {

	render() {
		const position = { position: "sticky", top: 0 };

		return (
			<Statistic.Group widths="five" size="mini" style={position}>
				<Statistic>
					<Statistic.Value>1.077</Statistic.Value>
					<Statistic.Label>OG</Statistic.Label>
				</Statistic>
				<Statistic>
					<Statistic.Value>1.026</Statistic.Value>
					<Statistic.Label>FG</Statistic.Label>
				</Statistic>
				<Statistic>
					<Statistic.Value>6.7%</Statistic.Value>
					<Statistic.Label>ABV</Statistic.Label>
				</Statistic>
				<Statistic>
					<Statistic.Value>32</Statistic.Value>
					<Statistic.Label>IBU</Statistic.Label>
				</Statistic>
				<Statistic>
					<Statistic.Value>7</Statistic.Value>
					<Statistic.Label>SRM</Statistic.Label>
				</Statistic>

			</Statistic.Group>
		);
	}
}

export default Stats;