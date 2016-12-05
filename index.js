var p2pspider = require('p2pspider');
var request = require('request');

DHT_NODES = [['tracker.openbittorrent.com', 80],
             ['tracker.openbittorrent.com', 80],
             ['tr.cili001.com', 6666],
             ['tracker.publicbt.com', 80],
             ['open.demonii.com', 1337],
             ['tracker.opentrackr.org', 1337],
             ['tr.cili001.com', 6666],
             ['router.bittorrent.com', 6881], 
             ['dht.transmissionbt.com', 6881]];

if (process.env.SPIDER_CALLBACK) {
	console.log('callback ' + process.env.SPIDER_CALLBACK);
}

p2pspider({'port': process.env.SPIDER_PORT || 62333, 
	'nodesMaxSize': 1000,
    'bootstrapNodes': DHT_NODES}, function(data){
    console.log(data);
	if (process.env.SPIDER_CALLBACK) {
		request.post(process.env.SPIDER_CALLBACK).form({info: JSON.stringify(data)});
	}
});
