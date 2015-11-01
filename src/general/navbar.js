var NavigationBar = React.createClass({
	render : function () {
		return (
			<nav className="navbar">
				<a href="index.html" className="logo">
					<img src="assets/images/bloc_jams_logo.png" alt="bloc jams logo"/>
				</a>
				
				<div className="links-container">
					<a href="collection.html" className="navbar-link">collection</a>
				</div>
			</nav>
		);
	}
});