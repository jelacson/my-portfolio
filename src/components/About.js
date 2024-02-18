import React from "react";
import { Helmet } from 'react-helmet';

export default function About() {
	return (
		<section id="about">
			<Helmet>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
				/>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;700&display=swap" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700&display=swap" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
				<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Inter:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
			</Helmet>

			<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-left bg-white w-1/2">
				<div className="lg:flex-grow md:w-full flex flex-col md:items-left md:text-left mb-16 md:mb-0 items-left text-left">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-reminders" style={{ fontFamily: 'Fredoka, sans-serif' }}>
						Kumusta? I'm Russel.
					</h1>
					<div className="max-w-screen-md mx-auto bg-white text-black">
						<p className="mb-8 text-base opacity-50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', }}>
							I'm a senior BS Computer Science student from UPLB. I have worked on several web application projects and currently interested in data analytics and machine learning.
						</p>
					</div>
					{/* <div className="flex justify-center">
								<a
									href="#contact"
									className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
									Work With Me
								</a>
								<a
									href="#projects"
									className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
									See My Past Work
								</a>
							</div> */}
				</div>
				{/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
							<img
								className="object-cover object-center rounded"
								alt="hero"
								src="./coding.svg"
							/>
						</div> */}
			</div>
		</section>
	)
}