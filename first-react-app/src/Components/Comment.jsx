import UserInfo from './Components/UserInfo';
import FormattedDate from './FormattedDate';

// A simplified Comment component with the user info section extracted out in its own component
function Comment(props) {
  return (
    <div className="Comment componentBox">
      <div className="UserInfo">
      <UserInfo user={props.user} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        <FormattedDate date={props.date} />
      </div>
    </div>
    </div>
  );
}

export default Comment;