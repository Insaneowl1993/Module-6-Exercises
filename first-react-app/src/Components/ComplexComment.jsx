function ComplexComment(props) {// complex component which displays different elements of a comment
    return (
        <div className="Comment componemntBox"> { /* handy convention for tracking/ styling components in the browser */}
            <div className="UserInfo"> {/* the user info is one aspect of the comments */}
                <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
                <div className="UserInfo-name">
            </div>
                {props.author.name}</div>
                <div className="Comment-text">{/* the actual comment text is another aspect of the comments */ }
                    {props.text}
                </div>
                <div className="Comment-date">{/* the date of the comment is another aspect of the comments */}
                    {props.date.toLocaleString()}
                </div>
            </div>
        );
    }

export default ComplexComment; // export the component for use in other files