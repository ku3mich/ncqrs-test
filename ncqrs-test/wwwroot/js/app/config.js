require.config({
    baseUrl: document.getElementById('wwwRoot').value,
    paths: {
        'jquery': 'jquery.min',
        'domReady': 'ready.min',
        'bootstrap': 'bootstrap.min',
        'ui-bootstrap': 'ui-bootstrap.min',
        'ng': 'angular.min',
        'ngApp': 'app/ngApp',
        'startup' : 'app/startup'
    },

    shim: {
        'ng': {
            exports: 'angular',
            deps: ['jquery']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'ui-bootstrap': {
            deps: ['ng']
        },
        'startup': {
            deps: ['ng', 'ngApp']
        },
        'ngApp': {
            deps: ['ng', 'ui-bootstrap']
        }
    },

    deps: ['startup']
});