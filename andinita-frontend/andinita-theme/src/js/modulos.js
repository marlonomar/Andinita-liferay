var baseJS = './js';

		if(typeof Liferay !== 'undefined'){
			baseJS = '/o/andinita-theme/js';
		}

		var require = {
			baseUrl: baseJS,
			paths: {
				alert :baseJS+'/alert.js',
			}
        }
        
        var require_acc = require.paths;