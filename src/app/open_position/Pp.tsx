const JobBox = [
    {
        "JOBId":"Job ID 2024-5602",
        "Loc":"Remote US-(Home Office)",
        "head":"Power Platform Developer - Secret clearance required",
        "description":"IMG is seeking a Software Developer with Azure or MuleSoft experience to join our team providing data solutions for our customer. Work can be performed onsite in West Mifflin, PA or Schenectady, NY. - Design, develop, and implement modern cloud integration solutions using Azure integrations Services (Azure API Management, Azure Logic Apps, Azure Service Bus and Azure Event Grid). - Design, develop, and implement modern on-premises solutions using MuleSoft AnyPoint Platform PCE (API management, automation, and orchestration, and AnyPoint design center). - Help establish a highly collaborative environment that values speed and quality and perform feature development within sprints to support the high company standards. - Develop solutions that are well structured, documented and tested. - Actively participate in meetings"
    },
    {
        "JOBId":"Job ID 2024-5604",
        "Loc":"US-PA-West Mifflin",
        "head":"Software Developer with Azure or MuleSoft Experience (Secret Clearance or higher required)",
        "description":"IMG seeks a Power Platform Developer for a role supporting our customer. The job functions are as follows: - Work with customer's subject matter experts (SME) to understand the functional requirements to meet various operational streamlining needs - Create a developer user guide documenting the custom application, work-flows, and reporting setup for customer. - Develop an end-user guide for customer - Train how to utilize Microsoft Power Platform tools effectively and answer any technical related questions. - Develop a project schedule with associated milestones to complete the Power Platform applications development following completion"
    },
    {
        "JOBId":"Job ID 2024-5601",
        "Loc":"US-NY-Schenectady",
        "head":"System Administrator with Top Secret Clearance",
        "description":"The Systems Administrator supports the High Current Test Facility (HCTF) network administration. This includes administration of network services and storage systems, development of disaster recovery system, installation and configuration of computers and software, including network licensing, basic network development, and implementing requirements such as two-factor authentication. - Provide back-end user support for various Information Technology related problems, including problems associated with Windows servers. - Perform Windows system administration tasks. - Install and configure server operating systems. - Ability and experience in applying and maintaining patch levels and security configurations as well as providing life cycle system upgrades. - Resolve escalated Help Desk issues"
    },
    {
        "JOBId":"Job ID 2024-5600",
        "Loc":"US-MD-Annapolis Junction",
        "head":"Service Desk Specialist Level 2 with TS/SCI/CI Poly, 10pm - 6am",
        "description":"Position Description: Resolves technical problems and answers queries by telephone or self-service ticket in support of internal and/or outside customer computer hardware, software, network, system/application access, and telecommunications systems. Diagnoses, identifies, isolates, and analyzes problems utilizing historical database records. May route calls to product line specialists, application, or system support specialists. Maintains and updates records and tracking databases. Alerts management to recurring problems and patterns of problems.   Essential Job Functions: - Provides first contact and incident resolution to customers with H/W, S/W and application problems includes both customer telephone support as well as electronically - submitted requests - Provides polite and customer friendly service support for proble"
    },]

const Pp = () => {
  return (
    
      <section id="the2">
<div className='mt-14'>
{
    JobBox.map((items,key) => {
        return (
            <div key={items.JOBId} className="border rounded-3xl px-6 pb-5 mt-5 bg-blue-50/100 shadow-md hover:shadow-lg transition duration-200 hover:border-blue-300 hover:border-1 ease-in-out mx-24">
  <div className="mt-8 flex gap-7">
    <h2 className=" text-blue-600 text-sm px-2 py-1 rounded-full">{items.JOBId}</h2>
    <h2 className="bg-sky-100 text-sm text-blue-600  px-2 py-1 rounded-full">{items.Loc}</h2>
  </div>
  <h2 className="text-xl text-gray-800 mt-8 font-semibold">{items.head}</h2>
  <p className="mt-2 text-base line-clamp-2 text-gray-700">
   {items.description}
  </p>
</div>
        )
    })
}
</div>
</section>
   
  )
}

export default Pp
