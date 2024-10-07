import BootstrapGrids from "./BootstrapGrids";
import "./index.css";
import ReactIconsSampler from "./ReactIcons";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";
export default function Lab2() {
  return (
    <div className="container">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>…
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and
          feel
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element's
          CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph's red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
          </div>
        </div>
      </div>
      <div id="wd-css-colors">
        <h2>Colors</h2>
        <h3 className="wd-fg-color-blue">Foreground color</h3>
        <p className="wd-fg-color-red">
          The text in this paragraph is red but
          <span className="wd-fg-color-green">this text is green</span>
        </p>
      </div>
      <div id="wd-css-background-colors">
        <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
        <p className="wd-bg-color-red wd-fg-color-black">
          This background of this paragraph is red but
          <span className="wd-bg-color-green wd-fg-color-white">
            the background of this text is green and the foreground white
          </span>
        </p>
      </div>
      <div id="wd-css-borders">
        <h2>Borders</h2>
        <p className="wd-border-fat wd-border-red wd-border-solid">
          Solid fat red border
        </p>
        <p className="wd-border-thin wd-border-blue wd-border-dashed">
          Dashed thin blue border
        </p>
      </div>
      <div id="wd-css-paddings">
        <h2>Padding</h2>
        <div
          className="wd-padded-top-left wd-border-fat 
      wd-border-red wd-border-solid 
      wd-bg-color-yellow"
        >
          Padded top left
        </div>
        <div
          className="wd-padded-bottom-right wd-border-fat 
      wd-border-blue wd-border-solid 
      wd-bg-color-yellow"
        >
          Padded bottom right
        </div>

        <div
          className="wd-padding-fat wd-border-fat 
      wd-border-yellow wd-border-solid 
      wd-bg-color-blue wd-fg-color-white"
        >
          Padded all around
        </div>
      </div>
      <div id="wd-css-margins">
        <h2>Margins</h2>
        <div
          className="wd-margin-bottom 
      wd-padded-top-left 
      wd-border-fat wd-border-red 
      wd-border-solid 
      wd-bg-color-yellow"
        >
          Margin bottom
        </div>
        <div
          className="wd-margin-right-left 
      wd-padded-bottom-right 
      wd-border-fat wd-border-blue 
      wd-border-solid 
      wd-bg-color-yellow"
        >
          Margin left right
        </div>
        <div
          className="wd-margin-all-around 
      wd-padding-fat wd-border-fat 
      wd-border-yellow 
      wd-border-solid 
      wd-bg-color-blue 
      wd-fg-color-white"
        >
          Margin all around
        </div>
      </div>
      <div id="wd-css-borders">
        <h3>Rounded corners</h3>
        <p
          className="wd-rounded-corners-top wd-border-thin 
     wd-border-blue wd-border-solid wd-padding-fat"
        >
          Rounded corners on the top
        </p>

        <p
          className="wd-rounded-corners-bottom 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat"
        >
          Rounded corners at the bottom
        </p>
        <p
          className="wd-rounded-corners-all-around 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat"
        >
          Rounded corners all around
        </p>
        <p
          className="wd-rounded-corners-inline 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat"
        >
          Different rounded corners
        </p>
      </div>
      <div id="wd-css-dimensions">
        <h2>Dimension</h2>
        <div>
          <div className="wd-dimension-portrait wd-bg-color-yellow">
            Portrait
          </div>
          <div
            className="wd-dimension-landscape wd-bg-color-blue
                    wd-fg-color-white"
          >
            Landscape
          </div>
          <div className="wd-dimension-square wd-bg-color-red">Square</div>
        </div>
      </div>
      <div id="wd-css-position-relative">
        <h2>Relative</h2>
        <div className="wd-bg-color-gray">
          <div
            className="wd-bg-color-yellow 
                    wd-dimension-portrait"
          >
            <div className="wd-pos-relative-nudge-down-right">Portrait</div>
          </div>
          <div
            className="wd-pos-relative-nudge-up-right 
        wd-bg-color-blue wd-fg-color-white 
        wd-dimension-landscape"
          >
            Landscape
          </div>
          <div className="wd-bg-color-red wd-dimension-square">Square</div>
        </div>
      </div>
      <div id="wd-css-position-absolute">
        <h2>Absolute position</h2>
        <div className="wd-pos-relative">
          <div
            className="wd-pos-absolute-10-10 
         wd-bg-color-yellow wd-dimension-portrait"
          >
            Portrait
          </div>
          <div
            className="wd-pos-absolute-50-50 
         wd-bg-color-blue wd-fg-color-white 
         wd-dimension-landscape"
          >
            Landscape
          </div>
          <div
            className="wd-pos-absolute-120-20 
         wd-bg-color-red wd-dimension-square"
          >
            Square
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div id="wd-css-position-fixed">
        <h2>Fixed position</h2>
        Checkout the blue square that says "Fixed position" stuck all the way on
        the right and half way down the page. It doesn't scroll with the rest of
        the page. Its position is "Fixed".
        <div
          className="wd-pos-fixed 
    wd-dimension-square wd-bg-color-blue 
    wd-fg-color-white"
        >
          Fixed position
        </div>
      </div>
      <div id="wd-z-index">
        <h2>Z index</h2>
        <div className="wd-pos-relative">
          <div
            className="wd-pos-absolute-10-10 
         wd-bg-color-yellow wd-dimension-portrait"
          >
            Portrait
          </div>
          <div
            className="wd-zindex-bring-to-front 
         wd-pos-absolute-50-50 wd-dimension-landscape
         wd-bg-color-blue wd-fg-color-white"
          >
            Landscape
          </div>
          <div
            className="wd-pos-absolute-120-20 
         wd-bg-color-red wd-dimension-square"
          >
            Square
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div id="wd-float-divs">
        <h2>Float</h2>
        <div>
          <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
            Yellow{" "}
          </div>
          <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
            Blue{" "}
          </div>
          <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
            Red{" "}
          </div>
          <img
            className="wd-float-right"
            src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          />
          <div className="wd-float-done"></div>
        </div>
      </div>
      <div id="wd-css-grid-layout">
        <div id="wd-css-left-right-layout">
          <h2>Grid layout</h2>
          <div className="wd-grid-row">
            <div className="wd-grid-col-half-page wd-bg-color-yellow">
              <h3>Left half</h3>
            </div>
            <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">
              <h3>Right half</h3>
            </div>
          </div>
        </div>
        <div id="wd-css-left-third-right-two-thirds" className="wd-grid-row">
          <div
            className="wd-grid-col-third-page wd-bg-color-green
        wd-fg-color-white"
          >
            <h3>Left third</h3>
          </div>
          <div className="wd-grid-col-two-thirds-page wd-bg-color-red wd-fg-color-white">
            <h3>Right two thirds</h3>
          </div>
        </div>
        <div id="wd-css-side-bars" className="wd-grid-row">
          <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
            <h3>Side bar</h3>
            <p>This is the left sidebar</p>
          </div>
          <div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">
            <h3>Main content</h3>
            <p>
              This is the main content. This is the main content. This is the
              main content.
            </p>
          </div>
          <div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">
            <h3>Side bar</h3>
            <p>This is the right sidebar</p>
          </div>
        </div>
      </div>
      <div id="wd-css-flex">
        <h2>Flex</h2>
        <div className="wd-flex-row-container">
          <div className="wd-bg-color-yellow">Column 1</div>
          <div className="wd-bg-color-blue">Column 2</div>
          <div className="wd-bg-color-red">Column 3</div>
        </div>
      </div>
      <div id="wd-css-flex">
        <h2>Flex</h2>
        <div className="wd-flex-row-container">
          <div className="wd-bg-color-yellow">Column 1</div>
          <div className="wd-bg-color-blue">Column 2</div>
          <div
            className="wd-bg-color-red
                    wd-flex-grow-1"
          >
            Column 3
          </div>
        </div>
      </div>
      <div id="wd-css-flex">
        <h2>Flex</h2>
        <div className="wd-flex-row-container">
          <div
            className="wd-bg-color-yellow 
                    wd-width-75px"
          >
            Column 1
          </div>
          <div className="wd-bg-color-blue">Column 2</div>
          <div
            className="wd-bg-color-red
                    wd-flex-grow-1"
          >
            Column 3
          </div>
        </div>
      </div>
      <ReactIconsSampler />
      <BootstrapGrids />
      <ScreenSizeLabel />
      <BootstrapTables />
      <BootstrapLists />
      <BootstrapForms />
      <BootstrapNavigation />
    </div>
  );
}
