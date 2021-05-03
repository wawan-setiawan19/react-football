import Button from "./Button"
import '../style/search.css'
const SearchBar = () => {
  return (
      <form className="input-container">
        <input type="text" name="" id="" placeholder="Masukkan nama klub" className="search-element"/>
        <Button/>
      </form>
  )
}

export default SearchBar;