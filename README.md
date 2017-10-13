babel codemod example
---

This is a stupid simple [babel-codemod](https://github.com/square/babel-codemod) example that transforms `let fs = require('fs')` to `const fs = require('fs')`

```
npm i

npm t

# given that codemod is available globally

codemod -p /path/to/module/dir/index.js <glob of sources to modify>
```

Why?
---

I wanted to play around with `babel-codemod`


Testing
---

The homebrewed test setup uses [ava](https://github.com/avajs/ava) and a flat `test/fixtures/name.js`/`test/fixtures/name.expected`. Please feel free to let me know if there's a slicker/faster way to do this.
