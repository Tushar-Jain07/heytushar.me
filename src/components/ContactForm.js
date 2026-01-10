import { useState } from 'react';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [status, setStatus] = useState('');
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const newErrors = {};
		
		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}
		
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email';
		}
		
		if (!formData.subject.trim()) {
			newErrors.subject = 'Subject is required';
		}
		
		if (!formData.message.trim()) {
			newErrors.message = 'Message is required';
		} else if (formData.message.trim().length < 10) {
			newErrors.message = 'Message must be at least 10 characters';
		}
		
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
		// Clear error for this field when user starts typing
		if (errors[name]) {
			setErrors(prev => ({
				...prev,
				[name]: ''
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if (!validateForm()) {
			return;
		}

		setStatus('sending');

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});
			if (res.ok) {
				setStatus('success');
				setFormData({
					name: '',
					email: '',
					subject: '',
					message: ''
				});
				setTimeout(() => { setStatus(''); }, 5000);
			} else {
				setStatus('error');
				setTimeout(() => { setStatus(''); }, 5000);
			}
		} catch (error) {
			setStatus('error');
			setTimeout(() => { setStatus(''); }, 5000);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
			<div className="grid md:grid-cols-2 gap-6 mb-6">
				<div>
					<label htmlFor="name" className="block text-sm font-medium mb-2">
						Name *
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className={`w-full px-4 py-3 bg-gray-800 border ${
							errors.name ? 'border-red-500' : 'border-gray-700'
						} rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
						placeholder="Your Name"
					/>
					{errors.name && (
						<p className="text-red-500 text-sm mt-1">{errors.name}</p>
					)}
				</div>

				<div>
					<label htmlFor="email" className="block text-sm font-medium mb-2">
						Email *
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className={`w-full px-4 py-3 bg-gray-800 border ${
							errors.email ? 'border-red-500' : 'border-gray-700'
						} rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
						placeholder="your.email@example.com"
					/>
					{errors.email && (
						<p className="text-red-500 text-sm mt-1">{errors.email}</p>
					)}
				</div>
			</div>

			<div className="mb-6">
				<label htmlFor="subject" className="block text-sm font-medium mb-2">
					Subject *
				</label>
				<input
					type="text"
					id="subject"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
					className={`w-full px-4 py-3 bg-gray-800 border ${
						errors.subject ? 'border-red-500' : 'border-gray-700'
					} rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
					placeholder="What is this about?"
				/>
				{errors.subject && (
					<p className="text-red-500 text-sm mt-1">{errors.subject}</p>
				)}
			</div>

			<div className="mb-6">
				<label htmlFor="message" className="block text-sm font-medium mb-2">
					Message *
				</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					rows="6"
					className={`w-full px-4 py-3 bg-gray-800 border ${
						errors.message ? 'border-red-500' : 'border-gray-700'
					} rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none`}
					placeholder="Your message here..."
				/>
				{errors.message && (
					<p className="text-red-500 text-sm mt-1">{errors.message}</p>
				)}
			</div>

			<div className="text-center">
				<button
					type="submit"
					disabled={status === 'sending'}
					className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
						status === 'sending'
							? 'bg-gray-600 cursor-not-allowed'
							: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 shadow-lg hover:shadow-xl'
					}`}
				>
					{status === 'sending' ? (
						<>
							<svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
									fill="none"
								/>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								/>
							</svg>
							Sending...
						</>
					) : (
						<>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
							</svg>
							Send Message
						</>
					)}
				</button>
			</div>

			{status === 'success' && (
				<div className="mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-center">
					<p className="text-green-400">Message sent successfully! I&apos;ll get back to you soon.</p>
				</div>
			)}

			{status === 'error' && (
				<div className="mt-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-center">
					<p className="text-red-400">Something went wrong. Please try again or email me directly.</p>
				</div>
			)}
		</form>
	);
}
