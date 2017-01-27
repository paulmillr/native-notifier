# native-notifier

Use native system notifications for MacOS, Win & Linux. No bullshit & no Growl.

```javascript
const notify = require('native-notifier');
notify({
  app: 'XCode',
  icon: `${__dirname}/xcode.png`,
  message: 'Software version is invalid',
  title: 'XCode error'
});
```

# License

MIT
