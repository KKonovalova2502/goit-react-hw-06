import style from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={style.container}>
      <p className={style.text}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
