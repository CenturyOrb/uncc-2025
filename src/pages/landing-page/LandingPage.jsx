import Header from "../../components/header/Header";
import Content from "../../components/content/Content";
import "./LandingPage.css";
import ChatBox from "../../components/chat-box/ChatBox.jsx";


const LandingPage = () => {
	return (
		<div className="landingpage_container">
			<Header />
			<div className="content_wrapper">
				<Content />
				<div className="pageinfo_overlay">
					<ChatBox />
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
