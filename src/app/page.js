import BlogHeadline from "../../components/BlogHeadline";
import CompanyProfile from "../../components/CompanyProfile";
import ExcitingTools from "../../components/ExcitingTools";
import Navbar from "../../components/Navbar";
import Testimonial from "../../components/Testimonial";
import TopBanner from "../../components/TopBanner";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      <CompanyProfile></CompanyProfile>
      <ExcitingTools></ExcitingTools>
      <BlogHeadline></BlogHeadline>
      <Testimonial></Testimonial>
    </div>
  );
}
