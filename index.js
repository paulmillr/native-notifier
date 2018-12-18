'use strict';
const os = require('os').platform();
const loadE = moduleName => require(moduleName);

// Load the appropriate notify function based on the platform.
const notifyFunc = (() => {
  switch (os) {
    case 'darwin': return loadE('./macos');
    case 'linux': return loadE('./linux');
    case 'win32': return loadE('./windows');
  }

  return () => {};
})();

// Export the notify function, but append a no-op error handler to silently
// ignore failed child process spawns of the underlying OS notifier.  This
// avoids uncaught exceptions that may occur if the expected OS notifier
// doesn't exist, for example.
module.exports = (opts) => {
  const child = notifyFunc(opts);
  child.on('error', () => {});
  return child;
};
