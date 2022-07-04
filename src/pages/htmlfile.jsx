const Htmlfile = () => {
  return (
    <div>
      <div>
        <h6>Application Cache</h6>
        <p>The web application is cached, It can prefetch pages that have not been visited at all. Advantages are speed up the site's performance, offline browsing and reduced server load.</p>
      </div>

      <div>
        <h6>Browser Cache</h6>
        <p>The web browser cache, It store a copy of visited pages and then using that copy to render when we re-visit that page.</p>
      </div>

      <div>
        <h6>What happens when type <small> www.google.com </small></h6>
        <p>Browser first check cache and if not in cache then find in Domain Name Server (DNS) to match an IP address. Browser initiates a TCP connection with the server and sends an HTTP request. Server like Apache, IIS handles the incoming request and send back an HTTP response. Now Browser begins rendering the HTML on the page while requesting any additional resources such as CSS, JavaScript, images, etc. Each subsequent request completes a request/response cycle and is rendered in turn by the browser. once the page is loaded browser sends asynchronous requests as needed</p>
      </div>

      <div>
        <h6>Access Element inside <small><mark>&lt;iframe&gt;</mark></small></h6>
        <p>The <small><mark>&lt;iframe&gt;</mark></small> specifies an inline frame which is used to embed another document within the current HTML document. we can access iframe element using Javscript. <br />
          <samp>
            var iframe = document.getElementById("myFrame");<br />
            var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];<br />
            elmnt.style.display = "none";
          </samp></p>

      </div>

      <div>
        <h6>Explain following Tags</h6>
        <p>
          <small> <mark> &lt;div&gt;</mark></small> - It is block level element it accupies full width as browser.<br />
          <small><mark> &lt;span&gt;</mark></small> - It is inline element. not special effect. takes width as it want.<br />
          <small><mark> &lt;cite&gt;</mark></small> - It defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.). <br />
          <small><mark> &lt;figure&gt;</mark></small> - Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.<br />
          <small><mark> &lt;figcaption&gt;</mark></small> - element can be placed as the first or as the last child of a <small> <mark> &lt;figure&gt; </mark> </small> element.<br />
          <small> <mark> &lt;object&gt;</mark></small> - It was designed to embed plug-ins (like Java applets, PDF readers, and Flash Players) in web pages, but can also be used to include HTML in HTML. use <small><mark> data </mark></small> attribute. alternate is <small> <mark> &lt;embed&gt;</mark></small> which has no clcosing tag. use <small><mark>src</mark></small> attribute.
        </p>
      </div>

      <div>
        <h6>Change orders like <small> &lt;body&gt;&lt;footer&gt;&lt;/footer&gt;&lt;header&gt;&lt;/header&gt;&lt;/body&gt; </small></h6>
        <p>Each semantic elements has common display property having value as block. So it acts exactly like <small> <mark> &lt;div&gt; </mark></small> so above code renders regular way. </p>
      </div>

      <div>
        <h6>Entities</h6>
        <p>The less than (&lt;) or greater than (&gt;) signs in text, the browser might mix them with tags. Character entities are used to display reserved characters in HTML. A character entity looks like this: <small> <mark> &entity_name; </mark> </small> OR <small> <mark> &#entity_number; </mark> </small></p>
        <p>If operating system that browser is running does not support the characters. These characters are displayed as boxes.</p>
      </div>

      <div>
        <h6>Emojis</h6>
        <p>They are letters (characters) from the UTF-8 (Unicode) character set. ex: &#128512; </p>
      </div>

      <div>
        <h6>Logical and Physical Tags</h6>
        <p><strong>Logical Tags</strong> are tell the meaning or importance of enclosed text. like <small> <mark> &lt;strong&gt; </mark> </small> This in Important <small> <mark> &lt;/strong&gt; </mark> </small><br />
          <strong>Physical Tags</strong> are used to  tell the browser how to display the text enclosed in physical tags like <small> <mark> &lt;b&gt; </mark> </small> and <small> <mark> &lt;i&gt; </mark> </small> </p>
      </div>

      <div>
        <h6>Advantage of collapsing white spaces</h6>
        <p>The browser collapses multiple spaces into a single space, we can indent lines of text without worrying about multiple spaces. This enables us to organize the HTML code into a much more readable format.</p>
      </div>

      <div>
        <h6> If We see a web address on a magazine, to which web page does it point?</h6>
        <p> Every web page on the web can have a separate web address. Most of these addresses are relative to the top-most web page. The published web address that appears within magazines typically points this top-most page. From this top level page, we can access all other pages within the website.</p>
      </div>

      <div>
        <h6>Doctype</h6>
        <p>The <small> <mark> &lt;!DOCTYPE&gt; </mark> </small> declaration represents the document type, and helps browsers to display web pages correctly. It must only appear once, at the top of the page (before any HTML tags). It is not case sensitive and HTML5 declaration is <small>  <mark> &lt;!DOCTYPE html&gt; </mark> </small>. If it not present in document the page may quirk.</p>
      </div>

      <div>
        <h6>Http is stateless protocol.</h6>
        <p>Each request is executed independently, without any knowledge of the requests that came before it. The connection between the browser and the server is lost once the transaction ends. </p>
      </div>

      <div>
        <h6>Overlap sets of tags</h6>
        <p>If two sets of html tags are overlapped, only the first tag will be recognized. We will recognize this problem when the text does not display properly on the browser screen.</p>
      </div>

      <div>
        <h6>Responsive Website</h6>
        <p>Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones). Use different CSS frameworks for responsive web design. </p>
      </div>

      <div>
        <h6>How do you keep list elements straight in an HTML file?</h6>
        <p>You can keep the list elements straight by using indents.</p>
      </div>

      <div>
        <h6>URL encoding</h6>
        <p>URLs can only be sent over the Internet using the ASCII character-set. If a URL contains characters outside the ASCII set, the URL has to be converted. URL encoding converts non-ASCII characters into a format that can be transmitted over the Internet. URL encoding replaces non-ASCII characters with a "%" followed by hexadecimal digits. URLs cannot contain spaces. URL encoding normally replaces a space with a plus (+) sign, or %20.</p>
      </div>

      <div>
        <h6>Include HTML page into another HTML page.</h6>
        <p>The <small> <mark> &lt;object&gt; </mark> </small> and <small> <mark> &lt;embed&gt; </mark> </small> elements can used to include HTML in HTML.</p>
      </div>

      <div>
        <h6>How to Target the browser to render HTML5 elements?</h6>
        <p>When a web page is loaded, the browser first reads the TEXT HTML and constructs DOM Tree from it. Then it processes the CSS whether that is inline, embedded or external CSS and constructs the CSSOM(CSS Object Model) Tree from it. After these trees are constructed, then it constructs the Render-Tree from it. Once the Render-Tree is constructed, then the browser starts the printing individual elements on the screen.</p>
      </div>

      <div>
        <h6>Attribute and Property</h6>
        <p>Attributes are defined on the HTML markup but properties are defined on the DOM.</p>
      </div>

      <div>
        <h6>Meta description element</h6>
        <p>Search Engine shows this as details below site name.</p>
      </div>

      <div>
        <h6><small> <mark> alpha</mark></small> parameter in colors</h6>
        <p>It has value between 0.0 (fully transparent) and 1.0 (not transparent at all)</p>
      </div>

      <div>
        <h6>Screen Reader</h6>
        <p>A screen reader is a software program that reads the HTML code, and allows the user to "listen" to the content. Screen readers are useful for people who are visually impaired or learning disabled.</p>
      </div>

      <div>
        <h6>Cell spacing</h6>
        <p>To change the space between table cells, use the CSS <small> <mark> border-spacing</mark> </small>  property on the <small> <mark> table </mark> </small> element</p>
      </div>

      <div>
        <h6>Notes</h6>
        <p>The class name, id name is case sensitive!</p>
        <p>Only use quotes around values if the value contains spaces in internal and external stylesheet.</p>
        <p>Emojis are characters from the UTF-8 character set. Emojis look like images, or icons, but they are not.</p>
      </div>

      <div>
        <a href="https://www.w3schools.com/tags/tag_picture.asp" target="_blank" className="btn btn-link" rel="noopener noreferrer">Picture Tag</a>
        <a href="https://www.w3schools.com/tags/tag_datalist.asp" target="_blank" className="btn btn-link" rel="noopener noreferrer">Datalist Tag</a>
        <a href="https://www.w3schools.com/tags/tag_output.asp" target="_blank" className="btn btn-link" rel="noopener noreferrer">Output Tag</a>
        <a href="https://www.w3schools.com/html/html5_webstorage.asp" target="_blank" className="btn btn-link" rel="noopener noreferrer">Web Storage</a>
        <a href="https://www.w3schools.com/html/html5_canvas.asp" target="_blank" className="btn btn-link" rel="noopener noreferrer">Canvas</a>
        <a href="https://www.w3schools.com/html/html5_svg.asp" target="_blank" className="btn btn-link" rel="noopener noreferrer">SVG</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions" target="_blank" className="btn btn-link" rel="noopener noreferrer" >watchPosition options</a>
        <a href="https://www.w3schools.com/html/html_table_colgroup.asp" target="_blank" className="btn btn-link" rel="noopener noreferrer" >Table colgroup</a>
        <a href="https://www.w3schools.com/tags/ref_httpmessages.asp" target="_blank" className="btn btn-link" rel="noopener noreferrer" >HTTP Messages</a>
      </div>
    </div>
  )
}

export default Htmlfile
