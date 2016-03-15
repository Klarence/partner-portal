#!/bin/env node
//  OpenShift sample Node application
//var express = require('express');
var express = module.exports = require('express');
var favicon = require('serve-favicon');
//var fs      = require('fs');

//var index = require('.src/routes/index');
//    var http = require('http');
//    var path = require('path');
var app = express();

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port      = process.env.OPENSHIFT_NODEJS_PORT || 5000;
//var port = process.env.PORT || 5000;

app.listen(port, ipaddress, function(err) {
	console.log('running server on port ' + port);
});

var workspaceNav            = require('./data/workspaceNav.json');
var partnerBar              = require('./data/partnerBar.json');
var languageList            = require('./data/languageLocalization.json');
//var sidebarNavList = require('./data/sidebarNavList.json');
//var hasSidebar            = true;

var commerceRouter          = require('./src/routes/commerceRoutes')(workspaceNav, partnerBar, languageList);
var onboardingRouter        = require('./src/routes/onboardingRoutes')(workspaceNav, partnerBar, languageList);
var softwareRouter          = require('./src/routes/softwareRoutes')(workspaceNav, partnerBar, languageList);
var salesConnectRouter      = require('./src/routes/salesConnectRoutes')(workspaceNav, partnerBar, languageList);
var salesMarketingRouter    = require('./src/routes/salesMarketingRoutes')(workspaceNav, partnerBar, languageList);
var programsPaymentsRouter  = require('./src/routes/programsPaymentsRoutes')(workspaceNav, partnerBar, languageList);
var distiRouter             = require('./src/routes/distiRoutes')(workspaceNav, partnerBar, languageList);
var ciscoInternalRouter     = require('./src/routes/ciscoInternalRoutes')(workspaceNav, partnerBar, languageList);

app.use(express.static('public'));
app.use(favicon(__dirname + '/public/img/logos/favicon.ico'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.set('view cache', false);

app.use('/commerce', commerceRouter);
app.use('/onboarding', onboardingRouter);
app.use('/software', softwareRouter);
app.use('/sales-connect', salesConnectRouter);
app.use('/sales', salesMarketingRouter);
app.use('/programs', programsPaymentsRouter);
app.use('/disti', distiRouter);
app.use('/internal', ciscoInternalRouter);


app.get('/', function (req, res) {
    res.render('index', {
        title: 'Cisco Partner Portal Home',
        titleLink: '/',
        IconClass: 'PartnerPortal-icon',
        workspaceNav: workspaceNav,
        partnerBar: partnerBar,
        languageList: languageList,
        hasSidebar: false
    });
});

//
//self.initializeServer = function() {
//    self.createRoutes();
//    // This below line should be commented
//    // self.app = express.createServer();
//    //  Add handlers for the app (from the routes).
//    for (var r in self.routes) {
//        self.app.get(r, self.routes[r]);
//    }
//};
//
//
//self.initialize = function() {
//    self.setupVariables();
//    self.populateCache();
//    self.setupTerminationHandlers();
//    // Create the express server and routes.
//    self.initializeServer();
//    // set Application routes
//
//    // <--- My customization starts here --->
//    self.setApplicationProperties();
//    // <--- My customization ends here --->
//};
//
//self.setApplicationProperties = function() {
//    self.app = app;
//};

//app.listen(port, function (err) {
//    console.log('running server on port ' + port);
//});

