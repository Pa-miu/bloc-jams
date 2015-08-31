var CollectionTemplate = React.createClass({
	render : function() {
		return (
			<div className="collection-album-container column fourth">
				<a className="album-name" href="album.html"><img src={this.props.albumArtUrl}/></a>
				<div className="collection-album-info caption">
					<p>
						<a className="album-name" href="album.html">{this.props.name}</a>
						<br/>
						<a href="album.html">{this.props.artist}</a>
						<br/>
						{this.props.numSongs}
						<br/>
					</p>
				</div>
			</div>
		);
	}
});

var CollectionList = React.createClass({
	render : function() {
		var collectionNodes = this.props.albumDB.map(function (album) {
			return (
				<CollectionTemplate
					albumArtUrl={album.albumArtUrl}
					name={album.name}
					artist={album.artist}
					numSongs={album.songs.length}
				/>
			)
		});
		
		return (
			<section className="album-covers container clearfix">
				{collectionNodes}
			</section>
		)
	}
});