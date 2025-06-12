---
sidebar_position: 2
---

# AWS IoT Events

## What is it
A fully managed service that enables detection and response to IoT events from equipment and applications.

## What it's for
Monitor equipment or fleets of devices for failures or changes in operation and trigger actions when these events occur.

## Use cases
- Anomaly detection in industrial equipment (e.g., excessive temperature, abnormal vibration)
- Device status monitoring (e.g., door open/closed, low battery level)
- Triggering alerts and notifications for critical events
- Automation of actions in response to IoT events (e.g., initiating a maintenance process)
- Optimization of business processes based on IoT data

## Key points
- **Event detection:** Allows defining detectors to identify complex events from telemetry data
- **Detector models:** Create detector models to represent the state of equipment or processes
- **Actions:** Triggers actions in other AWS services (Lambda, SNS, SQS, etc.) in response to detected events
- **Serverless:** No servers to provision or manage
- **Integration:** Integrates with AWS IoT Core and other AWS services

## Comparison
- **AWS IoT Events:** Focused on complex event detection and equipment/process state logic. It's ideal for scenarios where you need to monitor state changes and trigger actions based on event patterns.
- **AWS IoT Core (rules):** More focused on routing device messages to other AWS services based on simple rules. While rules can trigger actions, IoT Events offers more advanced capability for modeling states and detecting complex events. 