var builder = require('@jenkins-cd/js-builder');

builder.lint('none');

//
// Bundle the modules.
// See https://github.com/jenkinsci/js-builder
//
builder.bundle('src/main/js/sse-gateway-browser-load.js').less('src/main/js/sse-gateway-browser-load.less');