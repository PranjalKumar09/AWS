
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


Load Balancer

now if multiple instance , load balancer can used
(its in load balancer section)


Types
  Application Load Balancer: Http/Https
  Network Load Balancer: TCP/ UDO
  Gateway Load Balancer


  now request wil go in loadbalancer




then we have to make load balancer


Listening  and routing
  (for where to send)

then we have to make target group, here we have to also select instance we have to distribute 

  then after creating wehn  we copy  dns name in browser then website may come
    if not come , we can trouble shoot through resource map 

  then we should also do (before) register the targer (however can be done later)


  now in resource it will be it should be showing in resource mapping


  now when we go in dns names we absrover different names

  means its distrubuting



  now ehn we sotp one instance ,then it will shoding just one one instance thing


  distribute traffic: so no logger one server got overloaded

  improve availablity: if one server goes down the load balancer automtiacally sends traffic to working servers, ensuring ur application stays available
  
  scales resourcces: helps manage high demand by adding more serversw during peak times & distributing the load

  single point of access needed to be exopse
  HA across AZs (high availability)

    ALB (Application Load Balancer) is perfect for web applications, handling complex HTTP & HTTPs requests (layer 7)

    NLB (Network Load Balancer) is designed for hgihg performance and low latency, perfect for TCP/UDP traffic (ex gaming, financial apps) (Layer 4)

    Gateway Load Balancer (GWLB) helps deploys, scale & manage third party virtual appliances, such as firewalls & monitoring solutions

  
  Creating ELB
    set up ec2 instance (2 or more), install web server & tag them for easy identification
    configure security group, set up security group allowing http & ssh access
    create load balancer, use ec2 dashboard to create an application load balancer & set it as internet facing
    regiser targets: add ec2 instances to target group and configure health checks
    test load balancer: access dns name of load balancer and observe load balancing in action
    explain to students: highlight key concepts like traffic distribution, high availability, and scalability


Auto Scaling Group (ASG)
  We done earlier, 
  this ease us
  ASG is service that automatically adds or removes ec2 instances based on demand to ensure your application is always available
  it helps scale up when more capacity is needed and scale down during low usage to save costs, keeping right no of servers at all time


  Function
    Automatic Scaling: up or down
    miantain instance health: replace unhealthy instances automatically to ensure reliability

    use scaling policies: set rules for scaling based on metrics like cpu usage or request count

    ensure availability: always deigned no of instances running to meet appliances need
    schedule scaling: pre configure scaling activities for specific times (eg traffic peaks)

    distribute instances: across multiple availability zones for high availability
    integrate with elb: attach instances to elastic load balancer to automatically  balance traffic
    optimize costs; scale down during low demand to save on infrastructure costs

    it what does makes instance , on increase load
      but after increasing instance we have to run website too (by AMI)

    
  Steps to create ASG
    launch template or configuration
    create auto scaling group
    select vpc & subnets
    attach load balancer (optional)
    configure scaling policies
    health checks (enable disable)
    add notification (optional)
    review and create 

