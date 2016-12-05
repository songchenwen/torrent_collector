var p2pspider = require('p2pspider');
var request = require('request');

p2pspider({'port': process.env.SPIDER_PORT || 62333}, function(data){
	if (process.env.SPIDER_CALLBACK) {
		request.post('process.env.SPIDER_CALLBACK').form({info: JSON.stringify(data)})
	}
    console.log(data);
})
