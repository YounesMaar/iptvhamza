// imgages
import Logo from "./assets/LOGO.png";

const Footer = () => {
  return (
    <div className="footer relative py-10" id="footer">
      <div className="overlay"></div>
      <div className="container relative z-10 mx-auto text-white flex gap-20 items-center">
        <div className="flex gap-5 items-center justify-between w-full h-28 text-xl">
          <img src={Logo} className="w-20" />{" "}
          <span className="inline-block">&copy; 2020 - 2023</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
