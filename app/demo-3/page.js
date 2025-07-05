import Layout from "@/components/layout/Layout"
import Section1 from "@/components/sections/home3/Section1"
import Section10 from "@/components/sections/home3/Section10"
import Section11 from "@/components/sections/home3/Section11"
import Section12 from "@/components/sections/home3/Section12"
import Section13 from "@/components/sections/home3/Section13"
import Section14 from "@/components/sections/home3/Section14"
import Section15 from "@/components/sections/home3/Section15"
import Section16 from "@/components/sections/home3/Section16"
import Section17 from "@/components/sections/home3/Section17"
import Section18 from "@/components/sections/home3/Section18"
import Section2 from "@/components/sections/home3/Section2"
import Section3 from "@/components/sections/home3/Section3"
import Section4 from "@/components/sections/home3/Section4"
import Section5 from "@/components/sections/home3/Section5"
import Section6 from "@/components/sections/home3/Section6"
import Section7 from "@/components/sections/home3/Section7"
import Section8 from "@/components/sections/home3/Section8"
import Section9 from "@/components/sections/home3/Section9"
export default function Home3() {

	return (
		<>

			<Layout headerStyle={3} footerStyle={3} breadcrumbTitle="title">
				<Section1 />
				<Section2 />
				<hr className="divider" />
				<Section3 />
				<Section4 />
				<Section5 />
				<hr className="divider" />
				<Section6 />
				<Section7 />
				<Section8 />
				<hr className="divider" />
				<Section9 />
				<Section10 />
				<Section11 />
				<Section12 />
				<Section13 />
				<hr className="divider" />
				<Section14 />
				<Section15 />
				<Section16 />
				<Section17 />
				<Section18 />
			</Layout>
		</>
	)
}