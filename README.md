# mdtab
Markdown Editing-Previewing Tabarea Web Component
## demo
[here](https://titansnow.github.io/mdtab/docs/demo.html)
## usage
```HTML
<link rel="stylesheet" href="pathto/codemirror/lib/codemirror.css"/>
<link rel="stylesheet" href="pathto/github.min.css"/>
<link rel="stylesheet" href="pathto/github-markdown.css"/>
<link rel="stylesheet" href="pathto/mdtab.css"/>
<script src="pathto/codemirror/lib/codemirror.js"></script>
<script src="pathto/codemirror/mode/clike/clike.js"></script>
<script src="pathto/codemirror/mode/coffeescript/coffeescript.js"></script>
<script src="pathto/codemirror/mode/css/css.js"></script>
<script src="pathto/codemirror/mode/diff/diff.js"></script>
<script src="pathto/codemirror/mode/gfm/gfm.js"></script>
<script src="pathto/codemirror/mode/htmlmixed/htmlmixed.js"></script>
<script src="pathto/codemirror/mode/http/http.js"></script>
<script src="pathto/codemirror/mode/javascript/javascript.js"></script>
<script src="pathto/codemirror/mode/markdown/markdown.js"></script>
<script src="pathto/codemirror/mode/nginx/nginx.js"></script>
<script src="pathto/codemirror/mode/pascal/pascal.js"></script>
<script src="pathto/codemirror/mode/perl/perl.js"></script>
<script src="pathto/codemirror/mode/php/php.js"></script>
<script src="pathto/codemirror/mode/python/python.js"></script>
<script src="pathto/codemirror/mode/ruby/ruby.js"></script>
<script src="pathto/codemirror/mode/sql/sql.js"></script>
<script src="pathto/codemirror/mode/xml/xml.js"></script>
<!--add more languages you need-->
<script src="pathto/codemirror/addon/mode/overlay.js"></script>
<script src="pathto/marked.js"></script>
<script src="pathto/highlight.min.js"></script>
<script src="pathto/mdtab.js"></script>
<!--here your script-->
<script>
var tab=mdtab( /*width*/ , /*height*/ )
/*fatherNode*/.appendChild(tab.element)
</script>
```
## interface
* <code>mdtab(*width*, *height*)</code>
  - create a mdtab struct with width & height
  * return value - a mdtab struct
    * <code>element</code>
      - the element holding things. add it to DOM tree to show mdtab
    * <code>editor</code>
      - the CodeMirror editor using in mdtab
    * <code>getMD()</code>
      - get the Markdown text value
    * <code>getHTML()</code>
      - get the rendered HTML value
    * <code>setSize(*width*, *height*)</code>
      - set the new size

> written with mdtab
