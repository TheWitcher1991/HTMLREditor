<h1 align="center">
    HTMLREDitor <i href="http://travis-ci.org/yiisoft/yii" rel="nofollow"><img src="https://camo.githubusercontent.com/b9eed55271c635b614af35b77881928b9df6f0fb/68747470733a2f2f7365637572652e7472617669732d63692e6f72672f796969736f66742f7969692e706e67" alt="Build Status" data-canonical-src="https://secure.travis-ci.org/yiisoft/yii.png" style="max-width:100%;"></i>
</h1>


**HTMLREditor is a modern rich text editor built for compatibility and extensibility.**

## Installation

```bash
$ git clone https://github.com/TheWitcher1991/HTMLREditor
$ cd HTMLREditor
$ npm install
```

## Build 

```bash
$ npm run build
```

## Quickstart
```html
<!-- Create the toolbar and editor container  -->
<div id="#editor"></div>

<!-- Include the HTMLREditor library -->
<script src="${DIRNAME}/build/editor.min.js"></script>

<!-- Initialize HTMLREditor editor -->
<script>
    HTMLREditor
            .register('#editor')
            .catch(err => console.error(err));
</script>
```

Or can using ES6 import. 

```html
<!-- Create the toolbar and editor container  -->
<div id="#editor"></div>

<!-- Initialize HTMLREditor editor -->
<script type="module">
    import HTMLREditor from '${DIRNAME}/src/core/HTMLREditor.js';
    
    HTMLREditor
            .register('#editor')
            .catch(err => console.error(err));
</script>
```
