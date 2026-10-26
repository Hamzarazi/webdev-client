export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let myName = "Hamza";
  const myGreeting = `Hi, I am ${myName}`;
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1}           <br />
      myName = {myName}                 <br />
      myGreeting = {myGreeting}         <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
