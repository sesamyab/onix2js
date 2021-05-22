This library is used to parse a ONIX 3.0 files to a json file with books metadata.

The implementation of the xml nodes is not complete, but added as they are needed. If there's some node that isn't currently available just open a issue with the xml snippet you need to support.

The codelists are genereated based on the json-documentation and new versions can be easily generated.

### Installation

```
$ npm install onix2js
```

### How to use it?

```js or ts
const Onix = require("onix2js");

const onixJson = Onix.parse("<ONIXMessage ... />");
```
