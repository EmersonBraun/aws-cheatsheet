---
sidebar_position: 4
---

# AWS Transfer Family

## What is it
A fully managed file transfer service that enables you to transfer files into and out of AWS storage services using SFTP (SSH File Transfer Protocol), FTPS (File Transfer Protocol over SSL/TLS), and FTP (File Transfer Protocol).

## What it's for
Modernize and simplify managed file transfers, allowing you to use your existing FTP clients to interact with AWS storage (Amazon S3 and Amazon EFS).

## Use cases
- Migrating files from legacy systems to AWS
- Secure file sharing with partners and customers
- Integration with existing workflows that use FTP
- File backup and recovery
- Content distribution and software updates

## Key points
- **Supported protocols:** SFTP, FTPS, and FTP
- **AWS storage integration:** Amazon S3 and Amazon EFS
- **Authentication:** Integration with IAM, Active Directory, and custom identity providers
- **Fully managed:** AWS handles the file transfer infrastructure
- **Scalable:** Supports thousands of concurrent users and transfers
- **Security:** Encryption in transit and at rest

## Comparison
- **AWS Transfer Family:** Offers a managed and modern solution for file transfers while maintaining compatibility with traditional protocols. Ideal for organizations that need to modernize their file transfers without changing their existing workflows.
- **Self-managed FTP servers:** Require infrastructure maintenance, security configuration, and user management. Can be more flexible for very specific use cases but require more operational effort. 