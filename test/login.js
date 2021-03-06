'use strict';

require('./common/init');

var assert = require('assert');
var storage = require('./common/dynamo_storage') || require('./common/storage_mock');
var Accounts = require('../lib')(storage);
var App = Accounts.app('123456cihurehgiuehnrugivenrio');

describe('Login', function() {
	it('should login with provider', function() {
		return App.login('social', {
			id: '21312423',
			provider: 'google',
			username: 'Ion',
			emails: [{ value: 'email@mail.com' }]
		}).then(function(userId) {
			assert.ok(userId);
			// return App.users.getById(userId)
			// 	.then(function(user) {
			// 		assert.equal('ion', user.username);
			// 	});
		});
	});
});
