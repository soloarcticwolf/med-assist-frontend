// app/privacy-policy/page.tsx
'use client' // This is a client component as it's a static content page

export default function PrivacyPolicyPage() {
	return (
		<div className='min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 flex justify-center items-start'>
			<div className='max-w-4xl mx-auto w-full bg-white shadow-xl rounded-lg p-6 sm:p-8'>
				<h1 className='text-4xl font-bold text-gray-800 mb-8 text-center border-b pb-4'>
					{'Med Assist App - Privacy Policy'}
				</h1>

				<p className='text-sm text-gray-600 mb-6 text-center'>
					{'**Last Updated:** June 25, 2025'}
				</p>

				<section className='space-y-6 text-gray-700 leading-relaxed'>
					<p>
						{
							'Your privacy is critically important to us. This Privacy Policy describes how Med Assist ("we," "us," or "our") collects, uses, and discloses your information when you access or use the [Your Platform Name] website and any related services, features, content, or applications (collectively, the "Service").'
						}
					</p>
					<p>
						{
							'By accessing, browsing, creating an account, or otherwise using the Service, you signify your explicit acknowledgment and agreement to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use the Service. Your continued use of the Service after any changes to this Privacy Policy constitutes your acceptance of the revised policy.'
						}
					</p>

					<h2 className='text-2xl font-semibold text-indigo-700 pt-4 pb-2 border-b'>
						{'1. Information We Collect'}
					</h2>
					<p>
						{
							'We collect various types of information in connection with the Service, including:'
						}
					</p>
					<ul className='list-disc list-inside ml-4 space-y-1'>
						<li>
							<strong>{'Personal Information You Provide:'}</strong>{' '}
							{
								'This includes information you provide when you register for an account (e.g., name, email address from OAuth providers like Google or GitHub), or when you interact with features of the Service that require personal input. For example, if the platform allows user profiles, comments, or direct messaging, that content would be included.'
							}
						</li>
						<li>
							<strong>{'Usage Data:'}</strong>{' '}
							{
								'We automatically collect information about your access to and use of the Service, such as your IP address, browser type, operating system, pages viewed, features used, time spent on pages, and referring URLs. This helps us understand how users interact with our Service and improve its functionality.'
							}
						</li>
						<li>
							<strong>{'Content You Generate/Upload:'}</strong>{' '}
							{
								'Information related to the content you create or upload to the Service. [For Med Assist example: If you upload images of medicine strips, the extracted text and analysis results, and the timestamp of the scan will be stored. This includes medicine names identified, probability, and potentially a reference to detailed medicine information.]'
							}
						</li>
						<li>
							<strong>{'Information from Third-Party Services:'}</strong>{' '}
							{
								'If you link or connect to the Service using third-party services (e.g., social media logins), they may send us information such as your registration and profile information from that service.'
							}
						</li>
					</ul>

					<h2 className='text-2xl font-semibold text-indigo-700 pt-4 pb-2 border-b'>
						{'2. How We Use Your Information'}
					</h2>
					<p>
						{
							'We use the information we collect for various purposes, including:'
						}
					</p>
					<ul className='list-disc list-inside ml-4 space-y-1'>
						<li>{'To provide, operate, and maintain the Service.'}</li>
						<li>{'To personalize your experience and improve the Service.'}</li>
						<li>
							{
								'To understand and analyze how you use our Service and to develop new products, services, features, and functionality.'
							}
						</li>
						<li>
							{
								'To communicate with you, including sending you service updates, security alerts, and support messages.'
							}
						</li>
						<li>
							{
								'For internal analytical purposes, such as tracking usage patterns and optimizing performance.'
							}
						</li>
						<li>
							{
								'To detect, prevent, and address technical issues and security incidents.'
							}
						</li>
						<li>{'To fulfill any other purpose for which you provide it.'}</li>
					</ul>

					<h2 className='text-2xl font-semibold text-indigo-700 pt-4 pb-2 border-b'>
						{'3. How We Share Your Information'}
					</h2>
					<p>
						{'We may share your information in the following circumstances:'}
					</p>
					<ul className='list-disc list-inside ml-4 space-y-1'>
						<li>
							<strong>{'With Your Consent:'}</strong>{' '}
							{
								'We may disclose your personal information if you give us your explicit consent to do so.'
							}
						</li>
						<li>
							<strong>{'Service Providers:'}</strong>{' '}
							{
								'We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, customer service, and marketing assistance. These service providers are obligated to protect your information and may not use it for any other purpose.'
							}
						</li>
						<li>
							<strong>{'Legal Requirements:'}</strong>{' '}
							{
								'We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court order or a government agency).'
							}
						</li>
						<li>
							<strong>{'Business Transfers:'}</strong>{' '}
							{
								'In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company, your information may be transferred as part of the transaction.'
							}
						</li>
						<li>
							<strong>{'To Protect Our Rights:'}</strong>{' '}
							{
								'We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our Terms of Service, illegal activities, suspected fraud, or as evidence in litigation in which we are involved.'
							}
						</li>
						<li>
							<strong>{'Aggregated/Anonymized Data:'}</strong>{' '}
							{
								'We may share aggregated or anonymized information (which cannot be used to identify you personally) with third parties for various purposes, including analytics, research, or marketing.'
							}
						</li>
					</ul>

					<h2 className='text-2xl font-semibold text-indigo-700 pt-4 pb-2 border-b'>
						{'4. Data Storage and Security'}
					</h2>
					<p>
						{
							'Your data is stored securely using Google Cloud Firestore. We implement reasonable security measures designed to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.'
						}
					</p>

					<h2 className='text-2xl font-semibold text-indigo-700 pt-4 pb-2 border-b'>
						{'5. Your Choices and Rights'}
					</h2>
					<p>{'You have certain choices regarding your information:'}</p>
					<ul className='list-disc list-inside ml-4 space-y-1'>
						<li>
							<strong>{'Account Information:'}</strong>{' '}
							{
								'You may review, update, or delete certain personal information by logging into your account settings, if available, or by contacting us directly.'
							}
						</li>
						<li>
							<strong>{'Opt-Out of Communications:'}</strong>{' '}
							{
								'You may opt out of receiving promotional emails from us by following the unsubscribe instructions provided in those emails.'
							}
						</li>
						<li>
							<strong>{'Do Not Track:'}</strong>{' '}
							{'Currently, we do not respond to "Do Not Track" signals.'}
						</li>
						<li>
							<strong>{'Data Access/Deletion:'}</strong>{' '}
							{
								'Depending on your jurisdiction, you may have the right to request access to your personal data or request its deletion. Please contact us to exercise these rights.'
							}
						</li>
					</ul>

					<h2 className='text-2xl font-semibold text-indigo-700 pt-4 pb-2 border-b'>
						{'6. Third-Party Links'}
					</h2>
					<p>
						{
							'Our Service may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices or the content of these third-party sites or services. We encourage you to read the privacy policies of any third-party websites or services that you visit.'
						}
					</p>

					<h2 className='text-2xl font-semibold text-indigo-700 pt-4 pb-2 border-b'>
						{"7. Children's Privacy"}
					</h2>
					<p>
						{
							'Our Service is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from a child under 13 without verification of parental consent, we take steps to remove that information from our servers.'
						}
					</p>

					<h2 className='text-2xl font-semibold text-indigo-700 pt-4 pb-2 border-b'>
						{'8. Changes to This Privacy Policy'}
					</h2>
					<p>
						{
							'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. You are advised to review this Privacy Policy periodically for any changes. Your continued use of the Service after any modifications to this Privacy Policy will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.'
						}
					</p>

					<h2 className='text-2xl font-semibold text-indigo-700 pt-4 pb-2 border-b'>
						{'9. Contact Us'}
					</h2>
					<p>
						{
							'If you have any questions about this Privacy Policy, please contact us at:'
						}
					</p>
					<ul className='list-disc list-inside ml-4 space-y-1'>
						<li>{'work.sanwar.hussain@gmail.com'}</li>
					</ul>
				</section>
			</div>
		</div>
	)
}
