import Header from "../../components/header/Header";
import Content from "../../components/images/Images.jsx";
import "./LandingPage.css";
import ChatBox from "../../components/chat-box/ChatBox.jsx";
import Images from "../../components/images/Images.jsx";
import Title from "../../components/title-component/title.jsx";
import OnboardingModal from "../../components/onboaring-modal/OnboaringModal.jsx";

const LandingPage = () => {
	return (
		<div className="landingpage_container">
			<Header />
			<div className="content_wrapper">
				<Images />
        <div className="box_overlay">
			<Title />	
          	<ChatBox />
=======
import Title from "../../components/title-component/title.jsx";
import OnboardingModal from "../../components/onboaring-modal/OnboaringModal.jsx";

const LandingPage = () => {
=======
import Title from "../../components/title-component/title.jsx";
import OnboardingModal from "../../components/onboaring-modal/OnboaringModal.jsx";

const LandingPage = () => {
>>>>>>> Stashed changes
  return (
    <>
      <OnboardingModal />
      <div className="landingpage_container">
        <Header />
        <div className="content_wrapper">
          <Images />
          <div className="box_overlay">
            <Title />
            <ChatBox />
          </div>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        </div>
      </div>
    </>
  );
};

export default LandingPage;
