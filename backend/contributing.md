# Contributing to NewsBLG

First off, thank you for considering contributing to NewsBLG! Your help is essential for keeping this project active and improving it.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How Can I Contribute?](#how-can-i-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Enhancements](#suggesting-enhancements)
    - [Submitting Pull Requests](#submitting-pull-requests)
3. [Development Setup](#development-setup)
4. [Style Guides](#style-guides)
    - [Git Commit Messages](#git-commit-messages)
    - [Code Style](#code-style)
5. [Additional Notes](#additional-notes)
    - [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming and inclusive community.

## How Can I Contribute?

### Reporting Bugs

If you find a bug in the project, please open an issue with the following details:

- **Title**: A short and descriptive title of the bug.
- **Description**: A detailed description of the bug.
- **Steps to Reproduce**: Detailed steps to reproduce the issue.
- **Expected Behavior**: What you expected to happen.
- **Actual Behavior**: What actually happened.
- **Screenshots**: Add screenshots if applicable.

### Suggesting Enhancements

Enhancements or new features are always welcome! Please follow these steps to suggest one:

- **Title**: A short and descriptive title of the enhancement.
- **Description**: A detailed description of the proposed enhancement.
- **Use Case**: Explain the use case and why it would be beneficial.

### Submitting Pull Requests

When you're ready to submit a pull request, please follow these steps:

1. **Fork the Repository**
2. **Create a Branch**
    ```sh
    git checkout -b feature/YourFeatureName
    ```
3. **Commit Your Changes**
    ```sh
    git commit -m 'Add some feature'
    ```
4. **Push to the Branch**
    ```sh
    git push origin feature/YourFeatureName
    ```
5. **Open a Pull Request**

Please ensure your pull request adheres to the following guidelines:

- Ensure your code is well documented.
- Write clear and concise commit messages.
- Follow the project’s coding style.

## Development Setup

To set up a development environment, follow these steps:

1. **Clone the Repository**
    ```sh
    git clone https://github.com/yourusername/newsblg.git
    cd newsblg
    ```

2. **Install Dependencies**
    ```sh
    npm install
    ```

3. **Set Up Environment Variables**
    Create a `.env` file in the root directory and add the necessary configuration:
    ```makefile
    OPENAI_API_KEY=your_api_key_here
    NEWS_API_KEY=your_news_api_key_here
    ```

4. **Start the Development Server**
    ```sh
    npm run dev
    ```

For the frontend, navigate to the `client` directory and follow similar steps:

1. **Navigate to Client Directory**
    ```sh
    cd client
    ```

2. **Install Dependencies**
    ```sh
    npm install
    ```

3. **Start the Development Server**
    ```sh
    npm start
    ```

## Style Guides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature").
- Capitalize the first letter of the commit message.
- Keep the commit message short and informative.

### Code Style

- Follow the coding style defined by the project.
- Run linters and formatters before submitting a pull request.

## Additional Notes

### Issue and Pull Request Labels

We use labels to organize and prioritize issues and pull requests. Some common labels include:

- **bug**: Indicates a bug or issue.
- **enhancement**: Indicates a new feature or enhancement.
- **help wanted**: Indicates that help is needed.
- **documentation**: Indicates changes related to documentation.

Thank you for considering contributing to Automatic News Blog! Your contributions are greatly appreciated.
