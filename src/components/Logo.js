import Img1 from "../images/logo.png";
import {Image} from "react-bootstrap";

function Logo() {
    return (
        <Image
            src={Img1}
            // sizes="100vw"
            // style={{ position: "fixed", top: "5%", left: "5%" }}
        />
    );
}

export default Logo;
