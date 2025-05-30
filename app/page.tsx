import Layout from "@/components/layout/Layout"
import Home from "@/components/sections/Home"
import Static from "@/components/sections/Static"
import Link from "next/link"
import Service from "@/components/sections/Service"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Blog from "@/components/sections/Blog"
import Contact from "@/components/sections/Contact"
import Corporation from "@/components/sections/Corporation"
import Education from "@/components/sections/Education"
import Experience from "@/components/sections/Experience"
export default function Page() {

	return (
		<>
			<Layout >
				<Home />
				<Static />
				{/* <Corporation /> */}
				<Education />
				<Experience />
				<Skills />
				<Service />
				<Projects />
				{/* <Blog /> */}
				<Contact />
			</Layout>
		</>
	)
}