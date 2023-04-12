/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// ini adalah file entry point atau tipe masuk
// jadi react native pertama kali buka disini, dimana index.js akan menjalankan komponen yang paling utama yaitu app.
// Hal yang perlu ingat yaitu komponen, apapun yang ada didalam komponen.
// kombponen adalah bagian didalam program kita, akan membentuk komponen yang punya anak-anak lagi
