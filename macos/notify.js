'use strict';
/* eslint-env applescript */
/* eslint-disable new-cap */

var showNode = function() {
  var term = Application('Terminal');
  if (!term.running()) return;

  for (var win of term.windows()) {
    for (var tab of win.tabs()) {
      if (!tab.processes().includes('node')) continue;

      tab.selected = true;
      win.frontmost = true;
      term.activate();

      return;
    }
  }
};

var app = Application.currentApplication();
app.includeStandardAdditions = true;

var withTitle = app.systemAttribute('TITLE');
var message = app.systemAttribute('MESSAGE');

if (withTitle || message) {
  app.displayNotification(message, {withTitle});
} else {
  showNode();
}
