// const ConditionalOutputIfElse = () => {
//   const loggedIn = true;
//   if (loggedIn) {
//     return <h2 id="wd-conditional-output-if-else-welcome">Welcome If Else</h2>;
//   } else {
//     return (
//       <h2 id="wd-conditional-output-if-else-login">Please login If Else</h2>
//     );
//   }
// };
// export default ConditionalOutputIfElse;
// has been replace with this syntax for ES6

const ConditionalOutputInline = () => {
  const loggedIn = false;
  return (
    <div id="wd-conditional-output-inline">
      {loggedIn && <h2>Welcome Inline</h2>}
      {!loggedIn && <h2>Please login Inline</h2>}
    </div>
  );
};
export default ConditionalOutputInline;
