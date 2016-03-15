var express = require('express');

var ciscoInternalRouter = express.Router();

var router = function(workspaceNav, partnerBar, languageList){
    partnerBar = require('../../data/partnerBarCiscoInternal.json');

    var workspaces = [];

    ciscoInternalRouter.route('/')
    .get(function (req, res) {
        res.render('ciscoInternalView', {
            title: 'Cisco Internal',
            titleLink: '/internal',
            pageTitle: 'Cisco Internal',
            workspaceNav: workspaceNav,
            partnerBar: partnerBar,
            workspaces: workspaces,
            languageList: languageList,
            hasSidebar: false,
            varPath: 'partials/content/cisco-internal/cisco-internal.ejs',
            IconClass: 'Internal-icon'
        });
    });

    ciscoInternalRouter.route('/partner-reports')
    .get(function (req, res, next) {
        //var id = req.params.id;
        res.render('ciscoInternalView', {
            title: 'Cisco Internal',
            titleLink: '/internal',
            pageTitle: 'Partner Reports',
            workspaceNav: workspaceNav,
            partnerBar: partnerBar,
            workspaces: workspaces,
            languageList: languageList,
            hasSidebar: true,
            varPath: 'partials/content/cisco-internal/partner-reports.ejs',
            IconClass: 'Internal-icon'
        });
    });

    ciscoInternalRouter.route('/partner-reports/company')
        .get(function (req, res, next) {
            //var id = req.params.id;
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
                pageTitle: 'Company Reports',
                workspaceNav: workspaceNav,
                partnerBar: partnerBar,
                workspaces: workspaces,
                languageList: languageList,
                hasSidebar: true,
                varPath: 'partials/content/cisco-internal/partner-reports-company.ejs',
                IconClass: 'Internal-icon'
            });
        });

    ciscoInternalRouter.route('/partner-reports/cam')
        .get(function (req, res, next) {
            //var id = req.params.id;
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
                pageTitle: 'Certification Reports',
                workspaceNav: workspaceNav,
                partnerBar: partnerBar,
                workspaces: workspaces,
                languageList: languageList,
                hasSidebar: true,
                varPath: 'partials/content/cisco-internal/partner-reports-cam.ejs',
                IconClass: 'Internal-icon'
            });
        });

    ciscoInternalRouter.route('/partner-reports/cert')
        .get(function (req, res, next) {
            //var id = req.params.id;
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
                pageTitle: 'Certification Reports',
                workspaceNav: workspaceNav,
                partnerBar: partnerBar,
                workspaces: workspaces,
                languageList: languageList,
                hasSidebar: true,
                varPath: 'partials/content/cisco-internal/partner-reports-cert.ejs',
                IconClass: 'Internal-icon'
            });
        });

    ciscoInternalRouter.route('/partner-reports/cert-cn')
        .get(function (req, res, next) {
            //var id = req.params.id;
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
                pageTitle: 'Certification Reports',
                workspaceNav: workspaceNav,
                partnerBar: partnerBar,
                workspaces: workspaces,
                languageList: languageList,
                hasSidebar: true,
                varPath: 'partials/content/cisco-internal/partner-reports-cert-cn.ejs',
                IconClass: 'Internal-icon'
            });
        });

    ciscoInternalRouter.route('/partner-reports/data-mapping')
        .get(function (req, res, next) {
            //var id = req.params.id;
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
                pageTitle: 'Data Mapping Reports',
                workspaceNav: workspaceNav,
                partnerBar: partnerBar,
                workspaces: workspaces,
                languageList: languageList,
                hasSidebar: true,
                varPath: 'partials/content/cisco-internal/partner-reports-data-mapping.ejs',
                IconClass: 'Internal-icon'
            });
        });

    ciscoInternalRouter.route('/partner-reports/disti-partner')
        .get(function (req, res, next) {
            //var id = req.params.id;
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
                pageTitle: 'Certification Reports',
                workspaceNav: workspaceNav,
                partnerBar: partnerBar,
                workspaces: workspaces,
                languageList: languageList,
                hasSidebar: true,
                varPath: 'partials/content/cisco-internal/partner-reports-disti-partner.ejs',
                IconClass: 'Internal-icon'
            });
        });

    ciscoInternalRouter.route('/partner-reports/localized-reports')
        .get(function (req, res, next) {
            //var id = req.params.id;
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
                pageTitle: 'Certification Reports',
                workspaceNav: workspaceNav,
                partnerBar: partnerBar,
                workspaces: workspaces,
                languageList: languageList,
                hasSidebar: true,
                varPath: 'partials/content/cisco-internal/partner-reports-localized-reports.ejs',
                IconClass: 'Internal-icon'
            });
        });

    ciscoInternalRouter.route('/partner-reports/master')
        .get(function (req, res, next) {
            //var id = req.params.id;
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
                pageTitle: 'Master Reports',
                workspaceNav: workspaceNav,
                partnerBar: partnerBar,
                workspaces: workspaces,
                languageList: languageList,
                hasSidebar: true,
                varPath: 'partials/content/cisco-internal/partner-reports-master.ejs',
                IconClass: 'Internal-icon'
            });
        });

    ciscoInternalRouter.route('/partner-reports/new-parter')
        .get(function (req, res, next) {
            //var id = req.params.id;
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
                pageTitle: 'New Partner Reports',
                workspaceNav: workspaceNav,
                partnerBar: partnerBar,
                workspaces: workspaces,
                languageList: languageList,
                hasSidebar: true,
                varPath: 'partials/content/cisco-internal/partner-new-parter.ejs',
                IconClass: 'Internal-icon'
            });
        });

    ciscoInternalRouter.route('/partner-reports/partner-id-map')
        .get(function (req, res, next) {
            //var id = req.params.id;
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
                pageTitle: 'Partner ID Map Reports',
                workspaceNav: workspaceNav,
                partnerBar: partnerBar,
                workspaces: workspaces,
                languageList: languageList,
                hasSidebar: true,
                varPath: 'partials/content/cisco-internal/partner-reports-partner-id-map.ejs',
                IconClass: 'Internal-icon'
            });
        });

    ciscoInternalRouter.route('/partner-reports/partner-type')
        .get(function (req, res, next) {
            //var id = req.params.id;
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
                pageTitle: 'Certification Reports',
                workspaceNav: workspaceNav,
                partnerBar: partnerBar,
                workspaces: workspaces,
                languageList: languageList,
                hasSidebar: true,
                varPath: 'partials/content/cisco-internal/partner-reports-partner-type.ejs',
                IconClass: 'Internal-icon'
            });
        });

    ciscoInternalRouter.route('/territory-mgmt')
    .get(function (req, res, next) {
        res.render('ciscoInternalView', {
            title: 'Cisco Internal',
            titleLink: '/internal',
            pageTitle: 'Territory Management',
            workspaceNav: workspaceNav,
            partnerBar: partnerBar,
            workspaces: workspaces,
            languageList: languageList,
            hasSidebar: false,
            varPath: 'partials/content/cisco-internal/territory-mgmt.ejs',
            IconClass: 'Internal-icon'
        });
    });

    ciscoInternalRouter.route('/territory-mgmt/channels-territory-tool')
        .get(function (req, res, next) {
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
                pageTitle: 'Territory Management',
                workspaceNav: workspaceNav,
                partnerBar: partnerBar,
                workspaces: workspaces,
                languageList: languageList,
                hasSidebar: false,
                varPath: 'partials/content/cisco-internal/territory-mgmt.ejs',
                IconClass: 'Internal-icon'
            });
        });

    ciscoInternalRouter.route('/channel-data-mgmt')
    .get(function (req, res, next) {
        res.render('ciscoInternalView', {
            title: 'Cisco Internal',
            titleLink: '/internal',
            pageTitle: 'Territory Management',
            workspaceNav: workspaceNav,
            partnerBar: partnerBar,
            workspaces: workspaces,
            languageList: languageList,
            hasSidebar: false,
            varPath: 'partials/content/cisco-internal/channel-data-mgmt.ejs',
            IconClass: 'Internal-icon'
        });
    });

    ciscoInternalRouter.route('/channel-data-mgmt/be-mgmt-links')
        .get(function (req, res, next) {
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
                pageTitle: 'Territory Management',
                workspaceNav: workspaceNav,
                partnerBar: partnerBar,
                workspaces: workspaces,
                languageList: languageList,
                hasSidebar: false,
                varPath: 'partials/content/cisco-internal/channel-data-mgmt-be-mgmt-links.ejs',
                IconClass: 'Internal-icon'
            });
        });

    ciscoInternalRouter.route('/channel-data-mgmt/qual-code-mgmt-program')
        .get(function (req, res, next) {
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
                pageTitle: 'Territory Management',
                workspaceNav: workspaceNav,
                partnerBar: partnerBar,
                workspaces: workspaces,
                languageList: languageList,
                hasSidebar: false,
                varPath: 'partials/content/cisco-internal/channel-data-mgmt-qual-code-mgmt-program.ejs',
                IconClass: 'Internal-icon'
            });
        });

    ciscoInternalRouter.route('/direct-partners')
        .get(function (req, res, next) {
            res.render('ciscoInternalView', {
                title: 'Cisco Internal',
                titleLink: '/internal',
            pageTitle: 'Direct Partners',
            workspaceNav: workspaceNav,
            partnerBar: partnerBar,
            workspaces: workspaces,
            languageList: languageList,
                hasSidebar: false,
            varPath: 'partials/content/cisco-internal/direct-partners.ejs',
            IconClass: 'Internal-icon'
        });
    });

    return ciscoInternalRouter;
};
module.exports = router;
