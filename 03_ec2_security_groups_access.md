

## **Security Groups**

* Act as **virtual firewalls** that control inbound and outbound traffic for EC2 instances.
* Region-specific, **allow-only rules** (no deny).
* By default:

  * **Inbound**: all blocked
  * **Outbound**: all allowed
* Rules can specify:

  * **Protocols** (HTTP, HTTPS, SSH, etc.)
  * **Ports** (e.g., 80 for HTTP, 22 for SSH)
  * **Source IPs/ranges**
* Outbound response traffic is **automatically allowed** if inbound is permitted.
* Created automatically with instances, but you can create custom ones or change via **Actions > Change Security Group**.

### Common Ports

* HTTP – 80 (unencrypted web traffic)
* HTTPS – 443 (encrypted web traffic)
* SSH – 22 (Linux/Unix remote access)
* RDP – 3389 (Windows remote access)
* FTP – 21 (unsecured file transfer)
* SFTP – 22 (secure file transfer)
* SMTP – 25 (email sending)
* MySQL – 3306 (database)
* PostgreSQL – 5432 (database)
* DNS – 53

---

## **Accessing EC2**

1. **Browser Connect**: via EC2 console “Connect” option.
2. **SSH Access** (Linux/Unix):

   ```bash
   chmod 400 "mywebserver-key.pem"
   ssh -i "mywebserver-key.pem" ubuntu@<public-dns>
   ```

* For short-term needs, **terminate instance** when done.

---

## **Instance Types (Use Cases)**

* **Small website/blog** → t3.micro / t3.small (general purpose)
* **E-commerce app (higher traffic)** → m5.large / m5.xlarge (general purpose)
* **Real-time video rendering/streaming** → g5.12xlarge / g5.24xlarge (accelerated computing)
* **In-memory DB, analytics** → r6g.16xlarge / x2idn.32xlarge (memory optimized)

---

## **EC2 Purchasing Options**

1. **On-Demand**

   * Pay per second/hour, no commitment.
   * Flexible but costly.
   * Use: short-term, testing, unpredictable traffic.

2. **Reserved Instances (RIs)**

   * Up to 75% cheaper, 1–3 year commitment.
   * Payment: All upfront / Partial / None.
   * Use: steady workloads.

3. **Spot Instances**

   * Cheapest (up to 90% off).
   * AWS may terminate anytime.
   * Use: batch jobs, fault-tolerant workloads, CI/CD.

4. **Savings Plans**

   * Up to 72% discount, 1–3 year commitment.
   * Covers EC2, Lambda, Fargate.
   * Types:

     * **Compute Savings Plan** (any instance type/region)
     * **EC2 Instance Savings Plan** (specific family & region)

---

Would you like me to also turn this into a **well-formatted 1–2 page reference PDF** (like a quick study guide/cheat sheet)?
