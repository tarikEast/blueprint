/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    autoprefixer: {
      browsers: [ 
        'last 2 Android major versions', 
        'last 2 iOS major versions', 
        'last 2 Chrome major versions', 
        'last 2 ChromeAndroid major versions', 
        'last 2 Explorer major versions', 
        'last 2 ExplorerMobile major versions', 
        'last 2 Firefox major versions', 
        'last 2 FirefoxAndroid major versions', 
        'last 2 Safari major versions', 
        'last 2 Edge major versions'
      ]
    }
  });

  return app.toTree();
};
