var express = require('express');

var onboardingRouter = express.Router();

var router = function(workspaceNav, partnerBar, languageList){
    partnerBar = require('../../data/partnerBarOnboarding.json');

    var workspaces = [];

    onboardingRouter.route('/')
    .get(function (req, res) {
        res.render('onboardingView', {
            title: 'Onboarding & Administration',
            titleLink: '/onboarding',
            workspaceNav: workspaceNav,
            partnerBar: partnerBar,
            workspaces: workspaces,
            languageList: languageList,
            IconClass: 'Onboarding-icon'
        });
    });

    return onboardingRouter;
};
module.exports = router;
