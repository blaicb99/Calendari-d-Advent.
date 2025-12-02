import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.laliga.advent',
  appName: 'LaLiga Advent',
  webDir: 'dist', // <--- ASSEGURA'T QUE POSA 'dist' I NO 'www'
  server: {
    androidScheme: 'https'
  }
};

export default config;
