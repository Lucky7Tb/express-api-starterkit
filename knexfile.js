require('dotenv').config();

module.exports = {
	development: {
		client: process.env.DB_DRIVER,
		connection: {
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'migrations',
			directory: './app/database/migrations',
		},
		seeds: {
			directory: './app/database/seeds',
		},	},
};
