import "./index.css";
export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>

      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        Inline style practice: green background with yellow text, set directly
        on this paragraph.
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        A second inline-style sample: purple background with white text.
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        <p id="wd-id-selector-3">
          A third paragraph with its own ID and a teal color scheme.
        </p>
        <p id="wd-ai-id-selector">
          A sample paragraph styled only through the wd-ai-id-selector ID.
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-your-class">
          This paragraph and the heading below share the wd-your-class style.
        </p>
        <h4 className="wd-your-class">Same class, different tag</h4>
        <p className="wd-ai-class-selector">
          Sample paragraph using the wd-ai-class-selector class.
        </p>
        <h4 className="wd-ai-class-selector">
          Sample heading using the same sample class
        </h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
              <br />
              <span className="wd-your-selector-6">
                This span matches .wd-selector-3 &gt; .wd-your-selector-6 (direct
                child)
              </span>
              <br />
              <span className="wd-ai-selector-5">
                Sample span matched by .wd-selector-1 .wd-ai-selector-5
                (descendant)
              </span>
            </p>
          </div>
        </div>
      </div>

      <div id="wd-css-cascade">
        <h3>CSS selection rule mechanism</h3>
        <article>
          <p id="wd-your-cascade" className="wd-your-cascade">
            Tag rule says green, class rule says orange, id rule says crimson.
            The id rule is first in the file and still wins: crimson.
          </p>
        </article>
        <section>
          <p id="wd-ai-cascade" className="wd-ai-cascade">
            Sample conflict: tag green, class yellow, id red. The id rule wins,
            so this background is red.
          </p>
        </section>
      </div>
    </div>
  );
}
