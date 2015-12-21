var LogType = require('./types/log-type');
/**
 * Constants
 */
var Constants = (function () {
    function Constants() {
    }
    Constants.isDebug = true;
    Constants.logLevel = LogType.Warning;
    Constants.pluginName = 'gulp-npm-exports';
    Constants.mainSrcToken = '#main#';
    Constants.mainSrcTokenRegex = /^#main#$/g;
    Constants.packageNameToken = "#package#";
    Constants.packageNameTokenRegex = /#package#/g;
    Constants.transformStreamReadableHighWaterMark = 64;
    return Constants;
})();
module.exports = Constants;
