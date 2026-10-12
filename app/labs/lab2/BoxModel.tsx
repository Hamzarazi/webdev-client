export default function BoxModel() {
  return (
    <div id="wd-css-box-model">
      <h2>Box model</h2>
      <div className="wd-box-model-parent">
        <div>parent background (shows through the margin)</div>
        <div className="wd-box-model-box">
          <span className="wd-box-model-border-label">border (the red ring)</span>
          <span className="wd-box-model-padding-label">padding</span>
          <div className="wd-box-model-content">content</div>
          <span className="wd-box-model-margin-label">
            margin: the 20px gray gap (transparent)
          </span>
        </div>
      </div>
      <h3>box-sizing</h3>
      <div className="wd-box-sizing-demo">
        <div className="wd-box-sizing-content">
          content-box: width 200px plus padding and border
        </div>
        <div className="wd-box-sizing-border">
          border-box: width 200px includes padding and border
        </div>
        <div className="wd-box-sizing-border-300">
          border-box at width 300px: measures exactly 300px on screen
        </div>
        {/* Sample: same width, padding, and border as the boxes above.
            border-box keeps the declared 200px; content-box would grow to 260px. */}
        <div id="wd-ai-box-sizing" className="wd-box-sizing-border">
          Sample: border-box keeps the declared 200px width
        </div>
      </div>
    </div>
  );
}
