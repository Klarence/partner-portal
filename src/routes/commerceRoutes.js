var express = require('express');

var commerceRouter = express.Router();

var router = function(workspaceNav, partnerBar, languageList){

    var workspaces = [];

    commerceRouter.route('/')
    .get(function (req, res) {
        res.render('commerceView', {
            title: 'Cisco Commerce Workspace ',
            titleLink: '/commerce',
            workspaceNav: workspaceNav,
            partnerBar: partnerBar,
            workspaces: workspaces,
            languageList: languageList,
            IconClass: 'commerceicon'
        });
    });

    //commerceRouter.route('/:id')
    //.get(function (req, res) {
    //    var id = req.params.id;
    //    res.render('workspaceView', {
    //        title: 'workspaces',
    //        workspaceNav: workspaceNav,
    //        workspace: workspaces[id]
    //    });
    //});

    return commerceRouter;
};
module.exports = router;
