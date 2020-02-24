import Server from 'monotony/lib/Server';

import config from './monotony.config.js';

new Server({
	...config,
	attach: (app, log) => {
		app.use('/favicon.ico', (req, res) => {
			res.status(404).send('');
		});

		// do anything here, you have express
		app.use('/lol', (req, res, next) => {
			log.info('LOLOL')
			return res.send('LOLOLOL');
		});
	}
}).start();
