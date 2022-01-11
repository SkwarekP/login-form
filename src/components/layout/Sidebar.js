import { Col, Row } from "react-bootstrap";
import SidebarNavigation from "./SidebarNavigation";
import classes from "./Sidebar.module.css";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";

function Sidebar() {
  const [userName, setUserName] = useState("");
  const [typeUser, setTypeUser] = useState(false);
  const [userImg, setUserImg] = useState("");
  const { user } = useContext(UserContext);
  useEffect(() => {
    setUserName(user.name);
    setTypeUser(user.type);
    setUserImg(user.zdjecie);
  });
  // useEffect(() => {
  //   fetch("http://localhost:8000/api/currentUser", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       token: localStorage.getItem("token"),
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setUserName((prevState) => (prevState = data.name));
  //       setTypeUser((prevState) => (prevState = data.is_admin));
  //       setUserImg((prevState) => (prevState = data.zdjecie));
  //     });
  // }, []);

  let { typeuser } = typeUser;

  if (typeUser) {
    typeuser = "Administrator";
  } else {
    typeuser = "Użytkownik";
  }

  return (
    <div className={classes.sidebarCnt}>
      <div className={classes.sidebarProfileContainer}>
        <p className={classes.sidebarProfileImg}>
          <img src={userImg} alt="chuj" />
        </p>{" "}
        <p className={classes.sidebarYourName}> {userName} </p>{" "}
        <p className={classes.sidebarYourName}> {typeuser} </p>{" "}
      </div>{" "}
      <div className={classes.line_hr}>
        <hr />
      </div>{" "}
      <Row>
        <Col xs={3} md={2} xl={3} className="sidebar_fake_col" />
        <Col xs={9} sm={12} md={8} xl={7}>
          <SidebarNavigation />
        </Col>{" "}
        <Col xs={1} xl={3} className="sidebar_fake_col" />
      </Row>{" "}
    </div>
  );
}

export default Sidebar;
