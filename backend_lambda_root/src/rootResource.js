exports.handler = async (event) => {
    var result = 
    {      
		'_links' : { 
			'featuresdescription': {
				'href' :'/sign/featuresdescription/'
			}     
        },

        'name': 'd.velop sign',
        'version': {
            'major': '0',
            'minor': '0',
            'micro': '1',
            'qualifier': 'none'
        }
    };


    const response = {
        statusCode: 200,
        headers: {
            'content-type':'application/hal+json'
        },
        body: JSON.stringify(result)
    };
    return response;
};