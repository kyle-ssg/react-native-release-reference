import {NativeModules,PixelRatio} from 'react-native';
var em = require('../base/style_pxToEm');
window.pallette = {
    backgroundBase: '#f1f1f1',
    backgroundAlt: '#f7f7f7',

    primaryBlue:'#359F7A',
    primaryBlueLight:'#61aaff',
    primaryGreen:'#46CD86',
    primaryGreenLight:'#6bdb9f',
    primaryGreenDark:'#34b471',

    blueGrey:'#ced6e4',
    blueGreyDark:'#8796ab',

    blueGreyText:'#848d99',
    blueGreyDarkText:'#313c4a',

    facebook:'#3b5998',
    google:'#e83d38',
    twitter:'#00acee',

    primary: '#3a3a3a',
    primaryDark: '#3582dc',
    primaryLight: '#7e8592',
    primaryLightest: '#7e8592',
    secondary: '#22598E',
    third: '#c50047',

    text: '#fff',
    textGreen:'#81d2c5',
    textLight: '#a8a8a8',
    textLightest: '#fff',
    textLightestHighlight: '#e2e2e2',
    divider: '#d1d1d1',
    dividerLight: '#f9f9fa',
	brandDanger: '#9C1033',

    error: '#b94d4d',

    fromGradient:'#fafafa',
    toGradient:'#fff',
    anchor: '#4e5562',

    navBar:'#46CD86',
    navBarText:'#fff',
    navBarIcon:'#fff'
};

window.colour = {
    errorBackground: '#c84d38',
    bodyBackground: '#fff', //General app  background
    bodyBackgroundAlt: '#f1f1f1', //General app  background
    inputBackground:'#e4e7f2',
    inputBorder:pallette.primaryGreen,
    textFaint:'rgba(255,255,255,.75)',
    textFaintLight:'rgba(0,0,0,.3)',

    //nav
    navBar: pallette.primary,
    navBarIcon: pallette.navBarIcon,
    navBarSubtitle: pallette.secondary,
    navBarButtonText: pallette.navBarText,
    navBarBorder: 'transparent',
    navBarText: pallette.navBarText,
    alert: 'red',
    avatar: "#dbdbdb",

    //BUTTON / SELECT COLOURS
    btnText: pallette.text,
    btnDefault: pallette.primary,
    btnAlt: pallette.primary,
};

window.styleVariables =  Object.assign({
    //SCAFFOLD
    statusHeight: NativeModules.StatusBarManager.HEIGHT || 20,
    baseNavHeight: 54,
    marginBaseVertical: em(1),
    marginBaseHorizontal: em(1),
    paddingBase: em(1),
    paddingList: em(1.1),
    gutterBase: 10,
    borderRadiusDefault: 4,
    fontSizeH1: em(2.286),
    fontSizeH2: em(1.75),
    fontSizeH3: em(1.25),

    //BASE
    borderWidth: 2 / PixelRatio.get(),
    borderDefault: pallette.textLight,

    //TYPE
    fontSizeBase: em(1.4),
    fontSizeSmall: em(0.85),
    fontSizeHeading: em(1.5),
    fontSizeSubHeading: em(1.3),

    fontSizeIcon: 30,

    fontSansSerif: 'helvetica neue',

    text: pallette.text, //General app text colour
    textLight: pallette.textLight, //Light app text colour

    //FORMS
    inputHeight: 34, //Need to change this value in both platform variables files at the moment
    inputText: pallette.text,
    inputBackground: pallette.backgroundBase,
    inputBorder: pallette.primaryGreen,
    placeholderTextColor: pallette.textLight,

    //NAV
    navBar: pallette.navBar,
    navBarIcon: pallette.text,
    navBarButtonText: pallette.text,
    navBarBorder: pallette.primary,
    navBarText: pallette.text,
    navColor:pallette.navBarText,

    //MODALS
    modalBackground: '#F0F0F0',


    //BUTTONS
    button: 50,

    buttonPrimary: pallette.primary,
    buttonTextLight: pallette.textLight
}, require('./style_platform_variables'));
