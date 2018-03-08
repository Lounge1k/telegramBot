module.exports = {
	apps: [{
	  name: 'telegram-bot',
	  script: './index.js'
	}],
	deploy: {
	  production: {
		user: 'ubuntu',
		host: 'ec2-35-180-42-143.eu-west-3.compute.amazonaws.com',
		key: '~/.ssh/key.pem',
		ref: 'origin/master',
		repo: 'https://github.com/Lounge1k/telegramBot.git',
		path: '/telegram-bot',
		'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
	  }
	}
  }