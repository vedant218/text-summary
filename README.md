## <a name="introduction">🤖 Introduction</a>

Summarize any kind of article with just one click using the powerful rapidAPI Text Summarization model.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- TypeScript
- Redux Toolkit
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 Sleek User Interface: A modern, intuitive design that enhances user experience by providing easy navigation and a clean layout.

👉 AI-Powered Summarization: Users can input the URL of long-form articles, and the app leverages AI to generate concise, accurate summaries, saving time and effort.

👉 Local Storage for Summary History: The app features a history function that stores summaries locally, enabling users to access, manage, and revisit past summaries with ease.

👉 Clipboard Integration for Easy Sharing: A convenient “Copy to Clipboard” feature allows users to instantly copy summarized content, making sharing and storing summaries effortless.

👉 Optimized API Requests with RTK Query: Built with Redux Toolkit (RTK) Query, the app ensures efficient API requests that fire based on conditions, optimizing data retrieval and enhancing performance.

👉 Code Modularity and Reusability: Follows best practices in code structure and reusability, ensuring maintainability and ease of future development.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/vedant218/text-summary.git
cd text-summary
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_RAPID_API_ARTICLE_KEY=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the Rapid API website.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.
