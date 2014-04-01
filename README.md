# gulp-pageincluder

> page includer plugin for [gulp](https://github.com/wearefractal/gulp)

This is a file includer gulp plugin. You can include a file to an other easily.

## Usage

First, install `gulp-pageincluder` as a development dependency:

```shell
npm install --save-dev gulp-pageincluder
```

Then, add it to your `gulpfile.js`:

```javascript
var pageincluder = require("gulp-pageincluder");

gulp.src('app/templates/*')
	.pipe(pageincluder('app'))
	.pipe(gulp.dest('dist'));
```

Then, insert your file:

```html
<!-- include path/_filename.extension -->
```


## API

### includer(path)

#### path
Type: `String`  
Default: `app`

This path will be before your path/_filename.extension.

#### filename

If you only want to include a file and don't want to generate it, you can use '_' underscore before your file name and the program ignore it.

## License

Copyright (C) 2014 <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[MIT License](http://en.wikipedia.org/wiki/MIT_License)
