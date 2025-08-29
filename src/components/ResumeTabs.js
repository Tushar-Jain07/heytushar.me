import { useState } from 'react';

const tabs = ['Education', 'Internships', 'Skills', 'Experience'];

export default function ResumeTabs() {
	const [active, setActive] = useState('Education');

	return (
		<div className="max-w-5xl mx-auto">
			<div className="flex flex-wrap gap-3 justify-center mb-8">
				{tabs.map(tab => (
					<button
						key={tab}
						onClick={() => setActive(tab)}
						className={`px-4 py-2 rounded-md border ${active === tab ? 'bg-blue-600 border-blue-500 text-white' : 'bg-transparent border-white/20 text-gray-300 hover:bg-white/5'}`}
					>
						{tab}
					</button>
				))}
			</div>
			<div className="grid gap-6 md:grid-cols-2">
				{active === 'Education' && (
					<>
						<div className="card"><h3 className="text-xl font-semibold mb-2">SSC Maharashtra Board - 90.02%</h3><p>Dr. B.A Vidyalaya (2016). Highest scorer in Mathematics.</p></div>
						<div className="card"><h3 className="text-xl font-semibold mb-2">HSC Maharashtra Board - Computer Science (197/200)</h3><p>RJ College (2016-2018). 81.23% with bifocal Computer Science.</p></div>
						<div className="card md:col-span-2"><h3 className="text-xl font-semibold mb-2">B.Tech Information Technology - 8.41 CGPA</h3><p>KJSCE (2018-2022).</p></div>
					</>
				)}
				{active === 'Internships' && (
					<>
						<div className="card"><h3 className="text-xl font-semibold mb-1">Software Developer (MERN + AWS)</h3><p className="text-sm opacity-80">Sarvodaya Ahimsa · 2020</p><p>Built React frontend and Node/Mongo backend, deployed on AWS/DO.</p></div>
						<div className="card"><h3 className="text-xl font-semibold mb-1">Backend Developer</h3><p className="text-sm opacity-80">KJSCE · Summer 2020</p><p>Python backend for Excel/certificates; some Node.js.</p></div>
						<div className="card"><h3 className="text-xl font-semibold mb-1">Research on Hybrid Databases</h3><p className="text-sm opacity-80">KJSCE · Summer 2019</p><p>Benchmarked databases under Prof. Vasani & Prof. Bhangale.</p></div>
						<div className="card"><h3 className="text-xl font-semibold mb-1">Student Developer</h3><p className="text-sm opacity-80">KJSCE · Summer 2019</p><p>College forum website with Flask (Python) under Prof. Chachra.</p></div>
					</>
				)}
				{active === 'Skills' && (
					<>
						{[
							['Flutter', '80%'], ['Python', '90%'], ['NodeJS', '80%'], ['MongoDB', '80%'], ['React-Native', '70%'], ['Photoshop / Illustrator', '90%']
						].map(([name, pct]) => (
							<div key={name} className="card">
								<div className="flex items-center justify-between mb-2">
									<span className="font-medium">{name}</span>
									<span className="text-sm opacity-80">{pct}</span>
								</div>
								<div className="w-full h-2 bg-white/10 rounded">
									<div className="h-2 bg-blue-600 rounded" style={{ width: pct }} />
								</div>
							</div>
						))}
					</>
				)}
				{active === 'Experience' && (
					<div className="card md:col-span-2">
						<h3 className="text-xl font-semibold mb-1">Jt-Creative Head</h3>
						<p className="text-sm opacity-80">CSI KJSCE · 2019-2020</p>
						<p>Designed CODE WAR 2.0 problems, managed Hackathon TechNext 2.0, created posters and artworks.</p>
					</div>
				)}
			</div>
		</div>
	);
}


