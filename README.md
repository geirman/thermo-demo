# React Native Demo for Thermo Fisher Scientific
A quick react-native demo for Thermo Fisher Scientific created in Expo, including tab-based navigation using react-navigation, fingerprint based authentication, full-screen looping video, and victory charts

[View Demo on Expo](https://expo.io/@geirman/thermo-demo)

## Known Issues


* Victory chart: on the RevenueScreen is not constrained to the viewable container, nor is it centered. [Github Issue Submitted](https://github.com/FormidableLabs/victory/issues/709)
* Fingerprint Auth: When the LoginScreen loads, I attempt to listen for fingerprint verification, but oftentimes it fails immediately with a "canceled by user" error. This seems to work initially, when the app is first loaded, but then consistently fails as I make changes and refresh. To work around this, I have to exit Expo entirely and start the app fresh again.

## Images
<img width="751" alt="2017-08-09_1802" src="https://user-images.githubusercontent.com/1640318/29150215-ebecaab6-7d2d-11e7-8726-6e8e906ecea8.png">
<img width="755" alt="2017-08-09_1803" src="https://user-images.githubusercontent.com/1640318/29150216-efd864da-7d2d-11e7-91fe-c3511af4d2aa.png">
<img width="752" alt="2017-08-09_1804" src="https://user-images.githubusercontent.com/1640318/29150217-f2e155c4-7d2d-11e7-9822-15aa6a9a3723.png">
<img width="750" alt="2017-08-09_1805" src="https://user-images.githubusercontent.com/1640318/29150219-f5d7fe54-7d2d-11e7-8c9b-dcfb86cb7f32.png">