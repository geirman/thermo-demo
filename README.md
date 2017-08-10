# React Native Demo for Thermo Fisher Scientific
A quick react-native demo for Thermo Fisher Scientific created in Expo, including tab-based navigation using react-navigation, fingerprint based authentication, full-screen looping video, and victory charts

[View Demo on Expo](https://expo.io/@geirman/thermo-demo)

## Known Issues


* Victory chart: on the RevenueScreen is not constrained to the viewable container, nor is it centered. [Github Issue Submitted](https://github.com/FormidableLabs/victory/issues/709)
* Fingerprint Auth: When the LoginScreen loads, I attempt to listen for fingerprint verification, but oftentimes it fails immediately with a "canceled by user" error. This seems to work initially, when the app is first loaded, but then consistently fails as I make changes and refresh. To work around this, I have to exit Expo entirely and start the app fresh again.