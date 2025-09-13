import { useState } from 'react';

const tabs = ['Skills'];

export default function ResumeTabs() {
	const [active, setActive] = useState('Skills');

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
				{active === 'Skills' && (
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
						{[
							['React & Next.js', '90%', 'Frontend Development'],
							['Node.js & Express', '85%', 'Backend Development'],
							['Python & Flask', '90%', 'Backend & Data Science'],
							['MongoDB & SQL', '85%', 'Database Management'],
							['JavaScript & TypeScript', '90%', 'Programming Languages'],
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
			</div>
		</div>
	);
}


