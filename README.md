# gulp-npm-exports #
A JSON driven rule based file transfer plugin for Gulp. For detailed information and usage, please visit [gulp-npm-exports](http://www.dotcastle.com/blog/gulp-npm-exports "gulp-npm-exports") 

When working with web applications, [npm](https://www.npmjs.com/ "NPM") is often a preferred choice to maintain client-side dependencies. While npm maintains the dependencies effectively, you do not often need the complete distribution files in your web project. The few required files from each distribution package need to be transferred either manually or by writing tedious scripts to do the task.

Grunt has a plugin to do this - [grunt-bower-task](https://github.com/yatskevich/grunt-bower-task "grunt-bower-task"). It transfers the key files from bower distributions to the target directory based on the specified configuration.

Gulp has a similar plugin - [main-bower-files](https://github.com/ck86/main-bower-files "main-bower-files"). This will read your bower.json, iterate through your dependencies and returns an array of files defined in the main property of the packages bower.json.

This plugin **gulp-npm-exports**, however provides a different approach to transfer the required files from your npm distributions to the target. The plugin is developed using TypeScript on Visual Studio 2015 and as such is easy to understand if you have worked with TypeScript earlier.

## Primary features ##
1. Simple JSON structure to describe the export tasks
2. Define simple rules that can be referenced in the export tasks
	- Source selection rule - Select source files using node glob patterns
	- Filter rule - Filter out from the selected sources
	- Rename rule - Rename parts of the file name (same as gulp-rename)
	- Replace Content rule - Replace file contents with regex search/replace
	- Move - Specify target locations to move the files
3. Export tasks composed using the inline or defined rules
4. JSON schema to help in editing the export configuration file

## Install ##
    $ npm install --save-dev gulp-npm-exports

## Usage ##
    var gulp = require('gulp');
    var npmExports = require('gulp-npm-exports');

    gulp.task('default', function () {
	    return gulp.src('package.json')
    		.pipe(npmExports({ exportsJsonFilePath: 'npm-exports.json' }))
    		.pipe(gulp.dest('wwwroot'));
    });

## API ##
### npmExports(options) ###

#### options.exportsJsonFilePath ####
**Type**: string  
**Required**: false  
**Default**: null  
**Description**: External json file containing the exports section. If not specified, the exports section is expected to be present in the package.json file with the property name "npmExports"

#### options.logLevel ####
**Type**: number | string  
**Required**: false  
**Default**: 2 | 'Warning'  
**Description**: Minimum log level to emit during the build process (0 => Debug, 1 => Information, 2 => Warning, 3 => Success, 4 => Error)

## License ##
MIT © [DotCastle TechnoSolutions Private Limited, INDIA](http://www.dotcastle.com "DotCastle TechnoSolutions Private Limited, INDIA")
