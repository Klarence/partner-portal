var express = require('express');

var salesMarketingRouter = express.Router();

var router = function(workspaceNav, partnerBar, languageList){
    partnerBar = require('../../data/partnerBarSalesMarketing.json');

    var workspaces = [];

    salesMarketingRouter.route('/')
    .get(function (req, res) {
        res.render('salesMarketingView', {
            title: 'Sales & Marketing',
            titleLink: '/sales',
            workspaceNav: workspaceNav,
            partnerBar: partnerBar,
            workspaces: workspaces,
            languageList: languageList,
            IconClass: 'SalesMarketing-icon'
        });
    });

    return salesMarketingRouter;
};
module.exports = router;
