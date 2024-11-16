# soil-ts

一个基于 lodash 构建的 Ae 脚本开发工具库

```
- dist
- node_modules
  - ...
  - soil-ts
  - ...
- src
  - index.tsx
package.json
rollup.config.mjs
tsconfig.json
```

package.json

```json
{
  "scripts": {
    "build": "rollup -c"
  },
  "devDependencies": {
    "soil-ts": "*",
    "@rollup/plugin-terser": "*",
    "@rollup/plugin-typescript": "*",
    "rollup": "*",
    "tslib": "*"
  }
}
```

```powershell
npm install
```

index.tsx

```typescript
import * as _ from "soil-ts";

let activeItem = _.getActiveComp();

if (activeItem) {
    alert(activeItem.name);
}
```

tsconfig.json

```json
{
    "compilerOptions": {
        // The following are necessary compilation options
		"jsx": "preserve",
		"noLib": true,
		"types": ["types-for-adobe/AfterEffects/23.0"]
    }
}
```

rollup.config.mjs

```js
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
    input: "src/index.tsx",
    output: [
        {
            file: "dist/script.jsx", // Configure your script name here.
            intro: "(function () {",
            outro: "}).call(this);",
            plugins: [
                terser({
                    compress: false,
                    mangle: false,
                    format: {
                        beautify: true,
                        braces: true,
                        comments: false,
                        keep_quoted_props: true,
                        keep_numbers: true,
                        preamble: `// ${new Date().toLocaleString()}`,
                        wrap_func_args: false,
                    },
                }),
            ],
        },
        {
            file: "dist/script.min.jsx", 
            intro: "(function () {",
            outro: "}).call(this);",
            plugins: [
                terser({
                    compress: {
                        arrows: false,
                        arguments: true,
                        booleans: false,
                        conditionals: false,
                        evaluate: false,
                        join_vars: false,
                        keep_infinity: true,
                        sequences: false,
                        toplevel: true,
                    },
                    format: {
                        braces: true,
                    },
                }),
            ],
        },
    ],
    treeshake: {
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
    },
    plugins: [typescript()],
    context: "this",
};
```

build

```powershell
npm run build
```

output

```
- dist
  - script.jsx // The packaged script can be run directly in After Effects.
  - script.min.jsx // compressed version.
- node_modules
  - ...
  - soil-ts
  - ...
- src
  - index.tsx
package.json
rollup.config.mjs
tsconfig.json
```

script.jsx

```jsx
(function() {
    function createIsNativeType(nativeObject) {
        return function(value) {
            return value != null && value instanceof nativeObject;
        };
    }
    var isCompItem = createIsNativeType(CompItem);
    function getActiveItem() {
        return app.project.activeItem;
    }
    function getActiveComp() {
        var item = getActiveItem();
        return isCompItem(item) ? item : undefined;
    }
    var activeItem = getActiveComp();
    if (activeItem) {
        alert(activeItem.name);
    }
}).call(this);
```
