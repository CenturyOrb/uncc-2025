import Header from "../../components/header/Header";
import Content from "../../components/images/Images.jsx";
import "./LandingPage.css";
import ChatBox from "../../components/chat-box/ChatBox.jsx";
import Images from "../../components/images/Images.jsx";


const LandingPage = () => {
	return (
		<div className="landingpage_container">
			<Header />
			<div className="content_wrapper">
				<Images />
        <div className="box_overlay">
          <h1 style={{fontSize: "5rem"}}>Learnly</h1>
          <h1>Helping you to reach higher goals</h1>
          <ChatBox />
        </div>
			</div>
		</div>
	);
}

export default LandingPage;
