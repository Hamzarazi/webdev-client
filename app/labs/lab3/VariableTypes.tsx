export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let myCourse = "CS5610 Web Development";
  let myCredits = 4;
  let isMyCourse = typeof myCourse;
  let isMyCredits = typeof myCredits;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                     <br />
      myCourse = {myCourse}                       <br />
      typeof myCourse = {isMyCourse}              <br />
      myCredits = {myCredits}                     <br />
      typeof myCredits = {isMyCredits}            <br />
      sampleCount = {sampleCount}                 <br />
      typeof sampleCount = {typeof sampleCount}   <br />
      sampleLabel = {sampleLabel}                 <br />
      typeof sampleLabel = {typeof sampleLabel}
      <hr />
    </div>
  );
}
