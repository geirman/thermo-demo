const theme = 'material';
const tintColor = '#2f95dc';
const md = {
  primarydark: '#7B1FA2',
  primary: '#9C27B0',
  primarylight: '#E1BEE7',
  background: '#536dfe',
  text: '#212121',
  textinverse: '#fff',
  textsubdued: '#757575',
  textlight: '#bdbdbd',
  divider: '#bdbdbd'
};

const login = {
  background: '#2665b3',
  blue: {
    background: 'rgba(0,31,110,0.6)',
    buttonColor: '#ffa800'
  },
  purple: {
    background: 'rgba(68,0,115,0.65)',
    buttonColor: '#6cffff'
  },
  darkpurple: {
    background: 'rgba(30,0,97,0.65)',
    buttonColor: '#31ffb4'
  },
  sky: {
    background: 'rgba(69,169,202,0.60)',
    buttonColor: '#9c21a4'
  },
  original: {
    background: 'rgba(50,50,50,0.4)',
    buttonColor: '#b37426'
  }
};

const themes = {
  original: {
    tintColor,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColor,
    tabBar: '#fefefe',
    errorBackground: 'red',
    errorText: '#fff',
    warningBackground: '#EAEB5E',
    warningText: '#666804',
    noticeBackground: tintColor,
    noticeText: '#fff',
    success: '#2aa421',
    error: '#c71c1f',
    divider: md.divider,
    thermoRed: '#f44248',
    chart: ['#7D1476', '#D2AF21', '#CA0BBD', '#0B5C53', '#017D6F'],
    login: login['sky']
  },
  material: {
    tintColor: md.background,
    tabIconDefault: md.textlight,
    tabIconSelected: md.primary,
    tabBar: '#fefefe',
    errorBackground: '#c71c1f',
    errorText: '#fff',
    warningBackground: '#EAEB5E',
    warningText: '#666804',
    noticeBackground: md.background,
    noticeText: '#fff',
    success: '#2aa421',
    error: '#c71c1f',
    divider: md.divider,
    thermoRed: '#f44248',
    chart: [md.background, md.primary, md.primarydark, md.primarylight],
    login: login['sky']
  }
};

export default themes[theme];
