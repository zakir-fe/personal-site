"use client"
import Link from 'next/link'
import React, { useState } from "react";


export default function Experience2() {
	const [activeIndex, setActiveIndex] = useState<number | null>(0);

	const experiences = [
		{
			company: "Flight Expert",
			image: "assets/imgs/home-page-2/experience/fe-logo.svg",
			years: "2023 - Present",
			title: "Software Engineer",
			description: [
				"Development of scalable web applications, improving performance and user experience .",
				"Worked on real-time APIs and data pipelines.",
				"Collaborated with cross-functional teams to integrate new features seamlessly.",
				"Integate Supplier and 3rd party Api for Flight, Hotel, Esim and others Addons.",
			],
			skills: ["Laravel", "Api Development", "Mysql", "PHP", "3rd Part Api implement","Payment Gateway","Node.js", "Redis", "Docker"],
		},
		{
			company: "Trimatric Architect and Engineers",
			image: "assets/imgs/home-page-2/experience/trimatric.jpg",
			years: "2022 - 2023",
			title: "Backend Developer & IT Support",
			description: [
				"Worked on CMS and POS System for Internal Uses.",
				"Dynamic Invoice and Material Management System.",
				"Maintain all the Computer and networking Devices.",
				"All the website and social Media Management.",
			],
			skills: ["Laravel", "HTML", "CSS", "JS","MYSQL","Server Management"],
		},
		{
			company: "6am tech",
			image: "assets/imgs/home-page-2/experience/6am.svg",
			years: "2022 - 2022",
			title: "Intern As Backend Developer",
			description: [
				"Worked on Laravel framework .",
				"Maintain and Develop Couple of module for woocomerce website and POS system.",
			],
			skills: ["Node.js", "Redis", "RabbitMQ", "Docker"],
		},
		
	];

	const handleToggle = (index: number) => {
		setActiveIndex(index === activeIndex ? activeIndex  : index); 
	};
	return (
		<>

			<section id="portfolio" className="section-experience pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Experiences </span>
								</div>
								<h3>
									+3
									<span className="text-300"> years of </span>
									professional experience for
									<span className="text-300">
										 <br />
										programming techniques
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
										{experiences.map((exp, index) => (
											<div
											className='technology border border-1 rounded-3 p-3 d-block '
											role="button"
											onClick={() => handleToggle(index)}
											>
												<div className="d-flex align-items-center gap-2">
													<img src={exp.image} alt={exp.company} style={{ width: "60px", height: "60px" }}/>
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">{exp.company}</h5>
														<span className="text-300">{exp.years}</span>
													</div>
												</div>
											</div>		
										))}									
										</div>
									</div>
									{experiences.map((exp, index) => (
										activeIndex === index && (
											<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
												<h6 className="text-linear-4">{exp.title}</h6>
												<ul className="mt-4">
													{exp.description.map((item, i) => (
													<li className="text-dark mb-3" key={i}>
														{item}
													</li>
													))}																		
												</ul>
												<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
												{exp.skills.map((skill, i) => (
													<span
													className="text-300 border border-1 px-3 py-1"
													key={i}
													>
													{skill}
													</span>
												))}
												</div>
											</div>
										)
									 ))}
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
