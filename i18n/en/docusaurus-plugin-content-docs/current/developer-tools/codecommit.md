---
sidebar_position: 2
---

# AWS CodeCommit

## What is it
A fully managed and secure version control service that hosts private Git repositories.

## What it's for
Securely storing and managing source code, documents, and other development assets, facilitating collaboration between teams.

## Use cases
- Hosting source code repositories for applications and services
- Collaborating on software development projects
- Version control of documents and configurations
- Integration with CI/CD pipelines (CodePipeline, CodeBuild, CodeDeploy)
- Secure storage of development assets

## Key points
- **Fully managed:** No servers to provision or manage
- **Git compatible:** Uses standard Git, allowing developers to use their existing Git tools
- **Security:** Data encryption in transit and at rest, integration with AWS IAM for granular access control
- **High availability:** Repositories are stored across multiple Availability Zones
- **Scalability:** Automatically scales to meet storage and access needs
- **Integration:** Integrates with other AWS services and development tools

## Comparison with other version control services
- **AWS CodeCommit:** Offers a fully managed and secure version control service integrated with the AWS ecosystem. Ideal for teams already using other AWS services and needing a private and secure version control.
- **Other version control services (e.g., GitHub, GitLab):** May offer additional features like project management, wikis, and third-party tool integration, but may require additional configuration for AWS service integration. 