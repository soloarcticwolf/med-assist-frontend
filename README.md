### Med Assist App - Frontend
This document outlines the frontend setup and features for the Med Assist application. Med Assist is a comprehensive web application designed to help users identify medicine strips using image analysis, provide detailed information about identified medications, and keep a personalized history of scanned medicines.

✨ Features
Medicine Strip Analysis Interface: A user-friendly interface to upload images of medicine strips for analysis.

Intelligent Confirmation: Provides a confidence score for identified medicines and allows users to confirm or rescan.

Detailed Medicine Information Display: Presents comprehensive details about medicines (common names, brands, uses, doses, side effects, price, notes) in an easy-to-understand modal.

Personalized Scan History Dashboard: Authenticated users can view a dashboard listing all their previously scanned and confirmed medicines with scan times in a clean, row-based layout.

User Authentication: Secure user sign-in using NextAuth.js with various providers (e.g., Google, GitHub).

Responsive UI: Built with Next.js and Tailwind CSS for a modern, responsive user experience across different devices.

🚀 Technologies Used
Next.js 14/15 (App Router): React framework for building the web application, enabling server and client components.

React: JavaScript library for building interactive user interfaces.

TypeScript: A typed superset of JavaScript, enhancing code quality and developer experience.

Tailwind CSS: A utility-first CSS framework used for highly customizable and rapid UI development.

NextAuth.js: A flexible and secure authentication library for Next.js applications, managing user sessions and OAuth flows.

⚙️ Setup Instructions
1. Prerequisites
Node.js (LTS version recommended)

npm or yarn

2. Frontend Setup (Next.js)
Clone the repository (if applicable) or create your Next.js project directory.

Navigate to your frontend directory:

cd your-project/frontend # or wherever your Next.js project is

Install Node.js dependencies:

npm install # or yarn install

Create a .env.local file in the frontend root directory and add the following environment variables. These are crucial for NextAuth.js and for the frontend to know its associated Firebase project.

AUTH_SECRET="A_STRONG_RANDOM_STRING" # Generate a strong random string (e.g., using `openssl rand -base64 32`)
GOOGLE_CLIENT_ID="YOUR_GOOGLE_OAUTH_CLIENT_ID"
GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_OAUTH_CLIENT_SECRET"
GITHUB_CLIENT_ID="YOUR_GITHUB_OAUTH_CLIENT_ID"
GITHUB_CLIENT_SECRET="YOUR_GITHUB_OAUTH_CLIENT_SECRET"

AUTH_SECRET: Critical for NextAuth.js security. Generate a long, random string.

OAuth Client IDs/Secrets: Obtain these by setting up OAuth applications in the Google Cloud Console (for Google Sign-In) and GitHub Developer Settings (for GitHub Sign-In).

Authorized redirect URIs for your OAuth providers should include http://localhost:3000/api/auth/callback/google and http://localhost:3000/api/auth/callback/github (and your deployment URL if applicable).


Ensure Node.js Runtime for NextAuth API Route:
Verify that your NextAuth API route handler file (typically app/api/auth/[...nextauth]/route.ts or .js) explicitly sets the runtime to Node.js:

// app/api/auth/[...nextauth]/route.ts
export const runtime = 'nodejs'; // Crucial for Firebase Admin SDK operations

Run the Next.js development server:

npm run dev # or yarn dev

The frontend application will be accessible at http://localhost:3000.

▶️ How to Run the App (Frontend Only)
Ensure your backend API is running and accessible. The frontend expects it to be available, typically at http://127.0.0.1:8000.

Start the Next.js frontend: npm run dev (in your frontend directory).

Open your browser and go to http://localhost:3000.

Use the sign-in options provided by NextAuth.js.

Navigate to the /dashboard or /analyze pages to interact with the application features.

🤝 Contributing

💡 Future Enhancements
User Interface Refinements: Continuous improvements to visual design, animations, and user experience.

Image Storage Integration: Integrate a cloud storage solution (e.g., Firebase Storage) to store uploaded medicine strip images, linking them to scan records.

Advanced Search & Filtering: Implement powerful search and filtering capabilities for the personalized scan history.

Notifications System: Add real-time notifications for scan results or important medication alerts.

User Feedback Loop: Develop a mechanism for users to provide feedback on the accuracy of medicine analyses to help refine the system.

Mobile App Development: Explore building companion native mobile applications for iOS and Android platforms.