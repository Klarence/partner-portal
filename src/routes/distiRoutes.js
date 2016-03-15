var express = require('express');

var distiRouter = express.Router();

var router = function(workspaceNav, partnerBar, languageList){
    partnerBar = require('../../data/partnerBarDisti.json');

    var workspaces = [];

    distiRouter.route('/')
    .get(function (req, res) {
        res.render('distiCentralView', {
            title: 'Cisco Distributor Central',
            titleLink: '/disti',
            workspaceNav: workspaceNav,
            partnerBar: partnerBar,
            workspaces: workspaces,
            languageList: languageList,
            IconClass: 'Disti-icon'
        });
    });

    return distiRouter;
};

module.exports = router;
