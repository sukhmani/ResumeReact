import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Sukhmani Thukral</h1>
      <p>Contact: thukralsukhmani@cityuniversity.edu | (206) 225-8829 | (425) 894-3537</p>
      
      <section>
        <h2>Education</h2>
        <p>City University, Masters in Computer Science</p>
      </section>

      <section>
        <h2>Professional Overview</h2>
        <p>I have extensive programming experience in .NET and Salesforce, complemented by strong DevOps skills, including automation using Ansible and Jenkins. My development portfolio includes CRUD applications with MEAN, MERN, and LAMP stacks, as well as MVC applications integrated with SQL Server. Additionally, I have hands-on experience with Docker and cloud platforms such as AWS, Google Cloud, and Azure. My expertise also covers Node.js, IP networking, VPNs, DNS, and load balancing. I am proficient in managing Windows systems, Active Directory, and VMWare. Furthermore, I possess strong data analysis skills using Power BI and DAX.</p>
      </section>

      <section>
        <h2>Work Experience</h2>

        <div className="job">
          <h3>Azure Support Engineer</h3>
          <p>Mindtree | 2022 - 2024 | Bellevue, WA</p>
          <ul>
            <li>Provided solutions related to AKS, ACR, ARO, and ACI issues, resulting in positive customer satisfaction.</li>
            <li>Collaborated with various teams to ensure all client queries were resolved.</li>
            <li>Used tools and software like ASC and ASI to troubleshoot client issues.</li>
            <li>Ran Kusto Queries to collect logs.</li>
            <li>Leveraged Applen’s to understand and meet client requirements.</li>
            <li>Used Copilot for assistance in responding to client queries.</li>
            <li>Used the Customer Service Workspace to connect with partners, edit SAP (Support Area Path), create and link ICMs, and more.</li>
            <li>Worked on various data platforms, including SQL Server, Azure SQL DB, HDInsight, Hadoop, Machine Learning, Azure Stream Analytics, Azure Data Factory, and Data Bricks.</li>
            <li>Experienced in monitoring technologies like Azure Monitor, Log Analytics, Resource Graph, Azure Alerts, Network Watcher, Grafana, Ambari, Prometheus, Datadog, Confluent, etc.</li>
            <li>Resolved customer queries related to DSC configuration automation using PowerShell.</li>
            <li>Resolved issues related to cross-VNET connectivity and DNS.</li>
            <li>Worked with clients to resolve DevOps issues, adding permissions for new users, and managing settings for both Azure and Git repositories.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Scribe/Reader/Proctor/Note-Taker</h3>
          <p>Bellevue College | 2017 - 2020 | Bellevue, WA</p>
          <ul>
            <li>Wrote notes/documents for Accounting, Networking, Drama, Architecture, Business-Spreadsheet-Analysis, Web Development, PowerShell, MySQL, and Linux.</li>
            <li>Helped students with various exams/tests, including working with repositories (like GIT, BITBUCKET, AWS code commit, etc.), command line interfaces (git bash, ubuntu-cli, cmd, aws cli).</li>
            <li>Worked with tools like CISCO Packet Tracer, Wireshark, online Linux/Bash terminals, and configured hypervisors and virtual machines with various ISO files.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Front-Desk/Tutor – ASC</h3>
          <p>Bellevue College | 2019 - 2020 | Bellevue, WA</p>
          <ul>
            <li>Scheduled tutor appointments.</li>
            <li>Answered both in-person and over-the-phone questions.</li>
            <li>Checked out materials like books, calculators, etc.</li>
            <li>Worked on various other projects/tasks as per management requirements.</li>
            <li>Tutor for Linux.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Software Tester</h3>
          <p>Literacy Bridge | October 2016 - 2017</p>
          <ul>
            <li>Tested software called Audio Content Manager and wrote reports and documents.</li>
            <li>Worked on various software like Mind Manager, PICT, and JIRA.</li>
            <li>Evaluated software design and usability standards.</li>
            <li>Architected and designed test cases for multiple feature areas.</li>
            <li>Managed test schedule and execution. Wrote summary reports on test status.</li>
            <li>Worked on negotiating licensing deals (HPE). Recorded and ran tests using HP UFT.</li>
          </ul>
        </div>

        <div className="job">
          <h3>SQL Intern</h3>
          <p>People Tech | February 2015 – September 2015 | Bellevue, WA</p>
          <ul>
            <li>Worked on Microsoft Office (including Outlook, Excel, Word).</li>
            <li>Involved in fetching and displaying data using SQL queries.</li>
            <li>Recommended and purchased hardware for the IT department.</li>
            <li>Maintained user accounts.</li>
            <li>Worked on ServiceNow Studio to edit and create new applications.</li>
            <li>Worked with ServiceNow Incident Application Tool. Used filters to query and address incidents.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Salesforce Support</h3>
          <p>Horizon Consultancy | October 2014 - February 2015 | Bothell, WA</p>
          <ul>
            <li>Worked on Salesforce.</li>
            <li>Worked on Microsoft Office (including Outlook, Excel, Word).</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li>Database: MySQL, MS SQL, PostgreSQL, Oracle, DynamoDB, MS Access, Salesforce, Tableau, PIG, Hadoop, MongoDB, DAX, Power BI</li>
          <li>Web Technologies: HTML, DHTML, ASP, JavaScript, HTML, ASP.Net, C#, CSS, Node, Angular, Express, Ajax</li>
          <li>Scripting/Languages: Bash/Shell, Python, PHP, JavaScript, PowerShell, JSON, Groovy, YAML, C</li>
          <li>CI & Build Tools: Jenkins</li>
          <li>Deployment Tools: Puppet, Chef, Ansible</li>
          <li>Version Control Tools: GIT, GITHUB, Bitbucket, DevOps</li>
          <li>Virtualization: VMware ESX/ESXi, Windows Hyper-V, Power VM, Vagrant, VirtualBox</li>
          <li>Container Tools: Kubernetes, Docker, ACI, ARO</li>
          <li>Cloud: Amazon Web Services, Microsoft Azure (IaaS, PaaS & SaaS), OpenStack</li>
          <li>Testing & Ticketing Tools: Selenium, ServiceNow</li>
          <li>Web/Application Servers: JBOSS 4.x/5.x, Apache Tomcat 5.x/7.x, WebSphere (4.0, 5.0), WebLogic (8/9/10)</li>
          <li>Operating Systems: Red Hat Linux 7/6/5/4, Ubuntu 16/14/13/12, Debian, Fedora, CentOS, Windows 10/8/7/Vista/XP, Solaris 11/10/9/8, Mac OS</li>
          <li>Networking/Protocol: TCP/IP, DNS, NFS, ICMP, SMTP, DHCP, OSPF, BGP, UDP, RIP</li>
          <li>Other: Unreal Development Kit Editor, Maya 2014, Maintaining & Troubleshooting Networking Devices, Packet Tracer, GNS3, RESTful API, LLMs, NLP, LangChain</li>
        </ul>
      </section>

      <section>
        <h2>Education Highlights</h2>
        <ul>
          <li>Bachelors in Information Technology: Bellevue College (2021)</li>
          <li>.NET Programming: Bellevue College (2014)</li>
          <li>Test Out Network Pro Certification: Bellevue College (2014)</li>
          <li>Software Test Engineer Certificate: Bellevue College (2012)</li>
          <li>Certificate in Business Administration: University of Washington (2011)</li>
          <li>Master’s in Commerce: Kanpur University (2005)</li>
          <li>Master’s in Business Administration: IPM Lucknow</li>
          <li>Google AI Essentials: Coursera</li>
          <li>AI Prompt Engineering: Perscholas</li>
        </ul>
      </section>

      <section>
        <h2>Industry Certifications</h2>
       
      <ul>
        <li>Microsoft Azure Certified</li>
        <li>Microsoft Technical Associate</li>
        <li>Salesforce Certified Developer</li>
        <li>AWS Certified</li>
      </ul>
     </section>
    </div>
  );
}

export default Resume;
