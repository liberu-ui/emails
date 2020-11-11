import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./emails', false, /.*\.js$/));
const Router = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: '/emails',
    component: Router,
    meta: {
        breadcrumb: 'emails',
        route: 'emails.index',
    },
    children: routes,
};
