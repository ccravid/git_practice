import "./style.css";
export const Input = (props) => {
  return (
    <input
      type="search"
      className="text-input"
      value={props.searchValue}
      onChange={props.handleSearch}
      placeholder="Type the title"
    />
  );
};
