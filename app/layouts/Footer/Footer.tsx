import "./Footer.css";
export default function Footer(){

  const actualYear: number = new Date().getFullYear();

  return(<footer className="main-foot">
    <p className="copyright">
      © Webdevoo - {actualYear === 2025 ? actualYear : `2025 à ${actualYear}`}
    </p>
  </footer>);
}