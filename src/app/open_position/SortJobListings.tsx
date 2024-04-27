// // import React, { useState } from 'react';
// // import {
// //     Select,
// //     SelectContent,
// //     SelectItem,
// //     SelectTrigger,
// //     SelectValue,
// //   } from "@/components/ui/select"
// //   import { Input } from '@/components/ui/input'
// //   import { Button } from '@/components/ui/button'
// //   import Link from 'next/link'
// //   import Wrapper from '../components/Wrapper'
// //   import Job_box from './Job_box'


// // const JobListings = ({ jobs } : {jobs:any}) => {
// //   const [sortBy, setSortBy] = useState('Sort By...');
// //   const [sortedJobs, setSortedJobs] = useState(jobs);

// //   const handleSortChange = (value:any) => {
// //     setSortBy(value);

// //     let sortedData = [...jobs];

// //     switch (value) {
// //       case 'Job ID (Ascending)':
// //         sortedData.sort((a, b) => a.JOBId.localeCompare(b.JOBId));
// //         break;
// //       case 'Job ID (Descending)':
// //         sortedData.sort((a, b) => b.JOBId.localeCompare(a.JOBId));
// //         break;
// //       case 'Job Title (Ascending)':
// //         sortedData.sort((a, b) => a.head.localeCompare(b.head));
// //         break;
// //       case 'Job Title (Descending)':
// //         sortedData.sort((a, b) => b.head.localeCompare(a.head));
// //         break;
// //       case 'Responsibilities (Ascending)':
// //         sortedData.sort((a, b) => a.description.localeCompare(b.description));
// //         break;
// //       case 'Responsibilities (Descending)':
// //         sortedData.sort((a, b) => b.description.localeCompare(a.description));
// //         break;
// //       default:
// //         // Default sorting or no sorting
// //         break;
// //     }

// //     setSortedJobs(sortedData);
// //   };

// //   return (
// //     <div>
// //       <div className='flex justify-end'>
// //         <div className='justify-end'>
// //           <h2 className='pr-56 justify-end'>Sort By</h2>
// //           <Select>
// //             {/* ... Other Select components */}
// //             <SelectItem value="Sort By..." onClick={() => handleSortChange("Sort By...")}>
// //               Sort By...
// //             </SelectItem>
// //             {/* ... Other SelectItems for different sorting options */}
// //           </Select>
// //         </div>
// //       </div>

// //       {/* Display the sorted job listings */}
// //       {sortedJobs.map((job:any) => (
// //         <div key={job.JOBId}>
// //           {/* Render your job listing components here */}
// //           <p>{job.JOBId}</p>
// //           <p>{job.head}</p>
// //           <p>{job.description}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default JobListings;



