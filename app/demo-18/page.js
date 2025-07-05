import Layout from "@/components/layout/Layout"
import Section1 from "@/components/sections/home18/Section1"
import Section10 from "@/components/sections/home18/Section10"
import Section11 from "@/components/sections/home18/Section11"
import Section12 from "@/components/sections/home18/Section12"
import Section13 from "@/components/sections/home18/Section13"
import Section14 from "@/components/sections/home18/Section14"
import Section2 from "@/components/sections/home18/Section2"
import Section3 from "@/components/sections/home18/Section3"
import Section4 from "@/components/sections/home18/Section4"
import Section5 from "@/components/sections/home18/Section5"
import Section6 from "@/components/sections/home18/Section6"
import Section7 from "@/components/sections/home18/Section7"
import Section8 from "@/components/sections/home18/Section8"
import Section9 from "@/components/sections/home18/Section9"
export default function Home18() {

	return (
		<>

			<Layout headerStyle={18} footerStyle={18} breadcrumbTitle="title">
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Section6 />
				<Section7 />
				<Section8 />
				<Section9 />
				<Section10 />
				<Section11 />
				<Section12 />
				<Section13 />
				<Section14 />
			</Layout>
		</>
	)
}