export const studycases = [
  {
    id: 4,
    info: {
      title: "Bubbles – A Modern Chat Experience",
      overview: "Bubbles is a sleek, modern chat application designed to provide seamless and engaging communication between users. The app focuses on simplicity, accessibility, and smooth user interaction while incorporating essential features like real-time messaging, contact management, and user authentication.",
      problemStatement: "In an era where instant messaging apps dominate communication, many platforms either lack intuitive UI/UX or are overloaded with unnecessary features. Bubbles aims to bridge this gap by offering a minimalist yet powerful chat experience, ensuring fast and hassle-free conversations.",
      objectives: [
        "Design an intuitive chat experience with a clean and modern UI.",
        "Implement secure user authentication and profile management.",
        "Enable seamless real-time messaging and contact organization.",
        "Provide a responsive and accessible dark mode toggle for user preference.",
        "Ensure password recovery and account security functionalities."
      ],
      features: {
        authentication: "User login, signup, and password reset with secure authentication.",
        messaging: "Real-time messaging with an intuitive chat interface.",
        contacts: "Ability to add and manage contacts effortlessly.",
        profileManagement: "Users can edit their profile details and switch between dark and light modes.",
        security: "Secure authentication and password recovery options."
      },
      technologiesUsed: [
        "React Native for the front-end mobile app.",
        "Firebase for authentication, real-time database, and notifications.",
        "Node.js for backend services (if applicable)."
      ],
      challenges: [
        "Creating a lightweight and visually appealing UI that enhances user engagement.",
        "Ensuring smooth real-time updates without performance issues.",
        "Implementing strong security measures while maintaining a seamless user experience."
      ],
      outcome: "Bubbles successfully delivers a minimal yet powerful chat experience, emphasizing usability and efficiency. The app provides a secure and smooth communication channel for users while maintaining an aesthetically pleasing design."
    }
  },
  {
    id: 6,
    info: {
      title: "Musalah – A Digital Platform for Organizing Quran Sessions & Student Engagement",
      overview: "Musalah is a smart platform designed to help university students and Quran teachers organize, track, and stay informed about Quran memorization and Tajweed sessions held in the university residence’s prayer area. The app facilitates planning, progress tracking, and communication between students and instructors.",
      problemStatement: "Managing Quran memorization and Tajweed sessions in a university residence can be challenging due to the lack of a centralized system for scheduling, progress tracking, and communication. Musalah aims to bridge this gap by offering an organized and accessible platform that keeps students and teachers informed and engaged.",
      objectives: [
        "Provide a structured system for scheduling and organizing Quran sessions.",
        "Allow students to track their progress in memorization and Tajweed learning.",
        "Enable teachers to monitor student attendance and progress efficiently.",
        "Deliver real-time updates about activities, events, and session schedules.",
        "Facilitate seamless communication between students and teachers."
      ],
      features: {
        sessionScheduling: "Teachers can create and manage Quran sessions with scheduled dates and times.",
        progressTracking: "Students can log their progress in memorization and Tajweed learning.",
        announcements: "A dedicated section for posting updates about events, schedule changes, and important notices.",
        attendanceManagement: "Teachers can mark attendance and track student participation.",
        notifications: "Automated alerts for upcoming sessions, announcements, and progress updates."
      },
      technologiesUsed: [
        "React Native for a smooth and responsive mobile experience.",
        "Firebase for real-time data management, authentication, and notifications.",
        "Node.js for backend services supporting scheduling and data tracking."
      ],
      challenges: [
        "Ensuring an intuitive and user-friendly UI that simplifies session management.",
        "Providing an efficient way to track student progress while respecting privacy.",
        "Implementing real-time updates and notifications without overwhelming users."
      ],
      outcome: "Musalah successfully enhances the organization of Quran sessions within university residences, allowing teachers and students to efficiently plan, track, and stay connected with their learning progress and activities in the prayer area."
    }
  }
  ,
  {
    "id": 7,
    "info": {
      "link": 'https://hamida2004.github.io/medhub/',
      "title": "MidHub – A Collaborative Study Resource Platform",
      "overview": "MidHub is a dedicated platform designed to facilitate the sharing of high-quality study resources among Algerian students in the fields of Medicine, Pharmacy, and Dental studies. By leveraging Google Drive integration, MidHub ensures a seamless and organized way for students to access verified educational materials.",
      "problemStatement": "Many students struggle to find reliable study materials, leading to inefficient learning and redundant efforts in gathering resources. Existing platforms either lack proper quality control or are overloaded with unnecessary features like forums and discussions. MidHub aims to solve this by providing a simple, well-organized, and verified repository of academic documents.",
      "objectives": [
        "Create a centralized and structured platform for sharing academic resources.",
        "Ensure quality control by manually verifying all shared materials before publication.",
        "Simplify access to study resources without unnecessary distractions like forums or discussions.",
        "Provide an easy-to-use and lightweight platform with Google Drive integration.",
        "Cater specifically to Algerian students in Medicine, Pharmacy, and Dental studies."
      ],
      "features": {
        "resourceSharing": "A structured repository categorized by specialization and study year.",
        "manualVerification": "All documents are reviewed before being published to ensure quality and reliability.",
        "googleDriveIntegration": "Users can access shared resources directly from Google Drive, ensuring easy storage and retrieval.",
        "streamlinedAccess": "A simple, distraction-free interface focused solely on study materials.",
        "specializationCategorization": "Resources are organized by academic field (Medicine, Pharmacy, Dental) and study level."
      },
      "technologiesUsed": [
        "React for the front-end web interface.",
        "Firebase for authentication and data management.",
        "Google Drive API for document storage and retrieval.",
        "Node.js for backend services (if applicable)."
      ],
      "challenges": [
        "Ensuring a balance between ease of access and document verification.",
        "Keeping the platform lightweight while integrating Google Drive efficiently.",
        "Maintaining high-quality standards for uploaded content without slowing down the process."
      ],
      "outcome": "MidHub provides a highly efficient, well-organized, and distraction-free platform for Algerian medical students to access quality study materials. The manual verification system ensures content reliability, making it a trusted academic resource."
    },

  }
  ,
  {
    "id": 8,
    "info": {
      "title": "Smart Infra – Predictive Monitoring for Telecom Infrastructure",
      "link": 'https://hamida2004.github.io/nest_competition_front/#/dashboard',
      "overview": "Smart Infra is an intelligent monitoring solution developed during a 4-day hackathon organized by the Institute of Autonomous Systems in Sidi Abdallah, Algiers. The project tackles energy efficiency, equipment failure prediction, and data visualization for telecom infrastructure. It combines IoT data, machine learning, and a real-time web interface to provide actionable insights and reduce system downtimes.",
      "problemStatement": "Telecom operators face costly downtimes due to late detection of hardware issues and poor real-time visibility into infrastructure performance. Traditional maintenance often relies on manual inspection, which is inefficient and reactive rather than preventive.",
      "objectives": [
        "Design a predictive maintenance model using machine learning to detect anomalies in telecom equipment.",
        "Build a real-time web dashboard for monitoring sensor data and model predictions.",
        "Enable early alerts to reduce equipment failure risks and optimize maintenance costs.",
        "Securely integrate all components from data acquisition to cloud processing and UI display.",
        "Make the system intuitive for both technical and non-technical users."
      ],
      "features": {
        "predictiveMaintenance": "A machine learning model that learns from historical data and predicts potential hardware failures based on sensor input (e.g., temperature, voltage, vibration).",
        "realTimeDashboard": "Web-based dashboard visualizing sensor readings, ML predictions, and alerts in real time.",
        "systemIntegration": "End-to-end connectivity from IoT sensors to cloud and web interface, including API backend and Firebase-based real-time updates.",
        "secureAccess": "Authentication and secure data handling via Firebase Authentication.",
        "collaborativeDesign": "Built by a multidisciplinary team focusing on both backend and frontend layers to ensure robustness and usability."
      },
      "technologiesUsed": [
        "Machine Learning (Python) for predictive analytics.",
        "Firebase for authentication, real-time database, and hosting.",
        "React.js for the frontend dashboard.",
        "IoT devices for sensor data collection.",
        "RESTful APIs for backend communication and data processing."
      ],
      "challenges": [
        "Designing a predictive model with limited historical data during a hackathon timeframe.",
        "Integrating real-time IoT data smoothly into a web-based dashboard.",
        "Balancing system security, usability, and live updates.",
        "Ensuring UI clarity for both engineers and non-technical stakeholders.",
        "Time-constrained deployment of a full-stack system from scratch in 4 days."
      ],
      "outcome": "Smart Infra delivered a functional prototype that intelligently monitors telecom infrastructure in real time, predicting failures before they occur and offering a clear visualization layer. The project demonstrated the power of purpose-driven tech in solving real-world problems and showcased the potential of cross-domain collaboration."
    }
  }
  ,
  {
    "id": 10,
    "info": {
      "title": "Torabatek – Your Soil, Smarter Decisions",
      "overview": "Torabatek (تُرابك) is an AI- and IoT-powered crop rotation assistant focused on sustainable agriculture. Built during the Oran1 University Hackathon, the solution empowers farmers with intelligent, long-term planting strategies that preserve soil health, reduce nutrient depletion, and promote climate-smart farming.",
      "problemStatement": "Most farmers choose crops based on immediate yield, without considering long-term soil degradation. Existing tools typically suggest the 'best crop for today' without addressing crop rotation or nutrient balance — leading to unsustainable practices.",
      "objectives": [
        "Design an AI model that suggests optimal crops based on soil chemistry, weather, and past crops.",
        "Simulate IoT sensors to stream real-time soil parameters like NPK, pH, moisture, and temperature.",
        "Promote crop rotation strategies that preserve nutrient balance and soil quality.",
        "Provide a simple interface to guide farmers in making sustainable and profitable decisions.",
        "Bridge data science and agriculture to create accessible tools for real-world use."
      ],
      "features": {
        "smartCropRecommendation": "AI model trained on soil parameters and crop history to recommend the best next crop with rotation in mind.",
        "iotDataSimulation": "Sensor simulation using Wokwi to collect and push real-time data (N, P, K, pH, humidity, temperature) to Firebase.",
        "rotationLogic": "Goes beyond short-term optimization by generating intelligent crop rotation cycles.",
        "liveDashboard": "Visual interface showing soil conditions and recommended actions for each plot.",
        "sustainabilityFocus": "Encourages practices that maintain long-term soil fertility and reduce harmful farming habits."
      },
      "technologiesUsed": [
        "Python (for data handling and AI modeling)",
        "Scikit-learn (for training ML models)",
        "Firebase (for real-time database and authentication)",
        "Wokwi (for simulating IoT hardware)",
        "React or Flutter (for the frontend dashboard)"
      ],
      "challenges": [
        "Designing a model that factors in both current soil status and historical crop usage.",
        "Simulating realistic, diverse sensor inputs via cloud-connected virtual hardware.",
        "Aligning AI recommendations with agricultural best practices and sustainability.",
        "Building a clean interface understandable by both engineers and farmers.",
        "Making a scalable proof of concept in a limited hackathon timeframe."
      ],
      "outcome": "Torabatek successfully demonstrated how AI and IoT can enable sustainable farming through intelligent crop rotation. The solution empowers users to make decisions that protect the soil, boost yields, and reduce long-term farming costs — offering a promising leap toward smarter, greener agriculture."
    }
  }
  ,
  {
    "id": 9,
    "info": {
      "title": "Hamsa – Minimal Online Dress Ordering Platform",
      "overview": "Hamsa is a lightweight, static web application that allows users to browse traditional and modern dress designs and place orders online. Built using React and hosted on GitHub Pages, it utilizes Google Sheets as a no-cost backend through Google Apps Script, making it ideal for small businesses or early-stage product validation.",
      "problemStatement": "Many small fashion retailers lack the budget or technical resources to build and maintain an e-commerce system with a backend, database, and admin panel. There’s a need for a low-cost, easy-to-maintain solution for showcasing products and collecting orders online.",
      "objectives": [
        "Provide a clean, mobile-friendly interface for showcasing dress collections.",
        "Enable customers to submit orders directly without needing a backend or database.",
        "Use free and serverless tools (Google Sheets + GitHub Pages) for easy deployment and zero maintenance.",
        "Ensure fast loading, responsive design, and usability for all users.",
        "Build a scalable layout for future enhancements like inventory management and admin panels."
      ],
      "features": {
        "imageGallery": "A dynamic, styled carousel to display dress images with smooth transitions and responsive design.",
        "orderFormIntegration": "A form that collects user order details and automatically submits them to Google Sheets using Google Apps Script.",
        "staticHosting": "The entire application is deployed via GitHub Pages, ensuring no server costs.",
        "noBackendRequired": "All data handling is done through serverless scripts connected to Google Sheets.",
        "responsiveDesign": "UI adapts well to both mobile and desktop, built with styled-components and Bootstrap."
      },
      "technologiesUsed": [
        "React.js for the user interface",
        "React Router for page navigation",
        "Styled-components and Bootstrap for styling",
        "Google Sheets API + Google Apps Script for order data collection",
        "GitHub Pages for static hosting"
      ],
      "challenges": [
        "Webpack’s require.context is not supported on GitHub Pages/Vite.",
        "Needed to manually import images instead of dynamic imports.",
        "Handling form validation and submission without a backend or database.",
        "Designing a form submission pipeline using only Google services.",
        "Maintaining a clean UX with limited resources and no state management tools."
      ],
      "outcome": "Hamsa successfully delivers a minimal yet elegant solution for small-scale fashion businesses to collect online orders. It runs entirely on free tools, requires no backend, and can be extended in the future to support more features like admin dashboards or inventory tracking. The project proves the effectiveness of serverless static architecture for low-budget e-commerce needs.",
      "link": "https://hamida2004.github.io/hamsa"
    }
  }


]