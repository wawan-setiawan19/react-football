const Header = ({title}) => {
  return (
    <header className="header">
      <div className="container">
        <h1>{title}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title:'Liga 1 Indonesia'
}

export default Header;