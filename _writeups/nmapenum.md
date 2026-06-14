---
title: "Network Enumeration with Nmap: HackTheBox"
date: 2026-06-14
summary: "Walkthrough of the Network Enumeration with Nmap module from HackTheBox"
platform: "HackTheBox"
difficulty: "Medium"
tags: [nmap, enumeration, walkthrough]
---


# Network Enumeration with Nmap

## Host Discovery

### Question 1

```nasm
$> sudo nmap 10.129.2.18 -sn -oA host -PE --packet-trace --disable-arp-ping

Starting Nmap 7.80 ( [https://nmap.org](https://nmap.org/) ) at 2020-06-15 00:12 CEST
SENT (0.0107s) ICMP [10.10.14.2 > 10.129.2.18 Echo request (type=8/code=0) id=13607 seq=0] IP [ttl=255 id=23541 iplen=28 ]
RCVD (0.0152s) ICMP [10.129.2.18 > 10.10.14.2 Echo reply (type=0/code=0) id=13607 seq=0] IP [ttl=128 id=40622 iplen=28 ]
Nmap scan report for 10.129.2.18
Host is up (0.086s latency).
MAC Address: DE:AD:00:00:BE:EF
Nmap done: 1 IP address (1 host up) scanned in 0.11 seconds
```

By performing an nmap scan using an ICMP echo request rather than utilising TCP/UDP/ARP we can still gain valuable information about the hosts configuration. As we can see from the TTL value of 128 in the received ICMP packet, the operating system of the host is Windows based machine.

## Host and Port Scanning

### Question 1 & 2

There are several different methods for performing different types of scans, these options give us variability in our enumeration process. By utilising different scan types, and disabling unwanted communications, we can determine different information about the state of the target. 

```nasm
$> nmap -sC -v 10.129.2.49

```

By performing a simple script scan utilising the verbose option, we can see that there are several open TCP ports.

![image.png](/assets/images/nmap/image.png)

The scan also reveals other information about the host, such as the services running on these open ports, which versions they are utilising and other information about the system through utilising nbstat-esque discovery techniques.

This scan also provides us with the answer to the second question through the OS discovery script, which gives us the OS of the host and also its hostname. 

```nasm
smb-os-discovery: 
|   OS: Windows 6.1 (Samba 4.7.6-Ubuntu)
|   Computer name: ***-****-*******
|   NetBIOS computer name: NIX-NMAP-DEFAULT\x00
|   Domain name: \x00
|   FQDN: nix-nmap-default
|_  System time: 2026-06-11T12:11:11+02:00

```

## **Saving the Results**

Nmap has a number of different outputs that can be used to save the results from enumeration scans. This is useful for documentation during penetration testing, but also in the enumeration process, as different scan types can be compared and contrasted to highlight possible avenues of exploitation. This question revolves around converting a completed TCP scan and transforming this data into a HTML report. 

### Question 1

First we complete our scan to see which TCP ports are open.

```bash
$> sudo nmap -oX nmap -p- 10.129.228.63

Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-05-17 09:05 EDT
Nmap scan report for 10.129.228.63
Host is up (0.024s latency).
Not shown: 65528 closed tcp ports (reset)
PORT      STATE SERVICE
22/tcp    open  ssh
80/tcp    open  http
110/tcp   open  pop3
139/tcp   open  netbios-ssn
143/tcp   open  imap
445/tcp   open  microsoft-ds
31337/tcp open  Elite
```

Then with our results file in the XML format, we convert to HTML. 
`xsltproc nmap.xml -o nmap.html`

## **Service Enumeration**

### Question 1

By following the steps provided in the module, we can identify the type of service we are dealing with, when nmaps default process cannot in a process called banner grabbing. 

We start by performing a version scan on all ports to discover which ports are currently open, and if the service they are running is identified. To gain more information, we can manually connect to the service to intercept the banner and analyse the network traffic using tcpdump or Wireshark. 

