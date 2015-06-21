var React = require('react-native');

var {
	View,
	WebView,
	StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  },
});

var Web = React.createClass({
	render() {
		return (
			<View style={styles.container}>
				<WebView url={this.props.url} />
			</View>
		)
	}
});

Web.propTypes = {
 url: React.PropTypes.string.isRequired
};

module.exports = Web;