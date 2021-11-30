import Img1 from "../images/logo.png";
import { Image } from "react-bootstrap";
function Logo() {
  return (
    <Image
      src={Img1}
      alt="de"
      // sizes="100vw"
      // style={{ position: "fixed", top: "5%", left: "5%" }}
    ></Image>
  );
}

export default Logo;
