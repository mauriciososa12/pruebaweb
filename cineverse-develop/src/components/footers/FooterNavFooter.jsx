import { Link } from "react-router-dom";
import { credits } from "../../utils/generalInformation";

const FooterNavFooter = ({ className }) => {
  const { author, year } = credits;

  return (
    <nav className={`footer-nav-footer ${className}`}>
      <div className="footer-nav-footer__container">
        <Link to="/" className="footer-nav-footer__subtitle">Condiciones de uso y seguridad</Link>
        <h5 className="footer-nav-footer__subtitle">Copyright &copy; {year} <a href="https://www.linkedin.com/in/mauricio-sosa-4830a3209/" className="footer-nav-footer__subtitle-author" target="_blank" rel="noopener noreferrer">{author}</a></h5>
        <Link to="/" className="footer-nav-footer__subtitle footer-nav-footer__subtitle--icon"><span className="footer-nav-footer__subtitle-icon"><i className="bi bi-book"></i></span> Libro de reclamaciones</Link>
      </div>
    </nav>
  );
};

export default FooterNavFooter;