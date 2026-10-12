export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <h3>Middle grows, last pinned</h3>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-gray">Natural</div>
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          I grow
        </div>
        <div className="wd-bg-color-yellow wd-width-110px">Pinned 110</div>
      </div>
      <h3>Sample row</h3>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Pinned</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Natural</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Stretches
        </div>
      </div>
    </div>
  );
}
