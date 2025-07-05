import Layout from "@/components/layout/Layout"
import Section1 from "@/components/sections/home2/Section1"
import Section10 from "@/components/sections/home2/Section10"
import Section11 from "@/components/sections/home2/Section11"
import Section12 from "@/components/sections/home2/Section12"
import Section13 from "@/components/sections/home2/Section13"
import Section14 from "@/components/sections/home2/Section14"
import Section15 from "@/components/sections/home2/Section15"
import Section16 from "@/components/sections/home2/Section16"
import Section17 from "@/components/sections/home2/Section17"
import Section18 from "@/components/sections/home2/Section18"
import Section2 from "@/components/sections/home2/Section2"
import Section3 from "@/components/sections/home2/Section3"
import Section4 from "@/components/sections/home2/Section4"
import Section5 from "@/components/sections/home2/Section5"
import Section6 from "@/components/sections/home2/Section6"
import Section7 from "@/components/sections/home2/Section7"
import Section8 from "@/components/sections/home2/Section8"
import Section9 from "@/components/sections/home2/Section9"
export default function Home2() {

	return (
		<>

			<Layout headerStyle={2} footerStyle={2} breadcrumbTitle="title">
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<hr className="divider" />
				<Section6 />
				<Section7 />
				<Section8 />
				<Section9 />
				<Section10 />
				<Section11 />
				<hr className="divider" />
				<Section12 />
				<hr className="divider" />
				<Section13 />
				<hr className="divider" />
				<Section14 />
				<Section15 />
				<Section16 />
				<Section17 />
				<hr className="divider" />
				<Section18 />
				<hr className="divider" />
			</Layout>
		</>
	)
}