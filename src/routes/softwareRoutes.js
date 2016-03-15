var express = require('express');

var softwareRouter = express.Router();

var router = function(workspaceNav, partnerBar, languageList){
    partnerBar = require('../../data/partnerBarSoftware.json');

    var workspaces = [];

    softwareRouter.route('/')
    .get(function (req, res) {
        res.render('softwareView', {
            title: 'Cisco Software',
            titleLink: '/software',
            workspaceNav: workspaceNav,
            partnerBar: partnerBar,
            workspaces: workspaces,
            languageList: languageList,
            IconClass: 'Software-icon'
        });
    });

    return softwareRouter;
};
module.exports = router;
