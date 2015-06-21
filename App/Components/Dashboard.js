var React = require('react-native');

var {
	Text,
	View,
	StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

var Dashboard = React.createClass({
	render() {
		return (
			<View style={styles.container}>
				<Text> This is the dashboard </Text>
				<Text> {this.props.userInfo} </Text>
			</View>
		);
	}
});

module.exports = Dashboard;