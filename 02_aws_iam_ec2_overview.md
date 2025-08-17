# AWS IAM (Identity and Access Management)

### Overview

* **IAM** is a global AWS service that helps securely control access to the AWS environment.
* It allows defining **users, groups, roles, and permissions** to control who can access which AWS resources.
* **Root account** is created by default when you open an AWS account.

  * Should never be used for daily tasks or shared with others.
* **Free service**: IAM comes at no additional cost.

---

### IAM Components

1. **Users**

   * Individual accounts created for people needing access to AWS resources.
   * Each user has a unique identity (username/password or access keys).
   * Permissions can be directly assigned or inherited from groups/roles.
   * Changes made by an administrator take immediate effect.

2. **Groups**

   * Collections of users with common permissions.
   * Easier management—assign permissions to the group instead of individual users.

3. **Roles**

   * Temporary credentials/permissions assigned to AWS services or users.
   * Useful for securely managing cross-service access (e.g., EC2 accessing S3).

4. **Policies**

   * JSON documents defining fine-grained permissions.
   * Can be AWS-managed, customer-managed, or inline policies.

5. **Federated Access**

   * Integrates IAM with external identity providers (e.g., Active Directory, SAML, or AWS Cognito).
   * Enables centralized authentication and single sign-on.

---

### Security Enhancements

* **MFA (Multi-Factor Authentication):**
  Adds an extra layer of security requiring two or more verification factors:

  * Something you know (password).
  * Something you have (OTP from authenticator app, hardware key, etc.).
* Supported methods: authentication app, security key, SMS, or device name recognition.

---

### Access Methods

1. **AWS Management Console** – Web-based, graphical interface.
2. **AWS CloudShell/Terminal** – Browser-based shell for CLI access.
3. **AWS CLI (Command Line Interface)** – Scriptable, command-driven access.

   * Requires **access keys** (generated under *Security Credentials*).
   * Setup using `aws configure`.
   * Example: `aws iam list-users` (lists all IAM users).
4. **AWS SDKs & APIs** – Programmatic access for integrating AWS into applications.

---

### IAM Best Practices

* Avoid using the **root account** except for initial setup.
* Use **groups** to assign permissions instead of attaching policies to individual users.
* Enforce **password policies** (e.g., complexity rules) under *Access Management > Password Policy*.
* Enable **MFA** for all users.
* Use **access keys** only when necessary (CLI/SDK), never share them.
* Regularly **audit permissions**:

  * Generate **IAM Credential Reports** (*Access Report > Credential Report*) to review account activity in CSV format.

---

# AWS EC2 (Amazon Elastic Compute Cloud)

### Overview

* **EC2** provides resizable virtual servers (called **instances**) in the cloud.
* Eliminates the need to buy physical hardware—instances can be configured with custom OS, CPU, RAM, storage, and networking.
* EC2 is **region-specific**.

---

### Key Configuration Options

1. **Instance Type** – Defines hardware (CPU, memory, performance class).
2. **AMI (Amazon Machine Image)** – Base image with OS and pre-installed software (Linux, Windows, macOS, etc.).
3. **Storage** – Elastic Block Store (EBS) volumes, customizable size and type.
4. **Security Groups** – Virtual firewalls controlling inbound/outbound traffic.
5. **Networking** – Configure VPC, subnet, public/private IP addresses.
6. **IAM Role** – Attach a role for the instance to securely access AWS resources (e.g., S3).
7. **User Data** – Startup scripts to run when the instance boots (e.g., install Apache).
8. **Elastic IP** – Optional static public IP for consistent access.
9. **Key Pair** – SSH authentication for Linux or RDP for Windows.

   * Must download the private key file at creation.

---

### Instance Lifecycle

* To launch: Click **“Launch Instance”** in the console.
* To modify: Stop the instance → make changes → restart.
* Security considerations:

  * Restrict SSH/RDP access using security groups.
  * Use key pairs (never share private keys).

---

✅ This refined version preserves **all your details** but organizes them into sections with better flow, no redundancy, and clearer structure.

Would you like me to also **add diagrams or quick comparison tables** (e.g., IAM vs Root account, or EC2 configuration steps) as part of these enhanced notes, or should I keep it strictly text-based?
