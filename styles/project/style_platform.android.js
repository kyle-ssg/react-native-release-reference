module.exports = {
    navContent: {
        backgroundColor: colour.bodyBackground,
        flex: 1,
        paddingTop: styleVariables.baseNavHeight
    },
    statusContent: {
        paddingTop: StatusBar.currentHeight
    },
    navBarTitle: {
        fontSize: styleVariables.fontSizeH3,
        color: 'white',
        alignSelf: 'center',
        // marginTop: 10,
        //backgroundColor: 'pink',
        fontWeight: styleVariables.headingsFontWeight
    },
    navItemTitleContainer: {
        flex: 1,
        //backgroundColor: 'red',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        left: -27
    },

    inputContainer:{
    },

    textInput: {
        height:54,
        paddingTop: 16 - (16),
    },

    lightboxAnd:{
        margin:10,
    }
};

window.platformVariables = {
    inputHeight: 54,
};
