# Virtualization and Cloud Computing Overview

## Virtualization
Virtualization enables multiple operating systems (e.g., Linux, Windows) to run concurrently on a single physical machine by sharing resources like RAM, CPU, storage, and network.

### Benefits
- **Cost-Effective**: Eliminates the need for additional hardware for each OS.
- **Multi-OS Support**: Runs multiple OS on one machine via a hypervisor.
- **Resource Efficiency**: Reduces workload, physical space, and energy consumption.
- **Backup and Recovery**: Simplifies backups and recovery using snapshots.

### Hypervisor
A hypervisor is software or firmware that creates and manages virtual machines (VMs), ensuring resource sharing and isolation (issues in one VM don’t affect others).

#### Types of Hypervisors
1. **Type 1 (Bare Metal)**:
   - Runs directly on hardware.
   - Used by cloud providers (e.g., AWS) and enterprise servers for high performance.
2. **Type 2 (Hosted)**:
   - Runs on top of a host OS, suitable for smaller-scale or testing environments.

## Cloud Computing
Cloud computing delivers IT resources (servers, storage, databases, software) over the internet with pay-as-you-go pricing, eliminating the need to own or maintain physical hardware.

### Types of Cloud Computing
1. **IaaS (Infrastructure as a Service)**:
   - Provides fundamental IT resources (networking, compute, storage).
   - Offers high flexibility and control, ideal for IT departments and developers.
   - Example: Like an empty room you can customize.
2. **PaaS (Platform as a Service)**:
   - Manages underlying infrastructure (hardware, OS), allowing focus on application deployment.
   - Streamlines resource procurement, capacity planning, and maintenance.
   - Example: Like a room with pre-installed storage cabinets.
3. **SaaS (Software as a Service)**:
   - Delivers fully managed software, requiring only user interaction.
   - Eliminates concerns about infrastructure or maintenance.
   - Example: Google Sheets or a vending machine for software access.

### Cloud Deployment Models
1. **Public Cloud**: Shared environment for multiple users (e.g., AWS, Azure).
2. **Private Cloud**: Dedicated environment for one organization, offering enhanced control and privacy.
3. **Hybrid Cloud**: Combines public and private clouds for flexibility in data and application movement.

## Amazon Web Services (AWS)
Launched in 2006 as the first major cloud provider, AWS offers over 200 services, including compute, storage, networking, databases, monitoring, and logging.

### Key Features
- **Scalability**: Easily adjusts resources to meet demand.
- **Global Reach**: Operates across multiple regions and availability zones.
- **Reliability**: Ensures high availability and fault tolerance.
- **Security**: Provides robust security features and compliance options.

### Popular AWS Services
- **EC2**: Scalable compute capacity.
- **S3**: Highly durable storage.
- **RDS**: Managed relational database service.
- **Lambda**: Serverless computing for event-driven applications.
- **CloudFront**: Content delivery network for low-latency distribution.

### AWS Infrastructure
- **Availability Zones**: Isolated locations within a region for high availability.
- **Local Zones**: Specialized zones for single-digit millisecond latency, ideal for latency-sensitive applications.

### AWS Console Access
To access the AWS Management Console:
1. Navigate to **Security Credentials** in the user profile.
2. Locate the **Console Login Link** for direct access.
