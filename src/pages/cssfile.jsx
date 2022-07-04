const Cssfile = () => {
  return (
    <div>
      <div>
        <h6>CSS Selectors</h6>
        <p>CSS selectors are used to "find" (or select) the HTML elements to style.
          We can divide CSS selectors into five categories:<br />
          <strong>Simple selectors</strong> (select elements based on name, id, class)<br />
          <strong>Combinator selectors</strong> (select elements based on a specific relationship between them)<br />
          <strong>Pseudo-class selectors</strong> (select elements based on a certain state)<br />
          <strong>Pseudo-elements selectors</strong> (select and style a part of an element)<br />
          <strong>Attribute selectors</strong> (select elements based on an attribute or attribute value)</p>
      </div>

      <div>
        <h6>CSS Background Properties</h6>
        <p><small><mark> background-color / image / repeat / atachment / position / size / origin / clip, background
        </mark></small></p>
      </div>

      <div>
        <h6>CSS Border Properties</h6>
        <p><small><mark> border-style, border-width, border-color, border-top / right / botom / left - style / color / width, border: width style color, border-top / right / bottom / left, border-image, border-image - source/ slice /width /outset /repeat. </mark></small></p>
      </div>

      <div>
        <h6>Text formatting Properties</h6>
        <p><small><mark> color, text-align, vertical-align, text-decoration, text-transform, text-indent, text-overflow, letter-spacing, line-height, word-spacing, word-wrap, word-break, writing-mode,  white-space, text-shadow, box-shadow </mark></small></p>
      </div>

      <div>
        <h6>CSS Transform</h6>
        <p> CSS transforms allow you to move, rotate, scale, and skew elements. <small><mark> transform: translate(x-axis,y-axis) /rotate(angle) /scale(w, h) /skew(angle) /matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())</mark></small></p>
      </div>

      <div>
        <h6>CSS Transition</h6>
        <p> CSS transitions allows you to change property values smoothly, over a given duration. <small><mark> transition transition-delay, transition-duration, transition-property, transition-timing-function</mark></small></p>
      </div>

      <div>
        <h6>CSS3 modules</h6>
        <p>CSS3 is collaboration of CSS2 specifications and new specifications, we can called this collaboration is module. Selectors, Box Model, Backgrounds, Image Values and Replaced Content, Text Effects, 2D Transformations, 3D Transformations, Animations, Multiple Column Layout, User Interface</p>
      </div>

      <div>
        <h6>Tweening</h6>
        <p>Tweening is the process in which we create intermediate frames between two images to get the appearance of the first image which develops into the second image. It used for creating animation.</p>
      </div>

      <div>
        <h6>!important declaration</h6>
        <p>Important declarations has more importance than the normal declaration. While executing, these declarations override the declaration which is having less importance.</p>
      </div>

      <div>
        <h6>Inheritance in CSS</h6>
        <p>It is used in CSS to define the hierarchy from the top level to the bottom level. Inherited properties can be overridden by the children class if the child uses the same name.</p>
      </div>

      <div>
        <h6>Ruleset</h6>
        <p>The ruleset is used to identify that selectors can be attached with other selectors. It has two parts: <br /> <strong>Selector - </strong>  indicates the HTML element want to style. <br />
          <strong>Declaration Block - </strong>contain one or more declarations separated by a semicolon.</p>
      </div>

      <div>
        <h6>How do you handle browser differences in your user base?</h6>
        <p>sometimes differet browsers support certain css features others don’t or display them differently. The
          <small> <mark>@supports</mark> </small> CSS at-rule specify declarations that depend on a browser's support for one or more specific CSS features. This is called a feature query. So, mostly use fallback styles as a backup.</p>
      </div>

      <div>
        <h6> Can I specify fractional weight values such as 670 or 973 for font weight?</h6>
        <p>Implementation largely depends on the browser, but the standard does not support fractional weight values. Acceptable values must end with two zeroes.</p>
      </div>

      <div>
        <h6> What is file splitting and why should you use it?</h6>
        <p>File splitting helps organize our CSS into multiple files. It decreases page load time and makes things easy to manage. It can be useful to separate files by component. ex. button styles in a file called _buttons.scss, header-specific styles in a file called _header.scss, main file, say _app.scss, we can import those files by writing <small> <mark>@import</mark></small>. To avoid any overriding rules <small> <mark> @import </mark> </small>is only at the top.</p>
      </div>

      <div>
        <h6> What are web safe fonts and fallback fonts?</h6>
        <p>Web safe fonts are fonts that are pre-installed on many computer systems. In case the browser or OS doesn’t recognize the first font we set, we should choose a web safe fallback font to display, followed by a generic font family. If our fallback font doesn’t display either, the browser can pick a generic font in the <small><mark> sans-serif </mark></small> family.</p>
      </div>

      <div>
        <h6>Split screen in two parts without using bootstrap?</h6>
        <p>We can split the screen in two parts by using <small> <mark> width </mark></small> property having <small> <mark> 50% </mark></small> of relative width.</p>
      </div>

      <div>
        <h6>Box sizing</h6>
        <p>The CSS box-sizing property allows us to include the padding and border in an element's total <small> <mark> width </mark></small> and <small> <mark> height </mark></small>.</p>
      </div>

      <div>
        <h6>Box Model</h6>
        <p>All HTML elements can be considered as boxes. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. When we set the <small> <mark> width </mark></small> and <small> <mark> height </mark></small> properties of an element with CSS, we just set the <small> <mark> width </mark></small> and <small> <mark> height </mark></small> of the content area. To calculate the full size of an element, we must also add <small> <mark> padding </mark></small>, <small> <mark> border </mark></small>, and <small> <mark> margin. </mark></small></p>
      </div>

      <div>
        <h6>Combinators</h6>
        <p>A combinator is something that explains the relationship between the selectors.<br />
          <strong>descendant selector (space) - </strong>The descendant selector matches all elements that are descendants of a specified element.<br /><strong>child selector (&gt;) -  </strong>The child selector selects all elements that are the children of a specified element.<br />
          <strong>adjacent sibling selector (+) -  </strong>The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element. Sibling elements must have the same parent element, and "adjacent" means "immediately following".<br />
          <strong>general sibling selector (~) -  </strong>The general sibling selector selects all elements that are siblings of a specified element.</p>
      </div>

      <div>
        <h6>Universal  <small> * </small> and <small> body </small> selector</h6>
        <p>
          <small> <mark> *</mark> </small> - used to match any element type. It covers all the elements in page. <br />
          <small> <mark> body </mark></small>  - used for inheritence purpose. </p>
      </div>

      <div>
        <h6>How to align <small>  &lt;div&gt; </small> which is another <small>  &lt;div&gt; </small> to center</h6>
        <p>By using <small> <mark> position, top, left, transform:translate(-50%,-50%) </mark> </small> properties</p>
      </div>

      <div>
        <h6>class selector for particular element</h6>
        <p>yes,  like <small> <mark>h1.className&#123; &#125;</mark> </small></p>
      </div>

      <div>
        <h6>remove extra white space underneath an image</h6>
        <p>use <small><mark>display</mark></small> property</p>
      </div>

      <div>
        <h6>remove dotted line around the link or linked images</h6>
        <p>use <small> <mark>outline</mark> </small> property</p>
      </div>

      <div>
        <h6>Vendor Prefixes</h6>
        <p>added prefixes to experimental or non standard css properties. like <small> <mark> -webkit(chrome,safary), -moz(mozilla), -ms(IE), -o(opera) </mark> </small></p>
      </div>

      <div>
        <h6>CSS visual formatting model</h6>
        <p>It is an algorithm used to process the documents for visual media. Each element in the document tree generate zero or more boxes according to the box model.</p>
      </div>

      <div>
        <h6>Different Properties</h6>
        <p>
          <small><mark>position: static</mark></small> - elements are positioned static by default. Static positioned elements are not affected by the top, bottom, left, and right properties. <br />

          <small><mark>position: relative</mark></small> - element is positioned relative to its normal position.<br />

          <small><mark>position: absolute</mark></small> - element is positioned relative to the nearest positioned ancestor <br />

          <small><mark>position: fixed</mark></small> - element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. <br />

          <small><mark>position: sticky</mark></small> - element is positioned based on the user's scroll position.<br />

          <small><mark>display: block</mark></small> - block level elemetns always starts in a new line and takes up the full width available. <small> <mark>&lt;div&gt; &lt;p&gt; &lt;form&gt; &lt;h1&gt; &lt;header&gt; &lt;footer&gt; &lt;section&gt;</mark> </small> etc. <br />

          <small><mark>display: inline</mark></small> - Inline element does not start with new line and only takes up width as much only necessry. <small> <mark>&lt;span&gt; &lt;a&gt;</mark> </small><br />

          <small><mark>display: inline-block</mark></small> - As compare to inline we can set height and width and compare to block not added line break. <br />

          <small><mark>display: flex</mark></small> - The Flexible Box Layout Module, makes it easy to design flexible responsive layout structure without using float or position. This property sets the flexible length on flexible items.<br />

          <small><mark>background-size: contain</mark></small> - scales the background image to be as large as possible (but both its width and its height must fit inside the content area).<br />

          <small><mark>background-size: cover</mark></small> - scales the background image so that the content area is completely covered by the background image (both its width and height are equal to or exceed the content area).<br />

          <small><mark>backface-visibility: visible | hidden | initial | inherit</mark></small> - defines whether or not the back face of an element should be visible when facing the user. also 3d flipping effect on mouse hover.<br />

          <small><mark>preload=auto | metadata | none</mark></small> - Specifies that if and how the media file should be loaded when the page loads. It is ignored if <small><mark>autoplay</mark></small> is present. It can be used on <small> <mark>&lt;audio&gt;</mark> </small> and <small> <mark>&lt;video&gt;</mark> </small><br />

          <small><mark>pointer-events: auto|none</mark></small> - defines whether or not an element reacts to pointer events. also disable a link.<br />

          <small><mark>width: auto</mark></small> - It reaches to the full width and it will subtract borders, paddings, margins etc from the available space.<br />

          <small><mark>width: 100%</mark></small> - It forces the element as wide as its parent element and will add additional spacing.

        </p>
      </div>

      <div>
        <h6>SASS</h6>
        <p> Sass stands for Syntactically Awesome Stylesheet. It is a CSS pre-processor. It reduces repetition of CSS and therefore saves time. Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff. fpr Browser understanding need a Sass pre-processor(transpiler) which converts Sass to standard CSS.
          - Sass files has the ".scss" or ".sass"file extension<br />
          - <small> <mark>$variablename: value;</mark> </small> value will be strings, numbers, colors, booleans, lists, nulls<br />
          - The default behavior for variable scope can be overridden by using the !global switch<br />
          - Sass lets you nest CSS selectors in the same way as HTML<br />
          - Sass properties also nested like <small> <mark>font: &#123;size:'30px'; weight:'bold'&#125;</mark> </small><br />
          - Sass also supports the <small> <mark>@import</mark> </small> directive.
          No need to add file extension. ex. <small> <mark>@import filename;</mark> </small><br />
          - If filename save with an underscore append, Sass will not transpile it<br />
          - The <small> <mark>@mixin</mark> </small> directive create CSS code that is to be reused throughout the website. A mixin can also include other mixins. Mixins accept arguments, can pass variables to a mixin. ex. <small> <mark>@mixin name &#123;property: value; ...&#125;</mark> </small><br />
          - The <small> <mark>@include</mark> </small> directive is used to include a mixin. ex. <small><mark>selector &#123; @include mixin-name; property: value; ....&#125;</mark> </small><br />
          - The <small> <mark>@extend</mark> </small> directive share a set of CSS properties from one selector to another. ex. <small> <mark> classname &#123; @extend .another_classname; property:value, ...&#125;</mark> </small><br />
          - Install SASS in react project. <br />
          <small> <mark> npm i --save-dev node-sass</mark></small> OR <small> <mark> npm i -S node-sass</mark></small>Create SASS file and import. OR <br />
          install extension 'sass' and 'Live Sass Compiler' in VS Code. Create SASS file. compiler will generate .CSS file and import in App. Can import one scss to anothe scss.</p>
      </div>

      <div>
        <h6>Bootstrap 4 width property values.</h6>
        <p>The <small><mark>width</mark></small> can be set as a specific size (<small> <mark> px, pt, cm, em</mark></small> etc) or by using one of the three pre-defined values: <small> <mark> thin, medium, thick</mark></small></p>
      </div>

      <div>
        <h6>Bootstrap 4 </h6>
        <p>It is css framework for developing responsive, mobile-first websites. Bootstrap's grid system is built with flexbox and allows up to 12 columns across the page.</p>
      </div>

      <div>
        <h6>CSS Variables </h6>
        <p>:root &#123; --main-color: #f4ff4; &#125; <br />
          body &#123; background-color: var(--main-color) &#125;</p>
      </div>
      <div>
        <h6>Viewport Height and Width</h6>
        <p>height: 50vh. Height half of the page<br />
          body &#123; background-color: var(--main-color) &#125;</p>
      </div>

      <div>
        <a href="https://www.w3schools.com/css/css3_gradients.asp"
          className="btn btn-link" target="_blank" rel="noopener noreferrer">Gradient</a>
        <a href="https://www.w3schools.com/css/css_specificity.asp"
          className="btn btn-link" target="_blank" rel="noopener noreferrer" >Specificity</a>
        <a href="https://www.w3schools.com/css/css3_animations.asp"
          className="btn btn-link" target="_blank" rel="noopener noreferrer" >Animation</a>
        <a href="https://www.w3schools.com/css/css_units.asp"
          className="btn btn-link" target="_blank" rel="noopener noreferrer" >CSS Units</a>
        <a href="https://www.w3schools.com/css/css_pseudo_elements.asp"
          className="btn btn-link" target="_blank" rel="noopener noreferrer" >Pseudo class and element</a>
        <a href="https://www.w3schools.com/css/css3_flexbox.asp"
          className="btn btn-link" target="_blank" rel="noopener noreferrer" >Flexbox</a>
        <a href="https://www.w3schools.com/css/css_grid.asp"
          className="btn btn-link" target="_blank" rel="noopener noreferrer" >Grid</a>
        <a href="https://www.w3schools.com/bootstrap4/bootstrap_utilities.asp"
          className="btn btn-link" target="_blank" rel="noopener noreferrer" >Bootstrap 4 Utility</a>
        <a href="https://www.w3schools.com/bootstrap4/bootstrap_flex.asp"
          className="btn btn-link" target="_blank" rel="noopener noreferrer" >Bootstrap 4 Flex</a>
        <a href="https://www.w3schools.com/bootstrap4/bootstrap_media_objects.asp"
          className="btn btn-link" target="_blank" rel="noopener noreferrer" >Bootstrap 4 Media object</a>
        <a href="https://www.w3schools.com/bootstrap4/bootstrap_grid_system.asp"
          className="btn btn-link" target="_blank" rel="noopener noreferrer" >Bootstrap 4 Grid</a>
        <a href="https://www.tutorialspoint.com/bootstrap4/bootstrap4_differences_between_bootstrap_3_and_4.htm" className="btn btn-link" target="_blank" rel="noopener noreferrer" >Bootstrap 3 and 4 Difference</a>
      </div>
    </div >
  )
}

export default Cssfile
