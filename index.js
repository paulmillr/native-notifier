'use strict';
const os = require('os').platform();
const loadE = moduleName => require(moduleName).on('error', () => {});

module.exports = (() => {
  switch (os) {
    case 'darwin': return loadE('./macos');
    case 'linux': return loadE('./linux');
    case 'win32': return loadE('./windows');
  }

  return () => {};
})();
