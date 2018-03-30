module.exports = {

	inputContainer: {
		height: styleVariables.inputHeight
	},

	textInput: {
		flex: 1,
		backgroundColor: 'transparent',
		paddingLeft: 0,
		borderColor: colour.inputBorder,
		borderBottomWidth: PixelRatio.get() / 2,
		height:34,
		fontSize:16,
	},

	inputDefault: {
		backgroundColor: colour.inputBackground,
		borderRadius: 4,
		borderColor: colour.inputBorder,
		borderWidth: PixelRatio.get() / 2,
		height: styleVariables.inputHeight
	},

	label: {
		color: pallette.primaryGreen,
		marginBottom: styleVariables.gutterBase / 4,
		fontSize:12,
	},

	labelLarge: {
		fontSize:16,
		color:pallette.navBarText,
	},

	headerText: {
		fontSize: styleVariables.fontSizeBase / 1.25,
	},

	errorContainer: {
		padding: styleVariables.paddingBase,
		alignItems: 'center',
		justifyContent: 'center'
	},

	inputAppendContainer: {
		position: 'relative',
	},

	inputAppend: {
		position: 'absolute',
		zIndex: 1,
		left: 0,
		top: 0,
		backgroundColor: 'transparent',
		height: 54,
		width: 54,
		alignItems: 'center',
		justifyContent: 'center',
	},
	segmentedTabStyle: {
		backgroundColor: "white",
		borderColor: colour.primaryGreen
	},
	segmentedTabActiveStyle: {
		backgroundColor: colour.primaryGreen
	},
	segmentedTabTextStyle: {
		color: colour.primaryGreen
	},
	inputIndent: {
		paddingLeft: 40,
	},
};
