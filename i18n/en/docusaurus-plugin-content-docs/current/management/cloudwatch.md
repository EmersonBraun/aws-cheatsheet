---
sidebar_position: 1
---

# Amazon CloudWatch

## What is it
A monitoring and observability service for AWS resources and applications, as well as on-premises applications.

## What it's for
Collect and monitor metrics, collect and monitor log files, and configure alarms to notify about changes in resource performance or availability.

## Use cases
- Monitoring performance of EC2 instances, RDS databases, Lambda functions, etc.
- Collection and analysis of application and service logs
- Creation of custom dashboards to visualize metrics
- Configuration of alarms to notify about metric thresholds (e.g., CPU usage, application errors)
- Automation of actions in response to events (e.g., scaling instances, restarting services)

## Key points
- **Metrics:** Collects metrics from AWS resources and custom applications
- **Logs:** Collects, monitors, and stores application and service logs
- **Alarms:** Allows configuring alarms based on metric thresholds
- **Events:** Allows reacting to AWS resource and application events
- **Dashboards:** Create custom dashboards to visualize monitoring data
- **Fully managed:** AWS handles the monitoring infrastructure

## Comparison
- **Amazon CloudWatch:** Offers a native and fully managed monitoring solution for the AWS ecosystem, with deep integration with other services. Ideal for those seeking a simple and integrated solution to monitor their AWS resources.
- **Third-party tools (e.g., self-managed Grafana, Prometheus):** Offer greater flexibility and customization, plus support for multi-cloud and on-premises environments. However, they require users to manage the monitoring infrastructure. 