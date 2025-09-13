import { useState } from 'react';

const tabs = ['Education', 'Experience', 'Skills', 'Certifications'];

export default function ResumeTabs() {
	const [active, setActive] = useState('Education');

	return (
		<div className="max-w-6xl mx-auto">
			{/* Download Resume Button */}
			<div className="text-center mb-8">
				<a 
					href="/Tushar_Jain_Resume.pdf" 
					target="_blank" 
					rel="noopener noreferrer" 
					className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
				>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
					</svg>
					Download Resume
				</a>
			</div>

			{/* Tab Navigation */}
			<div className="flex flex-wrap gap-3 justify-center mb-12">
				{tabs.map(tab => (
					<button
						key={tab}
						onClick={() => setActive(tab)}
						className={`px-6 py-3 rounded-lg border transition-all duration-300 transform hover:scale-105 ${
							active === tab 
								? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500 text-white shadow-lg' 
								: 'bg-transparent border-white/20 text-gray-300 hover:bg-white/5 hover:border-white/40'
						}`}
					>
						{tab}
					</button>
				))}
			</div>

			{/* Tab Content */}
			<div className="min-h-[400px]">
				{active === 'Education' && (
					<div className="grid gap-6 md:grid-cols-2">
						<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
							<div className="flex items-start gap-4">
								<div className="bg-blue-600 rounded-full p-3">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2 text-white">Bachelor of Technology - Information Technology</h3>
									<p className="text-blue-400 font-medium mb-2">KJ Somaiya College of Engineering • 2018-2022</p>
									<p className="text-gray-300">CGPA: 8.41/10</p>
									<p className="text-gray-400 mt-2">Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development, Software Engineering</p>
								</div>
							</div>
						</div>

						<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
							<div className="flex items-start gap-4">
								<div className="bg-purple-600 rounded-full p-3">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2 text-white">HSC - Computer Science</h3>
									<p className="text-purple-400 font-medium mb-2">RJ College • 2016-2018</p>
									<p className="text-gray-300">Percentage: 81.23% (197/200 in Computer Science)</p>
									<p className="text-gray-400 mt-2">Specialized in Computer Science with focus on programming fundamentals</p>
								</div>
							</div>
						</div>

						<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 md:col-span-2">
							<div className="flex items-start gap-4">
								<div className="bg-green-600 rounded-full p-3">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2 text-white">SSC - Maharashtra Board</h3>
									<p className="text-green-400 font-medium mb-2">Dr. B.A Vidyalaya • 2016</p>
									<p className="text-gray-300">Percentage: 90.02%</p>
									<p className="text-gray-400 mt-2">Highest scorer in Mathematics • Strong foundation in science and mathematics</p>
								</div>
							</div>
						</div>
					</div>
				)}

				{active === 'Experience' && (
					<div className="grid gap-6">
						<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
							<div className="flex items-start gap-4">
								<div className="bg-blue-600 rounded-full p-3">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
									</svg>
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-semibold mb-1 text-white">Joint Creative Head</h3>
									<p className="text-blue-400 font-medium mb-2">Computer Society of India (CSI) KJSCE • 2019-2020</p>
									<ul className="text-gray-300 space-y-1">
										<li>• Designed challenging problems for CODE WAR 2.0 programming competition</li>
										<li>• Managed and coordinated Hackathon TechNext 2.0 event</li>
										<li>• Created promotional posters and digital artworks for events</li>
										<li>• Led creative initiatives and managed design team</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
							<div className="flex items-start gap-4">
								<div className="bg-purple-600 rounded-full p-3">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
									</svg>
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-semibold mb-1 text-white">Software Developer Intern</h3>
									<p className="text-purple-400 font-medium mb-2">Sarvodaya Ahimsa • 2020</p>
									<ul className="text-gray-300 space-y-1">
										<li>• Developed full-stack web applications using MERN stack</li>
										<li>• Built responsive React frontend with modern UI components</li>
										<li>• Created RESTful APIs using Node.js and Express</li>
										<li>• Implemented MongoDB database design and optimization</li>
										<li>• Deployed applications on AWS and DigitalOcean platforms</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
							<div className="flex items-start gap-4">
								<div className="bg-green-600 rounded-full p-3">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
									</svg>
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-semibold mb-1 text-white">Research Intern</h3>
									<p className="text-green-400 font-medium mb-2">KJSCE • Summer 2019</p>
									<ul className="text-gray-300 space-y-1">
										<li>• Conducted research on hybrid database systems performance</li>
										<li>• Benchmarked different database technologies under supervision</li>
										<li>• Worked with Prof. Vasani & Prof. Bhangale on database optimization</li>
										<li>• Analyzed performance metrics and prepared research reports</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				)}

				{active === 'Skills' && (
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{[
							['React & Next.js', '90%', 'Frontend Development'],
							['Node.js & Express', '85%', 'Backend Development'],
							['Python & Flask', '90%', 'Backend & Data Science'],
							['MongoDB & SQL', '85%', 'Database Management'],
							['JavaScript & TypeScript', '90%', 'Programming Languages'],
							['Flutter & React Native', '80%', 'Mobile Development'],
							['AWS & DigitalOcean', '75%', 'Cloud & Deployment'],
							['Photoshop & Illustrator', '90%', 'Design & Graphics'],
							['Git & GitHub', '85%', 'Version Control']
						].map(([name, pct, category]) => (
							<div key={name} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
								<div className="flex items-center justify-between mb-3">
									<span className="font-medium text-white group-hover:text-blue-400 transition-colors">{name}</span>
									<span className="text-sm text-gray-400">{pct}</span>
								</div>
								<div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
									<div 
										className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out" 
										style={{ width: pct }}
									/>
								</div>
								<p className="text-xs text-gray-500 mt-2">{category}</p>
							</div>
						))}
					</div>
				)}

				{active === 'Certifications' && (
					<div className="grid gap-6 md:grid-cols-2">
						<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
							<div className="flex items-start gap-4">
								<div className="bg-blue-600 rounded-full p-3">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2 text-white">Full Stack Web Development</h3>
									<p className="text-blue-400 font-medium mb-2">Self-Paced Learning</p>
									<p className="text-gray-300">Comprehensive knowledge in modern web development technologies including React, Node.js, and cloud deployment.</p>
								</div>
							</div>
						</div>

						<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
							<div className="flex items-start gap-4">
								<div className="bg-purple-600 rounded-full p-3">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2 text-white">Mobile App Development</h3>
									<p className="text-purple-400 font-medium mb-2">Flutter & React Native</p>
									<p className="text-gray-300">Cross-platform mobile development expertise with Flutter and React Native frameworks.</p>
								</div>
							</div>
						</div>

						<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 md:col-span-2">
							<div className="flex items-start gap-4">
								<div className="bg-green-600 rounded-full p-3">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2 text-white">Creative Design & Graphics</h3>
									<p className="text-green-400 font-medium mb-2">Adobe Creative Suite</p>
									<p className="text-gray-300">Professional design skills using Photoshop and Illustrator for creating promotional materials, posters, and digital artwork.</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}


