import Comment from './Comment';

function FormattedDate() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  return <div>{formattedDate}</div>;
}

export default FormattedDate;
