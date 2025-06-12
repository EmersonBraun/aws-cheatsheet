---
sidebar_position: 5
---

# Amazon FSx for Windows File Server

## What is it
A fully managed file storage service that provides native Microsoft Windows file shares, with support for the SMB (Server Message Block) protocol.

## What it's for
Facilitate the migration of Windows-based applications and workloads to AWS by providing Windows-compatible file storage that is highly available, durable, and scalable.

## Use cases
- Migration of on-premises Windows file servers to AWS
- Hosting user home directories and corporate file shares
- Support for .NET and other Windows-based applications requiring file storage
- Reducing SQL Server deployment costs (using file shares for database data)
- Simplifying virtual desktops and application streaming

## Key points
- **Windows compatibility:** Offers a fully Windows-compatible file system, including support for NTFS ACLs, Active Directory, and DFS
- **Fully managed:** AWS handles provisioning, patching, backups, and scaling of the file system
- **High availability and durability:** Data is redundantly stored across multiple Availability Zones
- **Active Directory integration:** Allows users to access file shares using their existing domain credentials
- **Data deduplication:** Helps reduce storage costs
- **Automatic backups:** Performs daily automatic backups

## Comparison
- **Amazon FSx for Windows File Server:** Ideal for workloads requiring a native Windows file system and SMB protocol compatibility. Perfect for migrating existing Windows applications to AWS.
- **Amazon EFS:** An NFS-based file system, ideal for Linux workloads and applications requiring shared access to a file system. Not natively compatible with the SMB protocol. 