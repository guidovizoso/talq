import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import serve from "rollup-plugin-serve";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import alias from "rollup-plugin-alias";

import pkg from "./package.json";
import path from "path";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/index.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement",
          "cloneElement",
          "createContext",
          "useRef",
          "useMemo"
        ],
        "node_modules/react-dom/index.js": ["render"],
        "node_modules/react-is/index.js": [
          "isElement",
          "isValidElementType",
          "ForwardRef"
        ]
      }
    }),
    alias({
      resolve: [".ts", ".js", ".tsx"],
      entries: [
        { find: "react", replacement: path.resolve("./node_modules/react") }
      ]
    }),
    serve({
      contentBase: ['lib'],})
  ],
  external: [
    ...Object.keys(pkg.peerDependencies),
    ...Object.keys(pkg.dependencies)
  ]
};
