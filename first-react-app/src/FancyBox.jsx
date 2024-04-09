import './FancyBox.css'; // import the CSS file for the component

function FancyBox(props) {
  return (
    <div className={"FancyBox FancyBox-blue" + props.color}>
      {props.children}
      {/* everything in between the opening<FancyBox> and closing</FancyBox> tags */}
    </div>);
}

export default FancyBox; // export the component for use in other files