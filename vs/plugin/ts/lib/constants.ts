import LogType = require('./types/log-type');

/**
 * Constants
 */
class Constants {
	public static isDebug: boolean = true;
	public static logLevel: LogType = LogType.Warning;
	public static pluginName: string = 'gulp-npm-exports';
	public static mainSrcToken: string = '#main#';
	public static mainSrcTokenRegex: RegExp = /^#main#$/g;
	public static packageNameToken: string = "#package#";
	public static packageNameTokenRegex: RegExp = /#package#/g;
	public static transformStreamReadableHighWaterMark: number = 64;
}
export = Constants;