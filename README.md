# AWS Cheatsheet

A comprehensive and structured guide to AWS services for certification preparation. This project provides a quick and organized reference to major AWS services, focusing on use cases, key points, and comparisons between similar services.

## 🎯 About the Project

This AWS Cheatsheet was developed to be your companion during AWS certification preparation. Each service is presented in a structured format with:

- **Use Cases:** Real-world scenarios and practical applications
- **Key Points:** Essential concepts and important features for exams
- **Comparisons:** Clear differences between similar services

## 🌐 Online Access

The site is available at: [https://emersonbraun.github.io/aws-cheatsheet/](https://emersonbraun.github.io/aws-cheatsheet/)

## 🚀 Technology

This project is built using [Docusaurus](https://docusaurus.io/), a modern static site generator, with support for multiple languages (Portuguese, English, and Spanish).

## 📦 Installation

```bash
yarn
```

## 🛠️ Local Development

```bash
yarn start
```

This command starts a local development server and opens a browser window. Most changes are reflected in real-time without having to restart the server.

### Search (Algolia)

The site uses [Algolia DocSearch](https://docsearch.algolia.com/) for the search bar. If you run `yarn start` or `yarn build` **without** configuring Algolia, you will see:

```text
"algolia.appId" is required. If you haven't migrated to the new DocSearch infra...
```

To fix this, you need to set the Algolia credentials (they are read from environment variables).

**Where to get the credentials:**

1. **DocSearch (recommended for open-source docs)**  
   - Go to [docsearch.algolia.com](https://docsearch.algolia.com/).  
   - Apply for [DocSearch](https://docsearch.algolia.com/apply/) (free for open-source projects).  
   - After approval, Algolia will send you the **Application ID**, **Search-Only API Key**, and **Index name**.

2. **Algolia dashboard (if you already have an account)**  
   - Log in at [dashboard.algolia.com](https://dashboard.algolia.com/).  
   - **Application ID**: in the left sidebar, under “API Keys”.  
   - **Search-Only API Key**: same page, use the “Search-Only API Key” (safe for frontend).  
   - **Index name**: create an index (e.g. `aws-cheatsheet`) and use that name; the project expects `indexName: 'aws-cheatsheet'` in the config.

**How to configure locally:**

Copy `.env.example` to `.env` and fill in your credentials, or export the variables in your shell:

```bash
ALGOLIA_APP_ID=your_application_id
ALGOLIA_API_KEY=your_search_only_api_key
```

The index name is already set in `docusaurus.config.ts` as `aws-cheatsheet`. If your Algolia index has another name, you’ll need to change it in the config.

> **Note:** Do not commit `.env` or real API keys to the repository. Add `.env` to `.gitignore` if it isn’t already.

## 🏗️ Build

```bash
yarn build
```

This command generates static content in the `build` directory and can be served using any static content hosting service.

## 🚀 Deploy

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Without using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## 📚 Content Structure

The project is organized into the following AWS service categories:

- **AI & Machine Learning** - AI and ML services
- **Analytics** - Data analytics services
- **Application Integration** - Application integration services
- **Compute** - Computing services
- **Containers** - Container services
- **Cost Management** - Cost management services
- **Database** - Database services
- **Developer Tools** - Development tools
- **Front-End** - Front-end services
- **Hybrid** - Hybrid services
- **IoT** - Internet of Things
- **Management** - Management services
- **Migration** - Migration services
- **Networking** - Networking services
- **Security** - Security services
- **Serverless** - Serverless services
- **Storage** - Storage services

## 🤝 Contributing

Contributions are welcome! If you find outdated information or want to add new services, feel free to open an issue or send a pull request.

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 👨‍💻 Author

Created by [Emerson Braun](https://www.linkedin.com/in/emerson-braun/)
