"use strict";

var fs = require("fs"),
	es = require("event-stream"),
	should = require("should");

require("mocha");

delete require.cache[require.resolve("../")];

var gutil = require("gulp-util"),
	pageincluder = require("../");

describe("gulp-includer", function () {

	var expectedFile = new gutil.File({
		path: "test/expected/index.html",
		cwd: "test/",
		base: "test/expected",
		contents: fs.readFileSync("test/expected/index.html")
	});

	it("should produce expected file via buffer", function (done) {

		var srcFile = new gutil.File({
			path: "test/fixtures/index.html",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.readFileSync("test/fixtures/index.html")
		});

		var stream = pageincluder('test/fixtures');

		stream.on("error", function(err) {
			should.exist(err);
			done(err);
		});

		stream.on("data", function (newFile) {

			should.exist(newFile);
			should.exist(newFile.contents);

			String(newFile.contents).should.equal(String(expectedFile.contents));

			done();
		});

		stream.write(srcFile);
		stream.end();
	});
});
