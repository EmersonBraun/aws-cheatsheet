---
sidebar_position: 1
---

# AWS CodePipeline

## What is it
A fully managed continuous delivery service that automates the build, test, and deployment phases of your software release process.

## What it's for
Modeling, visualizing, and automating the software release workflow, from code commit to production deployment, ensuring fast and reliable deliveries.

## Use cases
- Automating CI/CD (Continuous Integration/Continuous Delivery) pipelines
- Automated deployment of applications to development, testing, and production environments
- Orchestrating different development tools (e.g., CodeCommit, CodeBuild, CodeDeploy, Lambda)
- Managing complex release workflows with manual or automatic approvals
- Continuous delivery of microservices and containerized applications

## Key points
- **Fully managed:** No servers to provision or manage
- **Visual workflow:** Allows modeling your pipeline as a visual graph, making it easier to understand and monitor
- **Integration:** Integrates with a wide range of AWS services (CodeCommit, CodeBuild, CodeDeploy, S3, Lambda, ECS, EKS) and third-party tools
- **Automation:** Automates each step of the release process, reducing manual effort and errors
- **Approvals:** Allows configuring manual approvals at any stage of the pipeline
- **Traceability:** Provides detailed history of each pipeline execution

## Comparison with self-managed CI/CD pipelines
- **AWS CodePipeline:** Offers a fully managed continuous delivery service integrated with the AWS ecosystem, simplifying the setup and management of CI/CD pipelines. Reduces operational overhead and allows teams to focus on software development.
- **Self-managed CI/CD pipelines (e.g., Jenkins):** Require installation, configuration, and maintenance of servers, plugins, and integrations, which can be complex and time-consuming. Offer more flexibility and control but with greater operational responsibility. 