// File: SortJobListings.tsx
const JobBox = [
  {
      "JOBId": "Job ID 2024-5602",
      "Loc": "Remote US-(Home Office)",
      "head": "Power Platform Developer - Secret clearance required",
      "description": "IMG is seeking a Software Developer with Azure or MuleSoft experience to join our team providing data solutions for our customer. Work can be performed onsite in West Mifflin, PA or Schenectady, NY. - Design, develop, and implement modern cloud integration solutions using Azure integrations Services (Azure API Management, Azure Logic Apps, Azure Service Bus and Azure Event Grid). - Design, develop, and implement modern on-premises solutions using MuleSoft AnyPoint Platform PCE (API management, automation, and orchestration, and AnyPoint design center). - Help establish a highly collaborative environment that values speed and quality and perform feature development within sprints to support the high company standards. - Develop solutions that are well structured, documented and tested. - Actively participate in meetings"
  },
  {
      "JOBId": "Job ID 2024-5604",
      "Loc": "US-PA-West Mifflin",
      "head": "Software Developer with Azure or MuleSoft Experience (Secret Clearance or higher required)",
      "description": "IMG seeks a Power Platform Developer for a role supporting our customer. The job functions are as follows: - Work with customer's subject matter experts (SME) to understand the functional requirements to meet various operational streamlining needs - Create a developer user guide documenting the custom application, work-flows, and reporting setup for customer. - Develop an end-user guide for customer - Train how to utilize Microsoft Power Platform tools effectively and answer any technical related questions. - Develop a project schedule with associated milestones to complete the Power Platform applications development following completion"
  },
  {
      "JOBId": "Job ID 2024-5601",
      "Loc": "US-NY-Schenectady",
      "head": "System Administrator with Top Secret Clearance",
      "description": "The Systems Administrator supports the High Current Test Facility (HCTF) network administration. This includes administration of network services and storage systems, development of disaster recovery system, installation and configuration of computers and software, including network licensing, basic network development, and implementing requirements such as two-factor authentication. - Provide back-end user support for various Information Technology related problems, including problems associated with Windows servers. - Perform Windows system administration tasks. - Install and configure server operating systems. - Ability and experience in applying and maintaining patch levels and security configurations as well as providing life cycle system upgrades. - Resolve escalated Help Desk issues"
  },
  {
      "JOBId": "Job ID 2024-5600",
      "Loc": "US-MD-Annapolis Junction",
      "head": "Service Desk Specialist Level 2 with TS/SCI/CI Poly, 10pm - 6am",
      "description": "Position Description: Resolves technical problems and answers queries by telephone or self-service ticket in support of internal and/or outside customer computer hardware, software, network, system/application access, and telecommunications systems. Diagnoses, identifies, isolates, and analyzes problems utilizing historical database records. May route calls to product line specialists, application, or system support specialists. Maintains and updates records and tracking databases. Alerts management to recurring problems and patterns of problems.   Essential Job Functions: - Provides first contact and incident resolution to customers with H/W, S/W and application problems includes both customer telephone support as well as electronically - submitted requests - Provides polite and customer friendly service support for proble"
  },
  {
      "JOBId": "2024-5599",
      "Loc": "US-VA-Fairfax",
      "head": "Office Coordinator (Part Time)",
      "description": " Perform general office support to include: - Microsoft Office 365 license management and primary interface between IMG and IT support provider - Laptop, VOIP and printer hardware troubleshooting - I.T. support to include SharePoint and cloud file solutions. - Answer and route phone calls in a professional manner. - Liaison with the Property Management Offices with respect to communications, maintenance, special access requests, janitorial coordination, and event coordination. - Keep an inventory of supplies and restock as needed. - Program and Operations Management support as required - Support calendar, scheduling, and meeting management - Executive Assistant to Chief Operating Officer"
  },
  {
      "JOBId": "Job ID 2024-5600",
      "Loc": "US-VA-Fairfax",
      "head": "Business Operations Analyst",
      "description": " This candidate will work across all business functional areas to meet IMG’s goals and plan, track, and coordinate operational activities. They support improved organizational efficiency, specifically in administrative, programmatic, and business development operations, to accelerate the company’s development and long-term success. They accurately manage an ongoing system of collecting organizational metrics and derive insights from the data they’ve collected to recommend organizational improvements.   Facilities/IT Manager Functions Perform general office IT support to include: - Microsoft Office 365 license management and primary interface between IMG and IT support provider - Laptop, VOIP and printer hardware troubleshooting - Enterprise application support to include SharePoint and cloud file solutions. -"
  },
  {
      "JOBId": "Job ID  2024-5597",
      "Loc": "US-CA-El Segundo",
      "head": "Site Asset Staff with TS/SCI CI Poly",
      "description": "IMG has an opening for Site Asset Staff to support the property management group for our mission-vital customer in Chantilly, VA.   The job duties of the Site Asset Staff are as follows: - Track the removal and addition of equipment to the customer network and to report the updates to the procurement team for updates to the maintenance equipment list  - Develop and maintain the logistic team’s processes and procedures - Assist in the development, as well as monitor and track the logistic teams training plans - Monitor and report on fulfillment of requirements for various customer reporting systems (Confluence, SharePoint, HelpNow - Assist the logistics leads in the management of worldwide logistics operations - Provide support for all customer supply chain management review (SCMR) audits    - Assist and provide inputs"
  },
  {
      "JOBId": "Job ID  2024-5592",
      "Loc": "US-MD-Columbia",
      "head": "IT Field Support Specialist with TS/SCI Poly",
      "description": "- The Hardware Technician provides Tier 2 and 3 on-site and remote supports for computer workstations, servers, printers, peripherals, and teleconferencing equipment. - Conducts sites surveys; assesses and documents current site configuration and user requirements. - Analyzes existing requirements and prepares specifications for hardware acquisitions. Develops hardware installation schedules. - Prepares drawings documenting configuration changes at each site. Prepares site installation and test reports. Trains site personnel in proper use of hardware. Builds specialized interconnecting cables. - Troubleshoot, repair, and test computer workstations, servers, printers, peripherals, and teleconferencing equipment - Install and configure computer workstations, servers, printers, peripherals, and teleconferencing equipment and associat"
  },
  {
      "JOBId": "Job ID 2024-5587",
      "Loc": "US-CO-Colorado Springs",
      "head": "Tier II Network Technician (TS/SCI/CI Poly required)",
      "description": "Information Management Group has an opening for Tier II Technician to support our customer's mission-vital networks Description of Job Duties/Responsibilities:   - The Tier 2 network field technician will support the installation and maintenance of the client LAN/WAN devices. - Respond to and resolve incident tickets - Draft and implement standard network change requests - Provide support to Tier III network engineers for incident management and projects (site surveys, Technical Exchange Meetings (TEMs), and coordinate and install new equipment) - Perform configuration management functions such as update topology drawings, ensure asset management records are accurate, and conduct inventory - Coordinate network operations, maintenance, repairs, or upgrades. - Configure and troubleshoot layer 2 switching (Virtual Local Area Networks (VLANs), Port Security, and Thin Configurations) Salary range: $80,000-$100,000"
  },
  {
      "JOBId": "Job ID 2024-5586",
      "Loc": "US-MD-Columbia",
      "head": "Hardware Technician - (TS/SCI with FSP required)",
      "description": "The Hardware Technician provides Tier 2 and 3 on-site and remote supports for computer workstations, servers, printers, peripherals, and teleconferencing equipment. Conducts sites surveys; assesses and documents current site configuration and user requirements. Analyzes existing requirements and prepares specifications for hardware acquisitions. Prepares engineering plans and site installation Technical Design Packages. Develops hardware installation schedules. Prepares drawings documenting configuration changes at each site. Prepares site installation and test reports. Configures computers, communications devices and peripheral equipment. Trains site personnel in proper use of hardware. Builds specialized interconnecting cables. - Troubleshoot, repair, and test computer workstations, servers, printers, peripherals, a"
  },
  {
      "JOBId": "Job ID 2024-5584",
      "Loc": "US-NY-Schenectady",
      "head": "Data Engineer (Secret Clearance Required)",
      "description": "IMG is seeking individuals with exceptional communication abilities, the capacity to thrive in a dynamic setting, and a strong drive to tackle intricate data challenges. The preferred candidate should possess experience in data engineering, along with a demonstrated history of creating effective data applications. As part of a team of data engineers, the candidate will collaborate on the design, development, testing, documentation, deployment, and management of data systems."
  },
  {
      "JOBId": "Job ID 2024-5581",
      "Loc": "US-PA-West Mifflin | US-NY-Schenectady",
      "head": "Data Engineer (Security Clearance Eligibility Required)",
      "description": "IMG is seeking individuals with exceptional communication abilities, the capacity to thrive in a dynamic setting, and a strong drive to tackle intricate data challenges. The preferred candidate should possess experience in data engineering, along with a demonstrated history of creating effective data applications. As part of a team of data engineers, the candidate will collaborate on the design, development, testing, documentation, deployment, and management of data systems."
  },
  {
      "JOBId": "Job ID 2024-5580",
      "Loc": "US-VA-Chantilly",
      "head": "Network Architecture Engineer with TS/SCI/CI Poly",
      "description": "Information Management Group seeks an experienced Network Architecture Engineer to support our mission-vital customer in Chantilly, VA. Job duties are as follows: - Interpret customer requirements and apply standard design approaches for service delivery. Fully document designs with diagrams, bill of materials, cabling sheets, configurations, and other supporting documents. - Use a private test lab to evaluate new technologies and capabilities, test proposed changes to production networks, and recreate troubleshooting scenarios to support the production enterprise network. - Schedule maintenance windows for migrating user connections from legacy to the modern infrastructure. Transition services with little to no impact on critical data flows. - Provide technical expertise to operations engineers and technicians, supporting fault"
  },
  {
      "JOBId": "Job ID 2024-5575",
      "Loc": "US-ID-Scoville",
      "head": "Database Engineer and IT Support Specialist",
      "description": "IMG is seeking a talented Database Engineer and IT Support Specialist to support our Federal customer. - Develop streamlined data acquisition and management processes - Build data interface to allow users to submit, review, and retrieve facility data - Build and maintain Microsoft Structured Query Language (SQL) Server databases with data Individual will possess a strong background in one or more of the following IT areas: - Database creation and management - Windows Server 2019 System Administration - Web development - Computer diagnostics and troubleshooting - Software deployment"
  },
  {
      "JOBId": "Job ID 2023-5571",
      "Loc": "US-GA-Fort Stewart, GA",
      "head": "Program Manager",
      "description": "Manages task order to ensure that the statement of work is carried out in accordance with specified objectives. Plans and develops methods and procedures for implementing work, directs and coordinates tasks, and exercises control over personnel responsible for execution of the statement of work. Selects personnel according to knowledge and experience. Communicates with employees to explain task order responsibilities and oversees performance. Reviews reports and records of activities to ensure progress is being accomplished toward specified objectives and modifies or changes methodology as required to redirect activities and achieve objectives. Prepares program reports. Controls expenditures in accordance with budget allocations."
  },
  {
      "JOBId": "Job ID 2023-5570",
      "Loc": "US-MD-Fort Meade",
      "head": "Senior Windows System Administrator with TS/SCI Full Scope Polygraph",
      "description": "IMG has an opening for a Windows System Administrator to support the delivery staff by ensuring service levels and objectives are met. The job duties of the Windows System Administrator are as follows: - Administrating day-to-day IT systems to include system availability, backup/restore, deploy/provision, configuration changes, maintaining and patching both physical and virtual. - Perform software installations and upgrades to operating systems and layered software packages. - Schedule installations and upgrades and maintain them in accordance with established IT policies and procedures. - Monitor and tune the system to achieve optimum performance levels. - Monitor vendor announcements/bulletins ensuring the latest patches and upgrades are tested and evaluated and implemented according to customer standards. -"
  },
  {
      "JOBId": "Job ID  2023-5569",
      "Loc": "US-VA-Chantilly",
      "head": "Microsoft Solutions Architect with TS/SCI CI Poly",
      "description": "IMG has an opening for a Microsoft Solutions Architect professional to support our customer in the Defense and National Security Sector.   The job duties of the Microsoft Solutions Architect are as follows:   Develop, plan, implement and manage solutions for the following Microsoft infrastructure: - Active Directory (AD) Roles, Sites, and Services - Active Directory Federation Services (ADFS) - Domain Name System (DNS) Services - Dynamic Host Configuration Protocol (DHCP) Services - Network Time Protocol (NTP) Services - File and Print Services (Shared home directories, roaming profiles, and distributed file systems) - AD security - Windows backup and restoration - Auditing and security policies, procedures, technologies, and tools to support audit requirements. - VMWare virtualized environments and technologies - AD application"
  },
  {
      "JOBId": "Job ID 2023-5568",
      "Loc": "US-MD-Annapolis Junction",
      "head": "Service Desk Specialist Level 2 with TS/SCI",
      "description": "- - Provides first contact and incident resolution to customers with hardware, software, and application problems. Includes both customer telephone support as well as electronically submitted requests - Perform systems administration of desktop systems connected to local and wide area networks. Provide desktop system management/maintenance responsibilities involving account monitoring, account creation, security, Operating System (OS) installation, and other local area system administration related functions. - Monitor systems/networks in real time NOSC environment and initiate fix actions or problem escalation to TierII/TierIII admins. - Provide support for implementation, troubleshooting and maintenance of IT systems. - Manage IT system infrastructure and any processes related to these systems - Provide support to IT"
  },
  {
      "JOBId": "Job ID 2023-5565",
      "Loc": "US-VA-Chantilly",
      "head": "Core Network Engineer with TS/SCI CI Poly",
      "description": "IMG has an opening for Core Network Engineer to support our government customers’ global enterprise networks.    The job duties of the Core Network Engineer are as follows: - Installs, configures, and supports an organization's local area network (LAN), wide area network (WAN), NRO's Internet Network, Intranet and Internet and other data communications systems or a segment of a network system. Maintains network hardware and software. Monitors network to ensure network availability to all system users and perform necessary maintenance to support network availability. May supervise other network support and client server specialists and plan, coordinate, and implement network security measures. - Oversees network control centers. Provides support to projects that involve networks. Evaluates new network technologies and"
  },
  {
      "JOBId": "Job ID 2023-5563",
      "Loc": "US-VA-Chantilly",
      "head": "System Administrator with TS/SCI CI Polygraph",
      "description": "IMG has an opening for a System Administrator to support our government customer’s enterprise networks.                    The job duties of the System Administrator are as follows: - Build, operations, and maintenance of Linux RHEL systems, MS Windows Server systems, virtual environments that include virtual servers and virtual routers, and Oracle Servers - Build, operations, and maintenance of multiple Network Management applications, VCenter which includes the operations and maintenance (O&M) of virtual machine (VM) templates, ESXi hosts, hardware, and Oracle databases - Organizes and directs the configuration and operation of information management systems - Provide the day-to-day system administration to include system and resource optimization, and user assistance - Conduct capacity and performance analysis and provide"
  },








  {
      "JOBId": "Job ID 2023-5561",
      "Loc": "US-VA-Fairfax",
      "head": "Manager, Business Development & Capture (Cyber/I.T.)",
      "description": "  Our talented Manager, BD & Capture supporting our Cyber/I.T. line of business within our DoD and IC customers. Will will execute IMG's strategic growth plan through leading the development of a well-qualified pipeline of opportunities within IMG's customer base.  This role will be responsible for providing the overall plan for managing our business funnel, pulling together the core team, winning task orders, and growing the company. - Full business development life-cycle management to include developing initial contacts and growing relationships with government customers and industry partners. - This role will lead the identification and qualification of opportunities at the top of the opportunity funnel and lead, mentor, manage and develop Business Development executives, specialists, coordinators and writers.  - Devel"
  },
  {
      "JOBId": "Job ID 2023-5560",
      "Loc": "US-CO-Colorado Springs",
      "head": "Service Desk Specialist Level 1 with TS/SCI, Mid Shift",
      "description": "Position Description: Resolves technical problems and answers queries by telephone or self-service ticket in support of internal and/or outside customer computer hardware, software, network, system/application access, and telecommunications systems. Diagnoses, identifies, isolates, and analyzes problems utilizing historical database records. May route calls to product line specialists, application, or system support specialists. Maintains and updates records and tracking databases. Alerts management to recurring problems and patterns of problems.   Essential Job Functions: - Provides first contact and incident resolution to customers with H/W, S/W and application problems includes both customer telephone support as well as electronically - submitted requests - Provides polite and customer friendly service support for proble"
  },
  {
      "JOBId": "Job ID 2023-5559",
      "Loc": "US-CO-Colorado Springs",
      "head": "Service Desk Specialist Level 2 with TS/SCI, Day Shift",
      "description": "Position Description: Resolves technical problems and answers queries by telephone or self-service ticket in support of internal and/or outside customer computer hardware, software, network, system/application access, and telecommunications systems. Diagnoses, identifies, isolates, and analyzes problems utilizing historical database records. May route calls to product line specialists, application, or system support specialists. Maintains and updates records and tracking databases. Alerts management to recurring problems and patterns of problems.   Essential Job Functions: - Provides first contact and incident resolution to customers with H/W, S/W and application problems includes both customer telephone support as well as electronically - submitted requests - Provides polite and customer friendly service support for proble"
  },
  {
      "JOBId": "Job ID 2023-5556",
      "Loc": "US-NC",
      "head": "Senior Database Analyst with TS/SCI",
      "description": " Performs MS SQL Server and other DBMS database and application server administration. - Administers, maintains, develops and implements policies and procedures for ensuring the security, availability and integrity of the Database Management System (DBMS). - Creates and updates SSPs, CKLs and other documentation for the accreditation of the DBMS on classified networks. - Completes performance analysis, tuning, and index maintenance. Adjusts advanced settings of Microsoft SQL Server and other DBMS to optimize functionality. - Builds new Microsoft SQL Server Instances within on-premise architecture collaborating with other teams (Storage, Domain, Systems) to implement industry best practices. - Automates routine administration tasks and updates continuity documents. - Implements and manages Hi"
  },
  {
      "JOBId": "Job ID 2023-5555",
      "Loc": "US-NY-Schenectady",
      "head": "Help Desk Analyst (must be able to obtain a TS Clearance)",
      "description": "IMG is looking for a clearable Help Desk Analyst. Individual must obtain an active DOD Top Secret clearance.  Once approved by customer,  the individual will be responsible for providing help desk services to coordinate and respond to incidents and service requests made by end users, technical staff, and external vendors.    Duties and responsibilities include: - Improve IT customer service and Incident Resolution speed through expanded service hours, self-service abilities, and skilled help desk staff in the areas of industry-standard IT products. - Improve efficiency and effectiveness by adopting supplier-leveraged knowledge databases and best practices in the areas of customer reporting, logging, tracking, resolving of IT Incidents and Service Requests. - Improve efficiency and effectiveness by early identification and addressing of ro"
  },
  {
      "JOBId": "Job ID 2023-5554",
      "Loc": "US-MD-Columbia",
      "head": "Firewall Network Engineer with TS/SCI Full Scope Polygraph",
      "description": "The job duties of the Network Firewall Engineer are as follows:                                                                                                          - Act as a subject matter expert for the customer’s next generation firewall solution. - Maintain firewall operations and document current environment. - Incorporate change management into all processes and procedures. - Creation of technically detailed reports on firewall block lists, device status, change management, hardware/software upgrades, and other areas. - Analyze and evaluate anomalous network and system activity. - Assist in troubleshooting and problem solving a wide variety of client issues. Experience with change control policy and procedures. - An understanding of DOD information assurance policy and regulations.  - Performing analysis of network security needs and contributes to desig"
  },
  {
      "JOBId": "Job ID 2023-5553",
      "Loc": "US-DC-Washington",
      "head": "Software Developer - Secret clearance or higher",
      "description": "IMG seeks a Software Developer for a role supporting our customer in Washington, DC. The role is Hybrid, with a minimum of three days a week onsite to start. The job functions are as follows: - Review requirements and existing functionality of legacy applications (programmed in Visual Basic for Applications, VB.NET, ColdFusion, DBXL, etc.) as assigned by manager; develop migration plan to recapitalize using the ServiceNow application platform; upon approval, execute transition and support user acceptance testing. - Improve existing end user documentation or write new documentation as needed for migrated applications. - Evaluate current Microsoft Word macros used by Buyer staff. - Develop functional requirements based on existing functionality. - Recommend transition plan to integrate with ServiceNow platfor"
  },
  {
      "JOBId": "Job ID 2023-5549",
      "Loc": "US-MD-Columbia",
      "head": "Senior Linux DevOps Engineer with TS/SCI & Full Scope Poly",
      "description": "Senoir Linux DevOps Engineer duties and responsibilities include:   Work in an environment where you can design the architecture and develop solutions to meet the organization’s needs while enhancing your skillset and advancing your career. Looking for an innovative, and motivated individual to join a small, talented, and hardworking Linux team in a hybrid cloud and on premise based environment. This team creates, maintains, and troubleshoots Linux instances on multiple networks, in multiple architectures. The ideal candidate will have hands-on Linux administration experience, knowledge of AWS Cloud technologies, works well in a small team setting, has a desire to automate processes where possible, and a willingness to think outside the box to find solutions."
  },
  {
      "JOBId": "Job ID 2023-5548",
      "Loc": "US-MD-Columbia",
      "head": "Help Desk Specialist with TS/SCI and Polygraph",
      "description": "Provides 365 days, 4 days a week, 10 hour a day Shift (0600 - 2200) Help Desk support as defined by first response/Tier 1 support.   Work with a small team providing service availability monitoring and help desk support for internet-like collaboration services hosted on a government intranet for a large and diverse community of users • Provide health and status monitoring, and taking appropriate measures when a service outage occurs. Utilize SOPs to perform basic troubleshooting steps to identify the problem, then restart service and/or servers to resolve the issue. • Document and communicate outage information to co-workers and customers • Provide tier 1 response to customer service requests received via phone, email, chat, and tickets. • Document all communications in a ServiceNow ticket system, escalate tickets as needed • Provi"
  },
  {
      "JOBId": "Job ID 2023-5546",
      "Loc": "US-ID-Scoville",
      "head": "Web Developer and IT Support Specialist",
      "description": "IMG is seeking a talented Web Developer and IT Support Specialist to support our Federal customer. Individual will create and manage customer information website and end-user interface using Microsoft SharePoint, C#,.net, and Visual Studios (VS) Background in one or more of the following IT areas is also preferred: - Windows Server 2019 System Administration - Database creation and management - Computer diagnostics and troubleshooting - Software deployment"
  },
  {
      "JOBId": "Job ID 2023-5537",
      "Loc": "US-PA-West Mifflin | US-NY-Schenectady",
      "head": "Data Engineer (Secret Clearance Required)",
      "description": "IMG is seeking individuals with exceptional communication abilities, the capacity to thrive in a dynamic setting, and a strong drive to tackle intricate data challenges. The preferred candidate should possess experience in data engineering, along with a demonstrated history of creating effective data applications. As part of a team of data engineers, the candidate will collaborate on the design, development, testing, documentation, deployment, and management of data systems."
  },
  {
      "JOBId": "Job ID 2023-5533",
      "Loc": "US-MD-Fort Meade",
      "head": "Ticket Coordinator with TS/SCI Full Scope Polygraph",
      "description": "As part of a 24x7 Service Desk, perform the activities associated with the management of dedicated ticket queues to include prioritizing of work and assignment to technical resources for resolution of end user concerns while ensuring service levels and objectives are met.   Responsibilities include: - Monitoring dedicated queues and assign tickets to appropriate resources for troubleshooting and ticket resolution. - Monitoring dedicated queues to ensure SLAs are maintained. - Assigning the tickets which are out of scope to Service Desk/Other Teams - Ensuring associated tickets are related to the parent ticket and proper follow-up is performed once incident is resolved - Ensuring proper assignment of tickets as well as facilitation of resource allocation based on work load"
  },
  {
      "JOBId": "Job ID 2023-5532",
      "Loc": "US-NC",
      "head": "F5/BIG-IP Subject Matter Expert",
      "description": "Transform technology into opportunity as a Systems Administrator Expert. A career in enterprise IT means connecting and enhancing the systems that matter most. You’ll be at the forefront of innovation and play a meaningful part in improving how agencies operate.   Job Description: ● F5 BIG-IP Administrator is to identify BIG-IP Traffic Processing Objects ● Assist in managing load balance traffic and viewing statistics and logs ● Configure virtual servers and pools and monitor BIG-IP configuration states and files ● Administrators must have a proper understanding of traffic management shell hierarchical structures and their navigation ● Administrators are responsible for shutting down and restarting BIG-IP Systems ● Save and replicate configuration data and oversee its transition onto a BIG-IP System ● Administrators mu"
  },
  {
      "JOBId": "Job ID 2023-5531",
      "Loc": "US-VA-Fort Belvoir",
      "head": "Network Administrator Advisor with TS/SCI",
      "description": "IMG is seeking a talented Network Administrator Advisor to support our customer at Fort Belvoir, VA. The team ensures reliable, uninterrupted availability of Command, Control, Communications, Computers, and Information Management (C4IM) including: networks, hardware, software, engineering, and specialized tools at the point of customer need to support their mission. The ability to provide mission critical intelligence is dependent on the successful use of the customer's information technology (IT) networks worldwide.    You will help ensure that the customer's mission is fully realized, making our world safer, today and tomorrow.    Responsibilities:  - Functional tasks include system engineering, operation and support of The F5 Layer 7 Application Delivery platform, Next-generation Firewalls, Intrusion and Prevention System"
  },
  {
      "JOBId": "Job ID 2023-5529",
      "Loc": "US-MD-Columbia",
      "head": "Asset Auditor with TS/SCI Full Scope Poly",
      "description": "Protects assets by ensuring compliance with internal control procedures, and regulations. Ensures compliance with established internal control procedures by examining records, reports, operating practices, and documentation. Verifies assets and liabilities by comparing items to documentation. Responsibilities include:        - Conducting property audits, develops, recommends and implements property administration policies. - Developing plans and programs for achieving and maintaining product quality throughout the item's life cycle - Monitoring operations to prevent the production of defects and to verify adherence to quality plans and requirements - Preparing periodic and special purpose reports as required"
  },
  {
      "JOBId": "Job ID 2023-5528",
      "Loc": "US-MD-Columbia",
      "head": "Cabling Technician with TS/SCI Full Scope Poly",
      "description": "Provides the provisioning, installation, design, termination, testing, documentation, operations, and maintenance of all types of IT cabling. This service includes both fiber optic cable and copper cable from single-strand/pair to large bulk cables that are used in the infrastructure backbone, underground, outdoor, and horizontal cabling to the desktop or equipment racks. - Lead a team in running cables for building or racking of equipment or other cabling services - Able to create cable run lists and cable schematics to effectively connect the services - Install cabling from transport/wiring closets to the customer access outlet - Install cabling both under floor and above the ceiling in cable trays, troughs, wiring baskets, harnesses, and J hooks - Assist in the design of cable transmission media, machine rooms, transport closets, and pointsof-"
  },
  {
      "JOBId": "Job ID 2023-5514",
      "Loc": "US-VA-Fort Belvoir",
      "head": "Software Developer (SharePoint) with TS/SCI",
      "description": "IMG IS seeking candidates to ensure reliable, uninterrupted availability of Command, Control, Communications, Computers, and Information Management (C4IM) including: networks, hardware, software, engineering, and specialized tools at the point of customer need to support mission. The ability to provide mission critical intelligence is dependent on the successful use of its information technology (IT) networks worldwide.    SharePoint/Web developer:  - Responsible for the design and development of high-quality SharePoint Solutions including creation of custom SharePoint Solutions - Designs, creates, tests, and maintains software and web based applications and content solutions to satisfy customer requirements - Translation of customer requirements into actionable SharePoint solutions - Lead efforts to ensure enforcement of SharePoint governance policies and make recommendation for refinement of policy. - Interface with both the infrastructure and end-user customer throughout the entire system lifecycle from"
  },
  {
      "JOBId": "Job ID 2023-5506",
      "Loc": "US-MD-Columbia",
      "head": "IT Field Support Specialist Level 2 - Pipeline with TS/SCI Polygraph",
      "description": "The Hardware Technician provides Tier 2 and 3 on-site and remote supports for computer workstations, servers, printers, peripherals, and teleconferencing equipment. Conducts sites surveys; assesses and documents current site configuration and user requirements. Analyzes existing requirements and prepares specifications for hardware acquisitions. Develops hardware installation schedules. Prepares drawings documenting configuration changes at each site. Prepares site installation and test reports. Trains site personnel in proper use of hardware. Builds specialized interconnecting cables.   Troubleshoot, repair, and test computer workstations, servers, printers, peripherals, and teleconferencing equipment   Install and configure computer workstations, servers, printers, peripherals, and teleconferencing equipment and associate"
  },
  {
      "JOBId": "Job ID 2023-5505",
      "Loc": "US-MD-Columbia",
      "head": "IT Field Support Specialist with TS/SCI Poly",
      "description": "- Conducts site surveys - Assesses and documents current site configuration and user requirements - Analyzes existing requirements and prepares specifications for hardware acquisitions - Prepares engineering plans and site installation Technical Design Packages - Develops hardware installation schedules - Prepares drawings documenting configuration changes at each site - Prepares site installation and test reports - Configures computers, communications devices and peripheral equipment - Trains site personnel in proper use of hardware - Builds specialized interconnecting cables - Troubleshoot, repair, and test computer workstations, servers, printers, peripherals, and teleconferencing equipment - Install and configure computer workstations, servers, printers, peripherals, and teleconferencing equipment and associated cabling - Maintain government and/or vendor-manufactured fiber optic modems, multiplexer, fiber optic/Ethernet cables & telephone systems - Updates technical drawings using AutoCAD software as needed"
  },
  {
      "JOBId": "Job ID 2023-5504",
      "Loc": "US-MD-Columbia",
      "head": "Ticket Coordinator Level 2 with TS/SCI FSP",
      "description": "- Monitoring dedicated queues and assign tickets to appropriate resources for troubleshooting and ticket resolution. - Monitoring dedicated queues to ensure SLAs are maintained. - Assigning the tickets which are out of scope to Service Desk/Other Teams - Ensuring associated tickets are related to the parent ticket and proper follow-up is performed once incident is resolved - Ensuring proper assignment of tickets as well as facilitation of resource allocation based on work load  "
  },






  {
      "JOBId": "Job ID 2023-5494",
      "Loc": "US-MD-Annapolis Junction",
      "head": "Information Systems Security Officer (ISSO) with TS/SCI and FS polygraph",
      "description": "- Provides support for a program, organization, system, or enclave’s information assurance program. - Provides support for proposing, coordinating, implementing, and enforcing information systems security policies, standards, and methodologies. Maintains operational security posture for an information system or program to ensure information systems security policies, standards, and procedures are established and followed. - Assists with the management of security aspects of the information system and performs day-to-day security operations of the system. - Evaluates security solutions to ensure they meet security requirements for processing classified information. - Performs vulnerability/risk assessment analysis to support certification and accreditation. - Provides configuration management (CM) for information system"
  },
  {
      "JOBId": "Job ID 2023-5487",
      "Loc": "US-MD-Annapolis Junction",
      "head": "System Engineer with TS/SCI and FS polygraph",
      "description": "Translates customer needs into requirements. Designs, and develops plans for products and services. Manages system and derives requirements to ensure the delivery of production systems that are compatible with the defined system architecture(s). Works with team in formulating and understanding requirements, system interfaces and dependencies. Works with team leads in raising and resolving technical issues, as well as defining the technical risks associated with customer requirements and/or new business opportunities. Contributes to the development of sections of systems engineering documentation such as System Engineering Plans, Initial Capabilities Documents, Requirements Specifications, and Interface Control Documents.  Coordinates the resolution of action items from Configuration Control Board (CCB) meeting"
  },

  {
      "JOBId": "Job ID 2023-5486",
      "Loc": "US-CA-Santa Barbara",
      "head": "Test and Selection Cabler with TS/SCI/CI Poly",
      "description": "IMG has an opening for a Test and Selection Cabler, Tier I for pre-wire, vertical and outside cable plant.   The job duties of the position are as follows:                                                                                                 - Works under general supervision and may provide leadership and training to and other technicians assigned to install, repair and/or testing of voice, data, and audio-visual infrastructures - Communicates regularly with the customers, cabling group manager and/or cabling supervisor, to stay informed of changes in work task and deadlines - Interacts with the client, contractors, and vendors on the job site - Creates a positive work environment on the job site at all times - Complies with all company policies and procedures - Helps maintain a safe work environment for all crew members by abiding by the Company’s commitment to provi"
  },
  {
      "JOBId": "Job ID 2023-5469",
      "Loc": "US-MD-Fort Meade",
      "head": "Senior Software/Web Developer - TS/SCI required",
      "description": "- Designs, creates, tests, and maintains software and web based applications and content solutions to satisfy customer requirements - Translation of customer requirements into actionable solutions - Lead efforts to ensure enforcement of governance policies and make recommendation for refinement of policy. - Interface with both the infrastructure and end-user customer throughout the entire system lifecycle from requirements analysis through system deployment and entertainment - Designs and develops visually-pleasing, content rich, user-friendly interfaces with intuitive navigation - Develops and maintains software and web development technical documentation to assist with software and web application maintenance and upgrades - Works independently on more complex project"
  },

  {
      "JOBId": "Job ID 2023-5433",
      "Loc": "US-MD-Annapolis Junction",
      "head": "Junior Automation Developer with TS/SCI Full Scope Polygraph",
      "description": "Work in an environment where you can design the architecture and develop solutions to meet the organization’s needs while enhancing your skillset and advancing your career.  Looking for an innovative, and motivated individual to join a small, talented, and hardworking Linux team in a hybrid cloud and on premise based environment. This team creates, maintains, and troubleshoots Linux instances on multiple networks, in multiple architectures.The ideal candidate works well in a small team setting, has a desire to learn hands-on Linux administration, AWS Cloud and automation/scripting techniques, and communicates well with team members."
  },
  {
      "JOBId": "Job ID 2023-5396",
      "Loc": "US-MD-Annapolis Junction",
      "head": "ServiceNow Developer with TS/SCI Full Scope Polygraph",
      "description": "The ServiceNow candidate will configure/customize the ServiceNow system, including: creating workflows; build service requests from customer requirements; use scripting tools and ServiceNow functionality to create script to automate rote tasks being done in ServiceNow; work with IT managers to generate views and reports as needed; perform system and integration testing with sample and live data; and monitor health, usage and overall compliance of the application.   Work individually and as part of a team. Utilize software development and software design methodologies appropriate to the development environment."
  },
  {
      "JOBId": "Job ID 2023-5393",
      "Loc": "US-MD-Annapolis Junction",
      "head": "Database Administrator/SQL Administrator with Full Scope Polygraph",
      "description": "Work in an environment supporting multiple applications that rely upon Microsoft SQL Server as their backend database. Looking for a self-motivated individual that wants to learn new skills as well as contribute to the growth and maturity of the processes used to support and maintain databases by a small, talented, and hardworking database administration team. This team creates, maintains, and troubleshoots Microsoft SQL Server databases on multiple networks using multiple architectures. The environment consists of databases hosted both in on-premise datacenters and in cloud environments. The ideal candidate will have hands-on experience creating, maintaining, patching and troubleshooting issues related to Microsoft SQL Server databases, knowledge of AWS Cloud technologies, works well in a small team setting, has a desire"
  },
  {
      "JOBId": "Job ID 2023-5392",
      "Loc": "US-MD-Annapolis Junction",
      "head": "Junior Web Developer with TS/SCI Full Scope Polygraph",
      "description": "Work in an environment where you can design the architecture and develop solutions to meet the organization’s needs while enhancing your skillset and advancing your career.  Looking for an innovative, and motivated individual to join a small, talented, and hardworking development team creating enterprise level web base services. This team designs, creates, maintains, and troubleshoots multiple web based applications that are deployed in both cloud and local on premise environments."
  },
  {
      "JOBId": "Job ID 2023-5391",
      "Loc": "US-MD-Annapolis Junction",
      "head": "Junior ServiceNow Developer with TS/SCI Full Scope Polygraph",
      "description": "The ServiceNow candidate will configure/customize the ServiceNow system, including: creating workflows; build service requests from customer requirements; use scripting tools and ServiceNow functionality to create script to automate rote tasks being done in ServiceNow; work with IT managers to generate views and reports as needed; perform system and integration testing with sample and live data; and monitor health, usage and overall compliance of the application.   Work individually and as part of a team. Utilize software development and software design methodologies appropriate to the development environment."
  },
  {
      "JOBId": "Job ID 2023-5385",
      "Loc": "US-MD-Columbia",
      "head": "Senior Virtualization System Engineer with TS/SCI Full Scope Polygraph",
      "description": "Systems engineers will be requested to participate in the process by which a new software applications/components is created. Also, it’s their role to provide for the customer’s needs, evaluate options, run appropriate models, integrate software application into the current system model, launch the new applications and then do follow-up to make sure it’s running properly from beginning to end.   Responsible for stability, integrity and efficient operation of large scale image process and virtual server infrastructure.   The job duties of the Virtualization System Engineer are as follows:                                                                                                         - Audit the environment and provide recommendations in technology and process areas for Ops improvement.  - Develops and applies advanced methods, theories and research techniques in investigation"
  },
  {
      "JOBId": "Job ID 2023-5382",
      "Loc": "US-MD-Columbia",
      "head": "Senior Network Engineer with TS/SCI Full Scope Polygraph",
      "description": "Performs services to enable all aspects of the network to include maintenance, sustainment of existing networks, and identification/correction of complex internetwork issues.   Responsibilities Include: - Facilitate the evaluation, design, and implementation of secure, high-speed, scalable, fault-tolerant network topologies as applicable to CAN and LAN designs. - Design, integrate, configure, deploy, test, and maintain numerous types of network devices, interfaces, and technologies. - Possess a strong working knowledge and understanding of network protocols and technologies, to include QoS, MPLS, VLAN, VPN, VRF, VSS, OSPF, EIGRP, BGP, and other dynamic protocols. - Participate in network solution review processes and conduct prototyping, integration, testing and certification of solutions in a lab environment. - Draft technic"
  },
  {
      "JOBId": "Job ID 2023-5381",
      "Loc": "US-MD-Columbia",
      "head": "Network Engineer with TS/SCI Full Scope Polygraph",
      "description": "Performs services to enable all aspects of the network to include maintenance, sustainment of existing networks, and identification/correction of complex internetwork issues.   Responsibilities Include: 1. Maintain data, voice and/or video network hardware and systems;   2. Assess and update older networks as needed and in accordance with specified plans. 3. Provide escalated Tier-2 and Tier-3 technical support on data, voice or video networks; 4. Answer technical questions; recommend and Implement approved course of action. 5. Install network applications on network servers or voice equipment; Maintain, test, research and resolve problems. 6. May design, implement or maintain various networks such as LAN, CAN, and voice systems in accordance with specified requirements. 7. May prepare data or voice network diagrams are"
  },
  {
      "JOBId": "Job ID 2023-5377",
      "Loc": "US-MD-Columbia",
      "head": "Network Engineer with TS/SCI Full Scope Polygraph",
      "description": "Performs maintenance, sustainment of existing networks, and identification/correction of issues. - Resolve routine network problems; operate network analyzers, WAN test equipment, and network simulators - Monitors data or voice system networks for various messages, alarms, or issues. Activates scripts as alarms occur or issues surface. Confirms accuracy of messages, alarms or issues and/or determines severity of problem, issue or alarm. Initiates resolution as appropriate. - Troubleshoots problems using scripts and standard, routine procedures; escalates as appropriate. Researches issues to determine if problem may be resolved using predefined procedures. - Resolves basic issues; documents the results. Communicates occurrence of alarms or issues and resulting actions taken to resolve or escalate problem. - Executes schedule"
  },

  {
      "JOBId": "Job ID 2023-5376",
      "Loc": "US-MD-Columbia",
      "head": "Junior Hardware Technician with TS/SCI Full Scope Polygraph",
      "description": "The Hardware Technician provides Tier 2 and 3 on-site and remote supports for computer workstations, servers, printers, peripherals, and teleconferencing equipment. - Conducts sites surveys - Assesses and documents current site configuration and user requirements. - Analyzes existing requirements and prepares specifications for hardware acquisitions. - Develops hardware installation schedules. - Prepares drawings documenting configuration changes at each site. - Prepares site installation and test reports. - Trains site personnel in proper use of hardware. - Builds specialized interconnecting cables. - Troubleshoot, repair, and test computer workstations, servers, printers, peripherals, and teleconferencing equipment - Install and configure computer workstations, servers, printers, peripherals, and teleconferencing equipment a"
  },
  {
      "JOBId": "Job ID 2023-5356",
      "Loc": "US-VA-Chantilly",
      "head": "Core Network Engineer (CI) Firewall with TS/SCI CI Polygraph",
      "description": "IMG has an opening for a Core Firewall Engineer to support our government customers’ global enterprise networks. The firewall engineering team provides next generation firewall solutions for modernizing the firewall infrastructure, assists with migrating traffic from legacy firewall infrastructure to the new solution, and supports firewall service requests.    The job duties of a firewall engineer under Core Services group: - Developing next generation firewall solutions. - Performing lab equipment evaluation, integration, and testing. - Working with network engineering team to develop a migration plan and assisting migration effort. - Developing and maintaining relevant technical documentation. - On as-needed basis, the engineer will also be responsible for supporting Tier-4 production firewall troubleshooting and developing pro-acti"
  },
  {
      "JOBId": "Job ID 2023-5136",
      "Loc": "US-VA-Fort Belvoir",
      "head": "Help Desk Analyst with Top Secret Clearance",
      "description": "IMG is looking for a Cleared Help Desk Analyst to support a new project in Schenectady, NY. This individual must have an active DOE Q clearance or an active DOD Top Secret clearance at a minimum. This individual will be a full-time employee and will be responsible for providing Help Desk services to coordinate and respond to Incidents and Service Requests made by end users, technical staff, and external vendors.    Help Desk Analyst duties and responsibilities include: - Improve IT customer service and Incident Resolution speed through expanded service hours, self-service abilities, and skilled Help Desk staff in the areas of industry-standard IT products. - Improve efficiency and effectiveness by adopting Supplier-leveraged knowledge databases and best practices in the areas of customer reporting, logging, tracking, resolving of IT Incidents and Service Requests. - Improve efficiency and effectiveness by early identification and addressing of root causes of technical incidents, including working with specialized entities for resolution. - Have"
  },

]

