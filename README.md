# @ds82/openhab 

This is a helper library with the goal to extend and improve the default openhab3 javascript rule syntax.

## Install

Switch to the `conf/automation/js/` folder of openhab3 and install this library using `npm`:

```
npm install @ds82/openhab@beta
```

## Usage

After successful installation you can start writing rules using this library.

```ts
// js/test.js

const {
  addRule,
  timeTrigger,
  forceOn,
} = require("@ds82/openhab");


addRule(
  "Dim lights at 19.30",
  function () {
    forceOn("Upstairs_Floor_Nightmode");
  },
  [timeTrigger("0 30 19 ? * *")]
);

```


## Documentation

Find the documentation of this library at [https://ds82.github.io/openhab/index.html](https://ds82.github.io/openhab/index.html)


