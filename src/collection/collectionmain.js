var CollectionContainer = React.createClass({
	render : function() {
		return (
			<div>
				<NavigationBar/>
				<CollectionList albumDB={albumDatabase}/>
			</div>
		)
	}
});

React.render(<CollectionContainer/>, document.body);



