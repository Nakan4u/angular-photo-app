// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDKdqbpDlhcyrIDseapNPmhMbM31QNrc_8",
    authDomain: "photo-finder-app.firebaseapp.com",
    databaseURL: "https://photo-finder-app.firebaseio.com",
    projectId: "photo-finder-app",
    storageBucket: "photo-finder-app.appspot.com",
    messagingSenderId: "904958291405"
  }
};

