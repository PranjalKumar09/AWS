
## **Amazon Machine Image (AMI)**

An **AMI** is a pre-configured template containing all necessary information to launch an EC2 instance in AWS.

### **Includes**

* **Operating System** (Linux, Windows, etc.)
* **Application servers** (e.g., Apache, Nginx)
* **Pre-installed software & configurations**

### **Key Points**

* Launch EC2 instances **directly from AMIs** for consistent, pre-defined setups.
* Create **custom AMIs** to include specific software or settings for rapid replication.
* Reduces the need for manual configuration across multiple instances.

### **Types of AMIs**

1. **Public AMIs** – Available to all, provided by AWS (e.g., Quick Starts).
2. **Private AMIs** – Created by user, accessible only within account or shared with specific accounts.
3. **Paid / Marketplace AMIs** – Third-party images for software, databases, or pre-configured environments.

### **Use Cases of Paid/Marketplace AMIs**

* **Rapid Deployment**: Pre-configured stacks like LAMP eliminate manual setup.
* **Scalability & Load Balancing**: Easily scale instances with AWS and distribute requests via ELB.
* **Cost Efficiency**: Pay only for infrastructure and software in use.

### **AMI Catalog**

* Browse available AMIs in the AWS catalog.
* Testing: flexible; **Production**: ensure alerting and compliance.

---

## **Creating Custom AMIs**

* **Template Concept**:

  * **Purpose**: Reusable blueprint for launching instances
  * **Content**: AMI, instance type, security groups, configuration
  * **Reusability**: Launch multiple instances consistently
  * **Use Case**: Auto-scaling, spot instances, standardized environments
  * **Versioning**: Maintain multiple versions for different configurations

* **AMI Snapshot**:

  * **Purpose**: Capture OS, apps, configurations, and data
  * **Reusability**: Launch new instances replicating the captured image
  * **Use Case**: Backup, replication, migration across regions
  * **Versioning**: Point-in-time capture of the instance

* **Scope**: Includes installed apps, environment variables, network settings, DNS, users, firewall settings—essentially a full snapshot of the instance at creation time.

* **Launching from AMI**: Instance boots as an **exact clone** of the original, with all software and settings intact.

---

## **EC2 Image Builder**

* Automates **creation, testing, and deployment of AMIs**.
* Can run on **schedule**: daily, weekly, monthly.
* Functions like a **pipeline**, helping catch errors early.
* Free to use.

---

### **Optional Cleanup Example (before creating AMI)**

```bash
#!/bin/bash
# Remove SSH keys
rm -rf /.ssh/authorized_keys
# Clear credentials & history
rm -rf ~/.aws/credentials ~/.git-credentials ~/.bash_history
# Clean logs & temp files
rm -rf /var/log/* /tmp/* /var/tmp/*
# Remove user accounts
deluser tempuser --remove-home
# Lock root account
passwd -l root
# Remove app configs (example: nginx)
rm -rf /etc/nginx/nginx.conf
```

---
