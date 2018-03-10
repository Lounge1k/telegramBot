module.exports = {
	apps: [{
	  name: 'telegram-bot',
	  script: './index.js'
	}],
	deploy: {
	  production: {
		user: 'ubuntu',
		host: 'ec2-18-197-196-123.eu-central-1.compute.amazonaws.com',
		key: '~/.ssh/key.pem',
		ref: 'origin/master',
		repo: 'https://github.com/Lounge1k/telegramBot.git',
		path: '/home/ubuntu/telegramBot',
		'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
	  }
	}
  }