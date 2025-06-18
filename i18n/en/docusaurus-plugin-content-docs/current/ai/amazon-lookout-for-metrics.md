---
sidebar_position: 1
---

# Amazon Lookout for Metrics

## What is it?
A machine learning service that automatically detects anomalies (outliers) in your business and operational data and helps determine their root causes.

## What is it for?
Continuously monitor business and operational performance, identify unusual variations in important metrics, and alert about issues so you can remediate them quickly.

## Use Cases
- Monitoring sales and revenue metrics to detect unexpected drops or spikes
- Detecting anomalies in website or application conversion rates
- Monitoring application performance metrics (e.g., latency, errors) to identify issues
- Analyzing marketing data to detect unusually performing campaigns
- Identifying supply chain or operational issues

## Key Points
- **Automatic Anomaly Detection:** Uses machine learning to identify unusual patterns in data
- **Root Cause:** Helps determine the root cause of anomalies, providing actionable insights
- **Fully Managed:** No machine learning expertise required to use the service
- **Data Sources:** Connects to various data sources including Amazon S3, Redshift, RDS, and SaaS (Salesforce, Google Analytics)
- **Alerts:** Sends alerts to channels like Amazon SNS, AWS Lambda, or PagerDuty
- **Feedback:** Allows providing feedback on detected anomalies to improve model accuracy

## Comparison with Traditional Threshold-Based Monitoring
- **Amazon Lookout for Metrics:** Uses machine learning to detect complex and subtle anomalies that might be missed with static thresholds. Adapts to constantly changing data patterns and reduces false positives, providing more accurate and actionable insights.
- **Traditional Threshold-Based Monitoring:** Relies on predefined thresholds that can be difficult to maintain and adjust, especially for metrics with seasonal patterns or trends. Can generate many false positives or miss important anomalies that don't exceed thresholds. 