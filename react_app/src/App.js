/*import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("https://run.mocky.io/v3/4509d8cc-2fe4-439c-9075-b9196c6ac455")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					User_Name: { item.data.name },
					Full_Name: { item.data.icon },
					User_Email: { item.data.parent_id }
					</ol>
				))
			}
		</div>
	);
}
}

export default App;
*/

import React from "react";
import './App.css';
import Headlines from './components/NewsHeadlines/Headlines';
 
export default function App() {
    return (
        <div className="container-fluid my-5">
            <h3 className="text-center mb-5">
                React Working with Fetch API
            </h3>
            <Headlines />
        </div>
    );
}