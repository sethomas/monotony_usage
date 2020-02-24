import loadable from '@loadable/component'

import App from './App.jsx';

export default [{
	component: App,
	routes: [{
		path: '/',
		exact: true,
		component: () => 'home!'
	}, {
		path: '/testing',
		component: loadable(() => import('./Test.jsx'))
	}, {
		path: '/sdfsdf',
		component: () => 'sdfsdf!'
	}, {
		path: '/wr23',
		component: () => 'wr23!'
	}, {
		component: () => 'not found!'
	}]
}];
