const Footer = ({title}) => {
  return (
    <footer className="footer">
      {title}
    </footer>
  );
}

Footer.defaultProps = {
  title:"Copyright © 2021 by Wawan Setiawan"
}

export default Footer;