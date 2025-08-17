
## **Elastic Block Store (EBS)**

* Cloud-based **durable, high-performance block storage** for EC2.
* Works like a **virtual hard drive** for EC2.
* **One EC2 ↔ multiple EBS volumes**, but **one EBS volume ↔ one EC2 at a time**.
* **Region & AZ specific** with built-in redundancy (replicated within AZ).

### Key Features

* **Volume Types**: gp2/gp3 (general), io1/io2 (provisioned IOPS), st1 (throughput optimized), sc1 (cold HDD).
* **Encryption**: Optional (not by default) – covers data at rest, in transit, and snapshots.
* **Snapshots**:

  * Backup of volume (can restore in same/different AZ/region).
  * Create new volumes or instances from snapshots.
  * Snapshots can be copied across regions.
* **Scalability**: Volumes can be **increased (not decreased)** without stopping the instance.
* **Delete on Termination**: By default, volume is deleted when instance is terminated (can disable).
* **Monitoring**: Metrics available via CloudWatch.

### Lifecycle Management

* **EBS Lifecycle Manager**: Automates snapshot creation, retention, and cross-region copy.
* Requires **tags** on volumes.
* No extra charge for the service (only snapshot storage costs).
* **Recycle Bin**: Retains deleted snapshots for a defined period (extra cost).

### Best Practices

* Detach volume before deleting.
* Always unmount volumes after use (`umount`).
* Use snapshots for backup, migration, and disaster recovery.

---