Here we can see that 1 service is unrecognised on port 31337. 

![image.png](/assets/images/nmap/image%201.png)

Next we can utilise tcpdump to capture network traffic. And we can also utilise netcat to connect to the service. 

```nasm
$> sudo tcpdump -i tun0 host <own-ipL> and <target-ip>
```

```nasm
$> nc -nv <ip> 31337
```

![image.png](/assets/images/nmap/image%202.png)

![image.png](/assets/images/nmap/image%203.png)

We can then see the flag contained within the banner. 

## Nmap Scripting Engine

Nmap includes a wide number of scripts that can be used to identify possible vulnerabilities about the target host. 

### Question 1

To answer this question we utilise the vuln script on port 80 to look for any vulnerabilities to reveal the flag.

```nasm
$> nmap 10.129.45.166 -p 80 --script vuln
```

![image.png](/assets/images/nmap/image%204.png)

A robots.txt file was found, which when accessed using curl we obtain the flag for the question.

![image.png](/assets/images/nmap/image%205.png)

## **Firewall and IDS/IPS Evasion - Easy Lab**

### Question 1

By utilising some of the examples we learned in the previous section, we can start to look into services that are running on the host that will provide us with information about the operating system that is being used by the host.  

```nasm
$> sudo nmap <target> -sA -Pn -n --disable-arp-ping --packet-trace
```

From this scan we can see that port 22, 80 and 10001 are open, with 128 filtered ports. 

![image.png](/assets/images/nmap/image%206.png)

We can then utilise Netcat to try to connect to the ssh service which prompts us with the operating system of the host.

```nasm
nc <target> 22
```

![image.png](/assets/images/nmap/image%207.png)

Another way of approaching this challenge could be to utilise services such as whatweb to determine the version for us, or utilise a trace-route option to analyse some of the traffic to learn more.

## **Firewall and IDS/IPS Evasion - Medium Lab**

### Question 1

The administrators have adjusted their approach and stopped our previous method of identifying service versions.  The client wants to know if we can identify the DNS server version they are using. We can start by performing an initial scan to see the results.

```nasm
sudo nmap 10.129.2.48 -F -sA -Pn -n --disable-arp-ping
```

![image.png](/assets/images/nmap/image%208.png)

We can see that port 53 and port 445 are both filtered, informing us that the IDS/IPS has dropped our packets. We need to get more information about port 53 so we focus our scans on this port. 

![image.png](/assets/images/nmap/image%209.png)

We still don’t find any more information from this scan. We can alter our approach by also making use of a UDP scan to see if the firewall rules implicitly trust DNS traffic from port 53. UDP is the default protocol used for standard name lookups. 

![image.png](/assets/images/nmap/image%2010.png)

From the results we can see that the service is now showing as OPEN, indicating that the traffic is being trusted by the firewall. To further this we can perform further scans utilising nmap scripts to get some information about the service version. It is possible to use the banner script here but the specific DNS name server identifier script is perfect for this scenario.

![image.png](/assets/images/nmap/image%2011.png)

After performing this scan we reveal the version which is our flag for this question. 

## **Firewall and IDS/IPS Evasion - Hard Lab**

### Question 1

For the final lab as part of the Nmap enumeration module, we are again informed about changes to the IDS/IPS systems. The administrator of the network has been sent to a course that lasted a week to better their understanding of IPS/IDS systems. We are tasked with retesting the service to again find out specific versions of running services. 

We begin by performing an initial scan to see if we can identify running services, and find out which service is being spoken about by administrators.

```nasm
$> sudo nmap 10.129.2.47 -sV -Pn --disable-arp-ping --source-port 53
```

![image.png](/assets/images/nmap/image%2012.png)

We can see that port 50000 is open, after a quick search this port is often used for a database. Now we can utilise netcat to connect to the port and find out the flag.

```nasm
$> sudo nc -nv -p 53 <target_ip> 50000
```

![image.png](/assets/images/nmap/image%2013.png)