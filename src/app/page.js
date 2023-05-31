import BlogHeadline from "../../components/BlogHeadline";
import CompanyProfile from "../../components/CompanyProfile";
import ExcitingTools from "../../components/ExcitingTools";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PriceCard from "../../components/PriceCard";
import Testimonial from "../../components/Testimonial";
import TopBanner from "../../components/TopBanner";

export default function Home() {
  return (
    <div>
      <TopBanner></TopBanner>
      <CompanyProfile></CompanyProfile>
      <ExcitingTools></ExcitingTools>
      <BlogHeadline></BlogHeadline>
      <Testimonial></Testimonial>
      <PriceCard></PriceCard>
    </div>
  );
}
