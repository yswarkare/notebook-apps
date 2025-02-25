# Dependencies

## create a react app with vite

```nodejs
pnpm create vite@latest notes-app
```

## install tailwind css

Install `tailwindcss` and its peer dependencies.

```nodejs
pnpm add -D tailwindcss postcss autoprefixer
```

### create tailwind.config.ts file

generate your `tailwind.config.js` and `postcss.config.js` files.

```nodejs
pnpm dlx tailwindcss init -p
```

### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.

```css file='index.css'
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Install daisyUI as a Node package

```nodejs
pnpm add -D daisyui@latest
```

### Add daisyUI to tailwind.config.js

common.js

```js
module.exports = {
  //...
  plugins: [
    require('daisyui'),
  ],
}
```

ESM

```js
import daisyui from "daisyui"
module.exports = {
  //...
  plugins: [
    daisyui,
  ],
}
```

## Other dependencies

- @hookform/resolvers
- axios
- bootstrap-icons
- react-hook-form
- react-router-dom
- react-toastify
- yup

```node
pnpm add @hookform/resolvers axios bootstrap-icons react-hook-form react-router-dom react-toastify yup
```

## dependencies for markdown editor

- @uiw/react-md-editor
- rehype-sanitize

```nodejs
pnpm add pnpm add@uiw/react-md-editor rehype-sanitize
```

## dependencies for markdown viewer

- @mdit/plugin-alert
- @mdit/plugin-attrs
- @mdit/plugin-img-lazyload
- @mdit/plugin-img-size
- @mdit/plugin-stylize
- highlight.js
- markdown-it
- markdown-it-anchor
- markdown-it-container
- markdown-it-emoji
- markdown-it-footnote
- markdown-it-hashtag
- markdown-it-headinganchor
- markdown-it-headings
- markdown-it-highlightjs
- markdown-it-task-checkbox

```node
pnpm add @mdit/plugin-alert @mdit/plugin-attrs @mdit/plugin-img-lazyload @mdit/plugin-img-size @mdit/plugin-stylize highlight.js markdown-it markdown-it-anchor markdown-it-container markdown-it-emoji markdown-it-footnote markdown-it-hashtag markdown-it-headinganchor markdown-it-headings markdown-it-highlightjs markdown-it-task-checkbox
```

### add following dependencies

- yw-hooks
- yw-icons

```node
pnpm add yw-icons@https://github.com/yswarkare/yw-icons.git yw-hooks@https://github.com/yswarkare/yw-hooks.git
```

and

- yw-daisyui

```dotnetcli
pnpm add yw-icons@https://github.com/yswarkare/yw-icons.git
```
