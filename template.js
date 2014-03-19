/*** Licensed under the MIT License ***/
'use strict';

// Template Description
exports.description = 'Bootstrap 3.1.1 Starter Installation';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Customise the starter folder. Choose what assets to include or not.';

// Template-specific notes to be displayed after the question prompts.
exports.after = 'In this template you only have the Bootstrap 3.1.1 assets and no Grunt plugins are included. I currently use Brackets that does all the minification and compiling for me. Visit my site: http://www.eridesigns.com.au if you have any question.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template
exports.template = function (grunt, init, done) {
	init.process({}, [
		// Prompt values
        
        {
			name   : 'index_template',
			message: 'Do you want a index.html file? [Y/n]',
			default: 'y'
		}
        
	    ],
	    
	    function (err, props) {
		props.keywords = [];
		props.version = '0.1.0';
		props.devDependencies = {
			'grunt'                : '~0.4.1'
		};
	    
		// Files to copy and process
		var files = init.filesToCopy(props);
	    
		// Including index.html 
		if (props.index_template == "N") {
			delete files[ 'index.html'];
		}

		console.log(files);
		
		// The line below copies all the files from root to your choosen folder
		init.copyAndProcess(files, props);
		
		// Done!
		done();
	});
};