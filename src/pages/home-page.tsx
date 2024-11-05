import SideBar from "../shared/components/sidebar/sidebar";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="box">
        <div className="profile-container">
          <div>Azreen Zakaria</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
        </div>
      </div>
      <div className="box">
        <SideBar></SideBar>
      </div>
    </div>
  );
};

export default HomePage;
