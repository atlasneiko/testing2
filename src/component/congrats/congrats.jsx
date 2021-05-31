//  receive the success state as a prop
// if sucess render message
// else, render null

/* @function
 @param{object} props
`@returns {JSX.Element}
*/

export default ({ success }) => {
  return (
    <div data-test='component-congrats'>
      {success ? (
        <h1 data-test='congrats-message'>You got the right word!</h1>
      ) : null}
    </div>
  );
};