import Link from 'next/link';
// import React, { useState } from 'react';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';
// import Wrapper from '../components/Wrapper';
// import Job_box from './Job_box';

// interface JobListingsProps {
//   jobs: any[];
// }

// const JobListings: React.FC<JobListingsProps> = ({ jobs }) => {
//   const [sortBy, setSortBy] = useState('Sort By...');
//   const [sortedJobs, setSortedJobs] = useState(jobs);

//   const handleSortChange = (value: string) => {
//     setSortBy(value);

//     let sortedData = [...jobs];

//     switch (value) {
//       case 'Job ID (Ascending)':
//         sortedData.sort((a, b) => a.JOBId.localeCompare(b.JOBId));
//         break;
//       case 'Job ID (Descending)':
//         sortedData.sort((a, b) => b.JOBId.localeCompare(a.JOBId));
//         break;
//       case 'Job Title (Ascending)':
//         sortedData.sort((a, b) => a.head.localeCompare(b.head));
//         break;
//       case 'Job Title (Descending)':
//         sortedData.sort((a, b) => b.head.localeCompare(a.head));
//         break;
//       case 'Responsibilities (Ascending)':
//         sortedData.sort((a, b) => a.description.localeCompare(b.description));
//         break;
//       case 'Responsibilities (Descending)':
//         sortedData.sort((a, b) => b.description.localeCompare(a.description));
//         break;
//       default:
//         // Default sorting or no sorting
//         break;
//     }

