import Layout from "@/components/layout/Layout"
import Section1 from "@/components/sections/home17/Section1"
import Section10 from "@/components/sections/home17/Section10"
import Section11 from "@/components/sections/home17/Section11"
import Section12 from "@/components/sections/home17/Section12"
import Section13 from "@/components/sections/home17/Section13"
import Section14 from "@/components/sections/home17/Section14"
import Section15 from "@/components/sections/home17/Section15"
import Section2 from "@/components/sections/home17/Section2"
import Section3 from "@/components/sections/home17/Section3"
import Section4 from "@/components/sections/home17/Section4"
import Section5 from "@/components/sections/home17/Section5"
import Section6 from "@/components/sections/home17/Section6"
import Section7 from "@/components/sections/home17/Section7"
import Section8 from "@/components/sections/home17/Section8"
import Section9 from "@/components/sections/home17/Section9"
import VerifAIHero from "@/components/sections/verifai/Hero"
import VerifAICategories from "@/components/sections/verifai/Categories"
import VerifAIResultCard from "@/components/sections/verifai/ResultCard"
import VerifAICoach from "@/components/sections/verifai/Coach"
import VerifAITrend from "@/components/sections/verifai/Trend"
import VerifAICompare from "@/components/sections/verifai/Compare"
import VerifAIGuides from "@/components/sections/verifai/Guides"
import VerifAIBlog from "@/components/sections/verifai/Blog"

export default function VerifAIHome() {
	return (
		<Layout headerStyle={17} footerStyle={17} breadcrumbTitle="VerifAI">
			<VerifAIHero />
			<VerifAICategories />
			<VerifAIResultCard />
			<VerifAICoach />
			<VerifAITrend />
			<VerifAICompare />
			<VerifAIGuides />
			<VerifAIBlog />
		</Layout>
	)
}