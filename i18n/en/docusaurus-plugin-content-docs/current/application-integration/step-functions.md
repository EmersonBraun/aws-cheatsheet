---
sidebar_position: 2
---

# AWS Step Functions

## What is it
A serverless workflow service that allows coordinating components of distributed applications and microservices using visual workflows.

## What it's for
Building distributed applications, automating business processes, orchestrating Lambda functions, and coordinating tasks across different AWS services.

## Use cases
- Microservices orchestration
- Business process automation (e.g., order processing, approval workflows)
- Building complex ETL pipelines
- Coordinating machine learning tasks
- Automating incident response workflows

## Key points
- **Visual workflows:** Allows defining workflows as state machines, which can be visualized and monitored
- **Serverless:** No servers to provision or manage
- **Fault tolerance:** Automatically handles errors, retries, and parallelism
- **Integration:** Integrates with over 200 AWS services, including Lambda, EC2, SQS, SNS, etc.
- **Durability:** Workflows can last for days, months, or even years

## Comparison
- **AWS Step Functions vs. AWS Lambda (direct):** Lambda is for serverless function execution, while Step Functions is for orchestrating and coordinating multiple Lambda functions and other services in a complex workflow. Step Functions adds resilience, error handling, and the ability to maintain state between steps.
- **AWS Step Functions vs. AWS Simple Workflow Service (SWF):** Step Functions is the evolution of SWF, offering a more modern and visual approach to workflow orchestration, with less management complexity and better integration with the AWS ecosystem. 