//     setSortedJobs(sortedData);
//   };

//   return (
//     <div>
//       <div className='flex justify-end'>
//         <div className='justify-end'>
//           <h2 className='pr-56 justify-end'>Sort By</h2>
//           <Select>
//             <SelectTrigger className="w-[280px] focus-visible:ring-0 focus-visible:ring-transparent h-[60px] rounded-full shadow-md shadow-gray-400 border mt-2">
//               <SelectValue placeholder={sortBy} />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="Sort By..." onClick={() => handleSortChange("Sort By...")}>
//                 Sort By...
//               </SelectItem>
//               <SelectItem value="Job ID (Ascending)" onClick={() => handleSortChange("Job ID (Ascending)")}>
//                 Job ID (Ascending)
//               </SelectItem>
//               <SelectItem value="Job ID (Descending)" onClick={() => handleSortChange("Job ID (Descending)")}>
//                 Job ID (Descending)
//               </SelectItem>
//               <SelectItem value="Job Title (Ascending)" onClick={() => handleSortChange("Job Title (Ascending)")}>
//                 Job Title (Ascending)
//               </SelectItem>
//               <SelectItem value="Job Title (Descending)" onClick={() => handleSortChange("Job Title (Descending)")}>
//                 Job Title (Descending)
//               </SelectItem>
//               <SelectItem value="Responsibilities (Ascending)" onClick={() => handleSortChange("Responsibilities (Ascending)")}>
//                 Responsibilities (Ascending)
//               </SelectItem>
//               <SelectItem value="Responsibilities (Descending)" onClick={() => handleSortChange("Responsibilities (Descending)")}>
//                 Responsibilities (Descending)
//               </SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       {/* Display the sorted job listings */}
//       {sortedJobs.map((job: any) => (
//         <div key={job.JOBId}>
//           {/* Render your job listing components here */}
//           <p>{job.JOBId}</p>
//           <p>{job.head}</p>
//           <p>{job.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JobListings;
import { useState } from 'react';

