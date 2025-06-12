---
sidebar_position: 8
---

# AWS Snowball

## What is it
A petabyte-scale data transport service that uses secure physical devices (appliances) to transfer large amounts of data into and out of AWS.

## What it's for
Overcome large-scale data transfer challenges where network bandwidth is limited, expensive, or time-consuming, or to collect and process data in edge environments.

## Use cases
- Migration of large databases, video files, image libraries, or backups to AWS
- Data transfer from remote locations or with limited connectivity
- Collection of data from sensors and IoT devices in remote locations
- Data processing in edge environments with limited connectivity
- Data transfer for regulatory compliance requirements

## Key points
- **Physical devices:** Secure and durable appliances for data transfer
- **Encryption:** Data encrypted in transit and at rest
- **Device types:**
    - **Snowball:** For data transfers up to 80 TB
    - **Snowball Edge:** For data transfer and computing in edge environments
    - **Snowmobile:** For exabyte-scale data transfers
- **Integration:** Works with Amazon S3, Amazon EBS, Amazon Glacier, and other AWS services
- **Tracking:** Real-time tracking of transfer status
- **Security:** Devices with tamper protection and data encryption

## Comparison
- **AWS Snowball:** Provides a physical and secure solution for transferring large volumes of data, ideal for scenarios with limited connectivity or prohibitive network costs. Reduces the time and cost of large-scale data transfer.
- **Internet data transfer:** May be impractical for large volumes of data due to bandwidth limitations, costs, and time. Can take weeks or months to transfer petabytes of data over the internet. 