# native-notifier

Use native system notifications for MacOS, Win & Linux. No bullshit & no Growl.

```javascript
const notify = require('native-notifier');
notify({
  app: 'Loggy',
  icon: `${__dirname}/loggy.png`,
  message: 'TypeError: stack is shown',
  title: 'Loggy error'
});
```

![Screen Shot 2013-04-21 at 03 26 41](https://f.cloud.github.com/assets/574696/405855/2fe7271e-aa1a-11e2-8b85-347e71ac49f9.png)

# License

MIT
