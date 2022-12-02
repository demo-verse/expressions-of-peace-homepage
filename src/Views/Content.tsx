import About from "../Components/About";
import SectionOne from "../Components/SectionOne";
import SectionTwo from "../Components/SectionTwo";
import SectionThree from "../Components/SectionThree";
import SectionFour from "../Components/SectionFour";
// import SectionFive from '../Components/SectionFive';
import SectionPeacemaker from "../Components/SectionPeacemaker";

const Content = () => {
  return (
    <>
      <About />
      <SectionTwo />
      <SectionFour />
      <SectionThree />
      <SectionOne />
      <SectionPeacemaker />

      {/* FAQ -- to be added */}
      {/* <SectionFive /> */}
      {/* Other sections .. */}
    </>
  );
};

export default Content;
