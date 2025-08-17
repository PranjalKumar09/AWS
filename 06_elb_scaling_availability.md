
## **Elastic Load Balancer (ELB)**

An **ELB** automatically distributes incoming traffic across multiple EC2 instances, improving scalability, availability, and fault tolerance.

### **Key Concepts**

**1. Scalability** – Ability to grow system resources as traffic or users increase:

* **Vertical Scaling (Scale Up)**: Add more CPU/RAM to an existing server.

  * Example: t2.micro → m5.large
* **Horizontal Scaling (Scale Out)**: Add more instances to distribute the load.

  * Example: Add multiple EC2 instances behind a load balancer

**2. High Availability (HA)** – Keep services running with minimal downtime by deploying resources across multiple Availability Zones (AZs).

**3. Elasticity** – Automatically adjust resources based on demand:

* Add resources when traffic increases, remove when demand decreases
* Example: Auto Scaling Groups (ASG)

**4. Load Balancing** – ELB distributes incoming requests evenly across multiple instances to prevent overloading and ensure reliability.

---
