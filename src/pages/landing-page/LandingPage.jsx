import Header from "../../components/header/Header";
import PageInfo from "../../components/pageinfo/PageInfo";
import Content from "../../components/content/Content";
import "./LandingPage.css";


const LandingPage = () => { 
	return(
		<div className="landingpage_container">
			<Header />
			<div className="content_wrapper">
				<Content />
				<PageInfo />
			</div>
		</div>
	);
}

export default LandingPage;
