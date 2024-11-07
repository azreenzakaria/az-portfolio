import Card from "../shared/components/card/card";
import SideBar from "../shared/components/sidebar/sidebar";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="box">
        <div className="profile-container">
          <div>Nothing Here</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
        </div>
      </div>
      <div className="box">
        <SideBar></SideBar>
        <div className="content-container">
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
