import Avatar from './Avatar';

function Userinfo(props)   {
    return (
            <div>
                <Avatar img={props.avatarURL} />
                <div className="UserInfo-name">{props.name}</div>
        </div>
    );
}

export default Userinfo; // export the component for use in other files