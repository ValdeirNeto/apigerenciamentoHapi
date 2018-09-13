'use strict';

const plugins = ['auth.js', 'database.js'];

const funcaoPlugin = (fileName) => (!plugins.some(v => fileName === v));
const filterCoreDirectories = (dirName) => ((dirName === 'modules'));

module.exports = {
  funcaoPlugin,
  filterCoreDirectories
};