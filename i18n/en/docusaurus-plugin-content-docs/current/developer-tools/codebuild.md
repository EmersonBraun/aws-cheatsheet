---
sidebar_position: 1
---

# AWS CodeBuild

## What is it
A fully managed continuous integration service that compiles source code, runs tests, and produces software packages ready for deployment.

## What it's for
Automate the software build process, eliminating the need to provision, manage, and scale your own build servers.

## Use cases
- Source code compilation and unit test execution
- Generation of deployment artifacts (e.g., JAR, WAR files, Docker images)
- Integration with CI/CD (Continuous Integration/Continuous Delivery) pipelines
- Execution of integration tests and security tests
- Building serverless and containerized applications

## Key points
- **Fully managed:** AWS handles the build infrastructure, scalability, and availability
- **Pre-configured build environments:** Supports multiple programming languages and frameworks
- **Scalability:** Automatically scales to handle build volume
- **Pay-as-you-go:** You only pay for the compute time used for your builds
- **Integration:** Integrates with AWS CodePipeline, AWS CodeCommit, Amazon S3, and other AWS services
- **Buildspecs:** Allows defining build steps in a `buildspec.yml` file

## Comparison with Jenkins (self-managed)
- **AWS CodeBuild:** A managed service that eliminates the operational overhead of maintaining a build server. Ideal for those seeking a serverless, fully managed CI solution
- **Jenkins (self-managed):** An open-source CI/CD tool that offers great flexibility and customization, but requires users to provision, configure, and maintain their own Jenkins servers. Can be more complex to scale and manage at large scale 