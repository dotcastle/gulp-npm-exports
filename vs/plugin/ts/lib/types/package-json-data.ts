/**
 * The partial interface describing package.json
 * This is the only part we need from the json
 */
interface IPackageJsonData {
	/**
	 * List of dependencies is an object of string key/value pairs
	 */
	dependencies: { [key: string]: string };

	/**
	 * Main section directing this plugin
	 */
	npmExports: INpmExportsData;
}
