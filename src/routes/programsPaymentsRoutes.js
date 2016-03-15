var express = require('express');

var programsPaymentsRouter = express.Router();

var router = function(workspaceNav, partnerBar, languageList){
    partnerBar = require('../../data/partnerBarPrograms.json');

    var workspaces = [];

    programsPaymentsRouter.route('/')
    .get(function (req, res) {
        res.render('programsPaymentsView', {
            title: 'Programs & Payments',
            titleLink: '/programs',
            workspaceNav: workspaceNav,
            partnerBar: partnerBar,
            workspaces: workspaces,
            languageList: languageList,
            IconClass: 'Programs-icon'
        });
    });

    return programsPaymentsRouter;
};
module.exports = router;
