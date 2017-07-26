# React Native Demo for Thermo Fisher Scientific
A quick react-native demo for Thermo Fisher Scientific created in Expo, including tab-based navigation using react-navigation, fingerprint based authentication, full-screen looping video, and victory charts

[View Demo on Expo](https://expo.io/@geirman/thermo-demo)

## Known Issues

* Fullscreen Video: The full screen video playback on the LoginScreen isn't working for some strange reason. It was working while developing up until I published to Expo. I also rebooted my machine around the same time, but usually that fixes things rather than breaks them. So, hmmm... need to figure that out. Even more strange is that it played on one of my work colleague's phones (Android), so it's not even consistently broken.
* Victory chart: on the RevenueScreen is not constrained to the viewable container, nor is it centered.
* Fingerprint Auth: When the LoginScreen loads, I attempt to listen for fingerprint verification, but oftentimes it fails immediately with a "canceled by user" error. This seems to work initially, when the app is first loaded, but then consistently fails as I make changes and refresh. To work around this, I have to exit Expo entirely and start the app fresh again.