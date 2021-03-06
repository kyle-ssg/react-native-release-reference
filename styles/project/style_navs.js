//https://github.com/wix/react-native-navigation/wiki/Styling-the-navigator
global.navbarStyle = {
    statusBarTextColorScheme: 'dark',
    topBarElevationShadowEnabled: false,
    navBarNoBorder: true,
    navBarBackgroundColor: styleVariables.navBar,
    navBarTextColor: colour.navBarText,
    navBarSubtitleFontSize: 9,
    navBarSubtitleColor: colour.navBarSubtitle,
    navBarButtonColor: colour.navBarIcon,
    navBarHeight: styleVariables.baseNavHeight
};


module.exports = {

    fakeNav: {
        paddingTop: styleVariables.statusHeight,
        paddingBottom: styleVariables.statusHeight,
        height: 64,
        justifyContent: 'center'
    },

    navBarText: {
        marginTop:10,
        fontWeight: '400',
        color: 'white',
        fontSize: 18,
    },

    navIcon: {
        fontSize: 28,
        color:'white',
        marginTop:10
    },

    navBar: {},

    barText: {
        color: 'black'
    },


    //OFF CANVAS

    navButtonRight: {
        alignItems: 'flex-end',
    },

    navButtonLeft: {
        alignItems: 'flex-start',
    },

    menu: {
        height: DeviceHeight
    },

    menuItem: {
        height: 34,
        justifyContent: 'flex-start',
    },
    menuItemActive: {},

    menuItemText: {
        fontSize: em(1.5),
        color: styleVariables.textLight,
        backgroundColor: 'transparent'
    },
    menuItemIcon: {
        width: 34,
        height: 34,
        fontSize: 34,
        justifyContent: 'center',
        textAlign: 'center',
        lineHeight: 34,
        color: pallette.secondary,
        backgroundColor: 'transparent'
    },

    menuItemImage: {
        width: 34,
        height: 34,
        borderRadius: 34 / 2
    }
};