// Your existing JobBox data array


function JobListings() {
    const [sortedJobs, setSortedJobs] = useState(JobBox);

    // Function to sort JobBox array based on selected criteria
    function sortJobBox(selectedValue:any) {
        let sortedJobs = [];

        switch (selectedValue) {
            case 'Job ID (Ascending)':
                sortedJobs = JobBox.slice().sort((a, b) => a.JOBId.localeCompare(b.JOBId));
                break;
            case 'Job ID (Descending)':
                sortedJobs = JobBox.slice().sort((a, b) => b.JOBId.localeCompare(a.JOBId));
                break;
            case 'Job Title (Ascending)':
                sortedJobs = JobBox.slice().sort((a, b) => a.head.localeCompare(b.head));
                break;
            case 'Job Title (Descending)':
                sortedJobs = JobBox.slice().sort((a, b) => b.head.localeCompare(a.head));
                break;
            case 'Responsibilities (Ascending)':
                sortedJobs = JobBox.slice().sort((a, b) => a.description.localeCompare(b.description));
                break;
            case 'Responsibilities (Descending)':
                sortedJobs = JobBox.slice().sort((a, b) => b.description.localeCompare(a.description));
                break;
            default:
                sortedJobs = JobBox; // Default sorting if no criteria is selected
                break;
        }

        setSortedJobs(sortedJobs); // Update state with sorted jobs
    }

    return (
        <section id="jobListings">
            {sortedJobs.map((item, key) => (
                <Link key={item.JOBId} href={`/open_position/${item.JOBId}`}>
                    {/* Your job listing UI here */}
                </Link>
            ))}
        </section>
    );
}

export default JobListings;
