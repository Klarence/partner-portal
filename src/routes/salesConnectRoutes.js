var express = require('express');

var salesConnectRouter = express.Router();

var router = function(workspaceNav, partnerBar, languageList){
    partnerBar = require('../../data/partnerBarSalesConnect.json');

    var workspaces = [];

    salesConnectRouter.route('/')
    .get(function (req, res) {
        res.render('salesConnectView', {
            title: 'Cisco SalesConnect',
            titleLink: '/sales-connect',
            workspaceNav: workspaceNav,
            partnerBar: partnerBar,
            workspaces: workspaces,
            languageList: languageList,
            IconClass: 'SalesConnect-icon'
        });
    });

    return salesConnectRouter;
};
module.exports = router;
