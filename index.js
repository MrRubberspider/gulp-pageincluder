var through = require("through2"),
	gutil = require("gulp-util"),
	PluginError = gutil.PluginError;

module.exports = function (param) {
	"use strict";

	if (typeof param === 'undefined') {
		param = 'app'
	}

	function pageincluder(file, enc, callback) {

		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {
			this.emit("error",
				new PluginError("gulp-includer", "Stream content is not supported"));
			return callback();
		}

		if (file.isBuffer() && file.relative[0] != '_') {

			var fileContent = String(file.contents);
			var includedElements = getIncludedFilenames(fileContent);
			if(includedElements) fileContent = includeContent(fileContent,includedElements);
			file.contents = new Buffer(fileContent);

			this.push(file);

		}
		return callback();
	}

	function getIncludedFilenames(fileContent) {
		var pattern = /<!-- include [^ ]+ -->/g;
		var matches = fileContent.match(pattern);
		var includedElements = [];

			if(matches) {
				matches.forEach(function(element,index,array) {
				includedElements.push([element,element.replace('<!-- include ','').replace(' -->','')]);
			});
		}
		return includedElements;
	}

	function includeContent(fileContent,includedElements) {
		if(includedElements) {
			includedElements.forEach(function(element,index,array) {
				fileContent = fileContent.replace(element[0],getIncludedFileContent(element[1]));
			});
		}
		return fileContent;
	}

	function getIncludedFileContent(file) {
		var fs = require('fs');
		var data = fs.readFileSync(param + '/' + file);
		return data;
	}

	return through.obj(pageincluder);
};
