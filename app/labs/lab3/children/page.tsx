import BoxDemo from "./BoxDemo";
import BoxModelDemo from "./BoxModelDemo";
import NestingOrderDemo from "./NestingOrderDemo";
import CardDemo from "./CardDemo";

export default function ChildrenPage() {
  return (
    <div id="wd-lab3-children">
      <h2>Composing Styles with Children</h2>
      <h3>One configurable Box</h3>
      <BoxDemo />
      <h3>One component per box-model layer</h3>
      <BoxModelDemo />
      <h3>Nesting order</h3>
      <NestingOrderDemo />
      <h3>Children can be anything</h3>
      <CardDemo />
    </div>
  );
}
