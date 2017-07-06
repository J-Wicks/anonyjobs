const technology = 'technology';
const media = 'media';
const finance = 'finance';
const consulting = 'consulting';
const journalism = 'journalism';
const marketing = 'marketing';
const education = 'education';

let postings = {
  technology: [],
  media: [],
  finance: [],
  consulting: [],
  journalism: [],
  marketing: [],
  education: []
}

function createJobPosting(sector){
  switch (sector) {
    case technology:
      return createTechPosting();
    case media:
      return createMediaPosting();
    case finance:
      return createFinancePosting();
    case consulting:
      return createConsultingPosting();
    case journalism:
      return createJournalismPosting();
    case marketing:
      return createMarketingPosting();
    case education:
      return createEducationPosting();
    default:
      return 'job not created'
  }

}


function createExperienceRanking(){
  let levels = ['one', 'two', 'three']

  // return levels[Math.floor(Math.random()*levels.length) - 1]
  let idx = Math.floor(Math.random()*levels.length);
  // console.log(levels[idx])
  return levels[idx]
  // console.log(idx);
  // console.log(levels[idx])
  // console.log(Math.floor(Math.random()*levels.length) )
  // console.log( levels[Math.floor(Math.random()*levels.length)])

};

createExperienceRanking()

function createExperienceLevel(ranking){
  if (ranking === 'one') return 2
  if (ranking === 'two') return 8
  if (ranking === 'three') return 15
}

function createTechPosting() {
  // determine experience level;
    // this will spit out the  experience level, educationLevel,
    let experienceLevel = createExperienceLevel();
    let possibilities = Object.assign({}, jobFields[sector][experiencelevel]);
    let positionTitle;
}




// createPosting('Education');
// console.log(dog)
// var dog ={cat: 'hi'};


var jobFields = {
  Technology: {
    one: {
      educationLevel: ['B.A.', 'B.S.'],
      educationField: ['Computer Science'],
      experienceField: ['Computer Science', 'Technology'],
      positions: [
        {title: 'Junior Developer', description: 'We are looking for a Junior Developer with an interest in becoming an IT professional. The selected will work with SQL databases, business intelligence reporting, and SharePoint design and administration at our government client office'},
        {title: 'Software Developer', description: 'We are looking for software developers who can build and support the foundational components underlying the resources we provide to clients. We run a 24/7 highly available cloud application that supports thousands of customers in every time zone, handles billions of dollars and integrates hundreds of components. These requirements demand a sound technical foundation. We are hiring for the team that provides this foundation. We design frameworks that are robust against failure, libraries that measure performance, tweak JVM’s, scale data systems, insure security, guarantee up-time and destroy tech debt.'},
        {title: 'Junior Data Analyst', description: 'We are looking for number lovers and lifelong learners! The ideal candidate should be able to “crunch the numbers” one minute and critically think through strategic issues the next. In this position, you will be responsible for researching and developing methods for measuring and analyzing data; conducting studies and using advanced data mining & modeling techniques to build solutions that optimize the business and maximize the value of its data; and simplifying and explaining data science work to regular business users such as product, engineering, and management teams.'}
      ]
    },
    two: {
      educationLevel: ['B.S.', 'M.S.'],
      educationField: ['Computer Science'],
      experienceField: ['Computer Science', 'Technology'],
      positions: [
        {title: 'Software Engineer', description: 'Develop and apply advanced methods, theories, and research techniques to the investigation and solution of complex and advanced software applications and problems. Plan and conduct major technical phases of significant projects by coordinating the efforts of technical support staff and the performance of assigned projects. Work in dynamic environments with little supervision. Assist with training software engineer staff, as needed.'},
        {title: 'Software Engineer', description: 'The Senior Software Engineer is responsible for designing and delivering quality software features to the applications. The Senior Software Engineer is expected to work well in an Agile-Scrum team environment to develop superior products. He or she will develop high-quality product features to meet company objectives; participate in planning and estimating of user stories at the beginning of each development iteration; coordinate with other members of the Scrum team (Business Analysts, QA Analysts, Product owner, etc.) to deliver value-added product releases; participate in architecture design sessions to model the future state of existing applications; assist the Software Architect and Product Owner with identifying important technical roadmap initiatives; and lead code review sessions.'},
        {title: 'Data Scientist', description: 'Develop and apply advanced methods, theories, and research techniques to the investigation and solution of complex and advanced software applications and problems. Plan and conduct major technical phases of significant projects by coordinating the efforts of technical support staff and the performance of assigned projects. Work in dynamic environments with little supervision. Assist with training software engineer staff, as needed.'},
        {title: 'Software Engineer', description: 'The Senior Software Engineer is responsible for designing and delivering quality software features to the applications. The Senior Software Engineer is expected to work well in an Agile-Scrum team environment to develop superior products. He or she will develop high-quality product features to meet company objectives; participate in planning and estimating of user stories at the beginning of each development iteration; coordinate with other members of the Scrum team (Business Analysts, QA Analysts, Product owner, etc.) to deliver value-added product releases; participate in architecture design sessions to model the future state of existing applications; assist the Software Architect and Product Owner with identifying important technical roadmap initiatives; and lead code review sessions.'}
      ]
    },
    three: {
      educationLevel: ['M.S.', 'PhD'],
      educationField: ['Computer Science', 'Computer Engineering'],
      experienceField: ['Computer Science', 'Technology'],
      positions: [
        {title: 'Data Management and Analysis Director', description: 'We are looking for a committed data analyst who can lead a growing team of web developers, researchers, and information analysts in assessing market trends! you should be curious and passionate about understanding and using data to drive strategy and operational improvements. The ideal candidate should be able to “crunch the numbers” one minute and critically think through strategic issues the next. In this position, you will be responsible for researching and developing methods for measuring and analyzing data; conducting studies and using advanced data mining & modeling techniques to build solutions that optimize the business and maximize the value of its data; and simplifying and explaining data science work to regular business users such as product, engineering, and management teams.' },
        {title: 'Senior Software Engineer', description: 'The Senior Software Engineer is responsible for designing and delivering quality software features to the applications. The Senior Software Engineer is expected to work well in an Agile-Scrum team environment to develop superior products. Develop high-quality product features to meet company objectives. You will be required to: participate in planning and estimating of user stories at the beginning of each development iteration; coordinate with other members of the Scrum team (Business Analysts, QA Analysts, Product owner, etc.) to deliver value-added product releases; participate in architecture design sessions to model the future state of existing applications; and assist the Software Architect and Product Owner with identifying important technical roadmap initiatives.'},
        {title: 'Information Security Architect', description: 'The primary responsibilities of the Security Architect will be to work as an individual contributor within the Information Security team to ensure that best practices for security engineering and secure technical architectures are in place globally. This role will have responsibility in working directly with other members of the Security team to provide security and best practices expertise, and will work with other technical and non-technical teams to provide expertise in secure design and implementation of new systems and services. The Security Architect will also be called upon to provide security guidance and best practices input to ensure all areas of policy compliance are met. Successful candidates will have knowledge and experience in the overall field of information security with significant time spent solely in a security function within an organization.' }
      ]
    }
  },
  Finance: {
    one: {
      educationLevel: ['B.A.', 'B.S.'],
      educationField: ['Finanance', 'Business Administration', 'Accounting'],
      experienceField: ['Accounting', 'Finance'],
      positions: [
        {title: 'Financial Monitorng Assistant', description: 'The Financial Monitoring Assistant will work cross-functionally with HR, Finance, Sales Operations, and Sales Management to assist with the sales compensation plan distribution process. You will gain invaluable experience in a position which offers responsibility and interaction with global business partners as well as an opportunity to implement a new tool and work with a fun and amazing team of sales compensation professionals. The ideal candidate is a well-rounded top performer who is curious in how things work, is always willing to help others, can be a key contributor in a high-energy growth environment.' },
        {title: 'Junior Financial Analyst', description: 'The Junior Financial Analyst is responsible for creating and maintaining reports needed to monitor and assist the operations of the department including monitoring the loan pipeline, gauging the profitability of individual loans based on data analysis, and calculating monthly projections and statement of profit or loss. The analyst would work closely with a team of individuals to support the Director, and will be corresponding regularly with Loan Officers via phone and email.'},
        {title: 'Financial Associate', description: 'The Financial Associate, working on strategic initiatives, will conduct research and data collection to support the Finance Director with various financial analyses and models. Thus, this individual must have the communication skills necessary to present relevant and precise financial data. He or she will develop analytical approaches to address initiatives and assist with presentations that will impact decision making; generate custom reports around billing and cost structure; and utilize financial databases and reporting tools.'}
      ]
    },
    two: {
      educationLevel: ['B.A.', 'B.S.'],
      educationField: ['Finanance', 'Business Administration', 'Accounting'],
      experienceField: ['Accounting', 'Finance'],
      positions: [
        {title: 'Mid-Level Financial Analyst', description: 'The Mid-Level Financial Analyst will provide cross-cutting support to our global clients, focusing on asset risk management and security. He or she will also develop and maintaining reports needed to monitor and forecast financial performance, gauging the profitability of individual loans based on data analysis, and calculating monthly projections and statement of profit or loss. The analyst would work closely with a team of individuals to support the Director, and will be corresponding regularly with Loan Officers via phone and email.'},
        {title: 'Associate Financial Advisor', description: 'The Associate Financial Advisor provides comprehensive support to the global asset controls team. The advisor implements and interprets accounting and financial concepts for financial planning and control; performs analyses to determine present and future financial performance; and gathers, analyzes, prepares, reviews, and summarizes financial plans, forecasts and variance analyses in support of Corporate and field operations. In addition, this position will be responsible for ensuring the accuracy of financial reporting and consistency with corporate policies and procedures. Provides useable, value-added information, reporting and analysis to corporate organization. Acts as a key contact corporate and field management on issues relating to business process, expense optimization, and other business-related information.'},
        {title: 'Financial Analyst/Manager', description: 'Develop effective techniques for financial planning. Assist leadership with financial analysis of on-going and future projects or programs. Gather, organize and present financial information from multiple entities across North America. Help drive financial results. Additionally, the financial analyst will be required to plan, coordinate and/or conduct complex projects or project segments that typically have multi-department and/or enterprise wide impact. He or she should be able to multi-task in a demand-driven environment.'}
      ]
    },
    three: {
      educationLevel: ['M.S.', 'PhD'],
      educationField: ['Finanance', 'Business Administration', 'Accounting'],
      experienceField: ['Accounting', 'Finance', 'Business Advisory'],
      positions: [
        {title: 'Financial Risk Mitigation Director', description: 'The Financial Risk Mitigation Director will lead a dynamic team of financial analysts and advisors in assessing market risks and providing world-class fiduciary services to our global clients. Working with HR, Finance, Sales Operations, and Sales Management, the director gain invaluable experience in a position which offers responsibility and interaction with global business partners as well as an opportunity to implement a new tool and work with a fun and amazing team of sales compensation professionals. The ideal candidate is a well-rounded top performer who is curious in how things work, is always willing to help others, can be a key contributor in a high-energy growth environment.'},
        {title: 'Senior Financial Analyst', description: 'The Senior Financial Analyst implements and interprets accounting and financial concepts for financial planning and control; performs analyses to determine present and future financial performance; and gathers, analyzes, prepares, reviews, and summarizes financial plans, forecasts and variance analyses in support of Corporate and field operations. In addition, this position will be responsible for ensuring the accuracy of financial reporting and consistency with corporate policies and procedures; and identifying and communicating risks and opportunities. Provides support to the Director of Financial Planning and Analysis, as well as CFO and CEO. Provides useable, value-added information, reporting and analysis to corporate organization. Acts as a key contact corporate and field management on issues relating to business process, expense optimization, and other business-related information.' }
      ]
    }
  },
  humanResources: {
    one: {
      educationLevel: ['B.A.', 'B.S.'],
      educationField: ['Human Resources'],
      experienceField: ['Human Resources'],
      positions: [
        {title: 'Human Resources Manager', description: 'Oversee HR programs and activities including Onboarding, Compensation and Benefits, Employee Relations, Feedback Systems (surveys and performance review processes), International Transfers, CSS Recruitment, HRIS and Departure procedures. Implements global HR programs and designs local programs as necessary. Work collaboratively with management team on various initiatives and programs including performance management, compensation, learning and development, global training, communication (office-wide, class-specific, individual), connectedness, promotion processes, and retention' },
        {title: 'Human Resources Associate', description: 'The Human Resources Associate will support with sourcing, screening, and interviewing potential candidates for our growing headquarters office. He or she will provide comprehensive HR support, including managing Onboarding, Compensation and Benefits, Employee Relations, Feedback Systems (surveys and performance review processes), International Transfers, CSS Recruitment, HRIS and Departure procedures. Implements global HR programs and designs local programs as necessary. Work collaboratively with management team on various initiatives and programs including performance management, compensation, learning and development, global training, communication (office-wide, class-specific, individual), connectedness, promotion processes, and retention'},
        {title: 'Technical Recruiter', description: 'Provide full life cycle recruiting for all assigned technical and analytics roles across multiple regions. Establishes collaborative, customer-focused relationships with hiring managers, HR Business Partners and local office/region HR staff. Build and maintains a network of potential candidates and identifies talent through established and new channels; leverages personal networks, job boards and social media etc. Recommend ideas and strategies that contribute to long-range strategic staffing initiatives while maintaining cost effective methods. Develop creative and diverse sourcing plans. Provides recommendations and best practices to improve the effectiveness and efficiency of the recruiting process. Recommend and implements process improvements for challenging to fill roles. Work with Manager to develop and continuously upgrade recruiting resources for hiring managers. Participates in various team projects.'}
      ]
    },
    two: {
      educationLevel: ['B.A.', 'B.S.'],
      educationField: ['Human Resources'],
      experienceField: ['Human Resources'],
      positions: [
        {title: 'Human Resources Coordinator', description: 'Oversee HR programs and activities including Onboarding, Compensation and Benefits, Employee Relations, Feedback Systems (surveys and performance review processes), International Transfers, CSS Recruitment, HRIS and Departure procedures. Implements global HR programs and designs local programs as necessary. Work collaboratively with management team on various initiatives and programs including performance management, compensation, learning and development, global training, communication (office-wide, class-specific, individual), connectedness, promotion processes, and retention'},
        {title: 'Recruiting and HR Support Coordinator', description: 'The Recruiting and HR Support Coordinator will support with sourcing, screening, and interviewing potential candidates for our growing headquarters office. He or she will provide comprehensive HR support, including managing Onboarding, Compensation and Benefits, Employee Relations, Feedback Systems (surveys and performance review processes), International Transfers, CSS Recruitment, HRIS and Departure procedures. Implements global HR programs and designs local programs as necessary. Work collaboratively with management team on various initiatives and programs including performance management, compensation, learning and development, global training, communication (office-wide, class-specific, individual), connectedness, promotion processes, and retention'},
        {title: 'Senior Recruiter', description: 'Provide full life cycle recruiting for all assigned technical and analytics roles across multiple regions. Establishes collaborative, customer-focused relationships with hiring managers, HR Business Partners and local office/region HR staff. Build and maintains a network of potential candidates and identifies talent through established and new channels; leverages personal networks, job boards and social media etc. Recommend ideas and strategies that contribute to long-range strategic staffing initiatives while maintaining cost effective methods. Develop creative and diverse sourcing plans. Provides recommendations and best practices to improve the effectiveness and efficiency of the recruiting process. Recommend and implements process improvements for challenging to fill roles. Work with Manager to develop and continuously upgrade recruiting resources for hiring managers. Participates in various team projects.'}
      ]
    },
    three: {
      educationLevel: ['M.S.', 'MBA', 'PhD'],
      educationField: ['Human Resources', 'Business Administration'],
      experienceField: ['Human Resources'],
      positions: [
        {title: 'Team Leader - Recruitment and Human Resources', description: 'The Team Leader, Human Resources and Program Manager will work collaboratively with the HR Manager to lead HR activities to ensure the delivery of high quality service to our headquarters. Additionally, this position will have responsibility for managing the Human Resources Support team ensurses the highest level of administrative support to Partners and Managers. Serve as the primary contact responsible for day-to-day employment matters and performance management processes. Successful implementation of various programs requires strong program management skills, thorough knowledge of policies and procedures, and effective communications with office leadership, HR teams locally and Regional/Global HR teams.'},
        {title: 'Human Resources Director', description: 'The Human Resources Director will work collaboratively with the HR Senior Vice President to lead HR activities to ensure the delivery of high quality service to our main headquarters. Successful implementation of various programs requires strong program management skills, thorough knowledge of policies and procedures, and effective communications with office leadership, and national HR teams. As the Human Resources Leader, you will work collaboratively with HR Manager and office management team on various initiatives and programs including: performance management, compensation, learning and development, global training, communication (office-wide, class-specific, individual), connectedness, promotion processes, and retention.' }
      ]
    }
  },
  Consulting: {
    one: {
      educationLevel: ['B.A.', 'B.S.'],
      educationField: ['Business, Accounting, Finance'],
      experienceField: ['Consulting', 'Business Advisory'],
      positions: [
        {title: 'Assistant Specialist - Global Procurement', description: 'We are looking for an entry-level professional with a strong interest in understanding how to optimize the procurement function within an organization and can run our clients’ end-to-end knowledge management processes. He or she will work closely with the Procurement Practice Manager and Performance Improvement Practice Team on projects supporting external Procurement operations and product development. The successful candidate will be able to capture case-related knowledge from Procurement client development and case team efforts and showcase them on our best practices repository. This includes the capture and processing of case summaries, proposals, case examples, capability and product insights, tools and templates, as well as the meta-tagging of case information to facilitate user search.'},
        {title: 'Associate Management Consultant', description: 'The Associate Consultant will conduct comprehensive research, data collection, and editing to support our Management Consulting team in designing and redesigning incentive plans, job evaluations – including salary grade guideline models. He or she will assist in preparing materials for compensation training. Additionally, he or she will assess and advise on how to design and administer compensation programs to achieve business goals and effectively manage the workforce. The selected candidate will provide guidance on how to use compensation tools and practices to improve business efficiency and effectiveness. He or she will design incentive plans or alternative reward systems. Responsible for analysis of incentive plan structures – analyzing and evaluating the effectiveness of incentive plans, compensation structures and to identify opportunities to improve alignment and strengthen plan design.'},
        {title: 'Associate Consultant - Telecommunications', description: 'This position is a full-time role supporting the Telecommunications, Technology and Media (TMT) practice area in the Americas region. Our preferred office locations are across the United States. The selected candidate will coordinate and manage the capture and sharing of our knowledge base within our national practice area networks. He or she will capture case-related information from client development and case team efforts into our global intranet platform. This includes the capture and processing of project summaries, proposals, case examples, capability and product insights, tools and templates, as well as the meta-tagging of case information to facilitate user searching. Additionally, he or she will contact client case teams and practice affiliates in Americas to understand work and solicit best content to fill ongoing practice content needs.'}
      ]
    },
    two: {
      educationLevel: ['B.A.', 'B.S.', 'MBA'],
      educationField: ['Business', 'Accounting', 'Finance'],
      experienceField: ['Consulting', 'Business Advisory'],
      positions: [
        {title: 'Knowledge Specialist – Supply Chain and Procurement', description: 'We are looking for an individual who has a strong interest in understanding how to optimize the procurement function within an organization and can run our clients’ end-to-end knowledge management processes. He or she will work closely with the Procurement Practice Manager and Performance Improvement Practice Team on projects supporting external Procurement operations and product development. The successful candidate will be able to capture case-related knowledge from Procurement client development and case team efforts and showcase them on our best practices repository. This includes the capture and processing of case summaries, proposals, case examples, capability and product insights, tools and templates, as well as the meta-tagging of case information to facilitate user search.'},
        {title: 'Telecommunications Advisor', description: 'This position is a full-time role supporting the Telecommunications, Technology and Media (TMT) practice area in the Americas region. Our preferred office locations are across the United States. The selected candidate will coordinate and manage the capture and sharing of our knowledge base within our national practice area networks. He or she will capture case-related information from client development and case team efforts into our global intranet platform. This includes the capture and processing of project summaries, proposals, case examples, capability and product insights, tools and templates, as well as the meta-tagging of case information to facilitate user searching. Additionally, he or she will contact client case teams and practice affiliates in Americas to understand work and solicit best content to fill ongoing practice content needs.'},
        {title: 'Associate Director, Strategy and Planning', description: 'As a member of our Strategic Solutions Practice, you will deliver marketing strategies to our technology clients, you will be responsible for key parts of our service delivery doing some or all of the following: lead and manage the insights process, from scoping to gathering to presenting; drive the thinking to determine how we obtain and interpret the voice of the customer to achieve our client’s goals; be on the frontlines in acquiring primary insights by directly engaging with respondents in structured conversations to understand what their needs and opinions are; ensure that our clients derive compelling insights throughout the process and project; create amazing, thoughtful and clear presentations for our executive level clients and then help deliver them; work on strategic consulting projects with significant client interaction, including report presentation, and general relationship building.'}
      ]
    },
    three: {

      educationLevel: ['M.S.', 'PhD'],
      educationField: ['Business', 'Accounting', 'Finance'],
      experienceField: ['Consulting', 'Business Advisory'],
      positions: [
        {title: 'Management Consultant', description: 'Our Management Consulting Division provides itself on world-class support to our global clients focused on employee retention and success. As a member of our team, you will be responsible for: consulting and interacting with people at all levels across a client organization, including senior-level executives; overseeing multiple client engagements simultaneously; assessing client needs, writing proposals, determining project plans, managing client expectations and developing client solutions; acting as project manager for our analytics and technology solutions including custom software applications; delivering presentations, facilitating groups and providing training on various topics; ensuring superior customer service through follow-up, client responsiveness and customer-focused communication; driving thought leadership internally and externally through the development of new programs, processes, and consulting models.'},
        {title: 'Executive Leadership Consultant', description: 'As a member of our team, you will be responsible for: consulting and interacting with people at all levels across a client organization, including senior-level executives; overseeing multiple client engagements simultaneously; assessing client needs, writing proposals, determining project plans, managing client expectations and developing client solutions; acting as project manager for our analytics and technology solutions including custom software applications; delivering presentations, facilitating groups and providing training on various topics; ensuring superior customer service through follow-up, client responsiveness and customer-focused communication; driving thought leadership internally and externally through the development of new programs, processes, consulting models, speaking engagements and written publications; and performing other duties as assigned.' },
        {title: 'Director - Strategy and Planning', description: 'As the Director of Strategy and Planning, you will deliver marketing strategies to our global clients, you will be responsible for key parts of our service delivery doing some or all of the following: lead and manage the insights process, from scoping to gathering to presenting; drive the thinking to determine how we obtain and interpret the voice of the customer to achieve our client’s goals; be on the frontlines in acquiring primary insights by directly engaging with respondents in structured conversations to understand what their needs and opinions are; ensure that our clients derive compelling insights throughout the process and project; create amazing, thoughtful and clear presentations for our executive level clients and then help deliver them; work on strategic consulting projects with significant client interaction, including report presentation, general relationship building, and ongoing guidance and mentoring.'}
      ]
    }
  },
  Journalism: {
    one: {
      educationLevel: ['B.A.', 'B.S.'],
      educationField: ['Journalism', 'Media Studies', 'Communication'],
      experienceField: ['Writing/Editing'],
      positions: [
        {title: 'Investigative Journalist', description: 'We are seeking a communications assistant to spend 30 - 40 hours per week with a background in investigative-type journalism to work closely with our technical team to tell the story of our globally-recognized services and solutions. We are seeking someone who tirelessly asks questions that result in copy that informs, illuminates, and inspires. The position requires superior research, reporting, and writing skills, along with a strong desire to learn and grow within the company.'},
        {title: 'Newsperson/Video Journalist', description: 'The newsperson/videojournalist will primarily shoot, write and edit video — including LIVE video — stories for our broadcast, digital and mobile customers and platforms. As a member of a dynamic, round-the-clock operation that covers the entire country, the successful candidate must also contribute reporting in other media formats — including text, photos and audio — to help produce a competitive and comprehensive all-formats news report. The videojournalist will develop sources across the country, consistently generating distinctive video stories for regional, national and global audiences. The candidate must be prepared to travel extensively to cover breaking news, often at short notice. Must be willing and able to work all shifts as coverage demands.'}
      ]
    },
    two: {
      educationLevel: ['B.A.', 'B.S.'],
      educationField: ['Journalism', 'Media Studies', 'Communication'],
      experienceField: ['Writing/Editing'],
      positions: [
        {title: 'Video Journalist', description: 'We are seeking a highly skilled video journalist to join a team tasked with developing short documentary-style video stories tailored for mobile, social and digital audiences. Strong editorial judgment, writing, editing and reporting experience is required. Deadline pressure is a constant so an ability to quickly react to and smartly frame daily breaking news is essential, as is the ability to thrive in a high-stakes, highly competitive newsroom. The ideal candidate is a self-starting idea-generator who can capture exceptional footage and interviews from the field—and produce strong journalism from his/her desk, using text, graphics, and third-party footage to build engaging segments.' },
        {title: 'Brand Journalism Advisor', description: 'We are seeking a one-of-a-kind hybrid leader who blends a sophisticated understanding of media with a proven track record in journalism to help us reinvent brand journalism. As a leader on the Corporate Consulting team you will be responsible for providing brand management advisory services to global companies. With a keen eye for detail, marketing, and brand management, you will be responsible for translating our corporate success as a global media leader into actionable approaches for diverse clients.'},
        {title: 'Senior Newsperson', description: 'The newsperson will primarily shoot, write and edit video — including LIVE video — stories for our broadcast, digital and mobile customers and platforms. As a member of a dynamic, round-the-clock operation that covers the entire country, the successful candidate must also contribute reporting in other media formats — including text, photos and audio — to help produce a competitive and comprehensive all-formats news report. The newsperson will develop sources across the country, consistently generating distinctive video stories for regional, national and global audiences. The candidate must be prepared to travel extensively to cover breaking news, often at short notice. Must be willing and able to work all shifts as coverage demands.'}
      ]
    },
    three: {

      educationLevel: ['M.S.', 'PhD'],
      educationField: ['Journalism', 'Media Studies', 'Communication'],
      experienceField: ['Journalism'],
      positions: [
        {title: 'Senior Multimedia Director', description: 'We are seeking a highly skilled multimedia director with a broad and successful track record in journalism to lead our team digital journalists. Strong editorial judgment, writing, editing and reporting experience is required. Deadline pressure is a constant so an ability to quickly react to and smartly frame daily breaking news is essential, as is the ability to thrive in a high-stakes, highly competitive newsroom. The ideal candidate is a self-starting idea-generator who can capture exceptional footage and interviews from the field—and produce strong journalism from his/her desk, using text, graphics, and third-party footage to build engaging segments.'},
        {title: 'Senior Investigative Journalist', description: 'We are seeking a seasoned journalist to direct our investigative journalism department. The selected candidate will work across the company to identify the relevant and impactful stories. We are seeking someone who tirelessly asks questions that result in copy that informs, illuminates, and inspires. The position requires superior research, reporting, and writing skills, along with a strong desire to cultivate strong team dynamics across the Investigative Journalism department.'},
        {title: 'Senior Editor', description: 'We are seeking an experienced editor to provide quality control, creativity, and inspirational content to our readers. We are looking for someone with a real knack for finding the heart of a story, whether its comedic, serious or somewhere in between. Experience at a top-tier news organization is preferred. We will give significant consideration to candidates who show a strong innovation streak. Candidates with previous editorial experience are preferred.'}
      ]
    }
  },
  Marketing: {
    one: {
      educationLevel: ['B.A.', 'B.S.'],
      educationField: ['Journalism', 'Media Studies', 'Communication'],
      experienceField: ['Writing/Editing', 'Marketing'],
      positions: [
        {title: 'Marketing Automation Specialist', description: 'The Marketing Automation Specialist will be a champion of innovation for our marketing campaigns, engaging business teams in using cutting edge marketing automation techniques to help achieve the firm’s strategic business objectives. As a key member of the Global Digital Marketing team, the Marketing Automation Specialist will play a hands-on, critical role in assembling and executing marketing automation campaigns for our global divisions. He/she will proactively collaborate with internal customers and marketing teams on marketing automation initiatives, taking responsibility for performance, quality, support and reporting. He or she will serve as the team’s Marketing Automation expert and work with various internal teams to help turn their marketing strategies/goals into actionable programs. Additionally, he or she will create, deploy, and monitor automated and demand generation marketing campaigns.' },
        {title: 'Product Marketing Specialist', description: 'The Product Marketing Specialist will support the Global Product Marketing Manager to help lead product marketing and branding efforts for our practice areas. The role involves managing projects across a variety of stakeholders, including at times partners and senior practice area directors, collaborating with other marketing and creative groups to showcase our products and services effectively in the consulting marketplace and to internal audiences. At times, the role will also involve facilitating and participating in brainstorm sessions, managing vendor relationships and meetings, drafting product copy and mocking up simple designs. As such, the ideal candidate has both a strict orientation to detail, strong communications skills and a bias towards action, as well as interest in the creative arts.'},
        {title: 'Design Team Associate', description: 'The Design Team Associate assumes responsibility for assisting with team operations, including assisting with digital design requests. They will work closely with the Design Project Coordinator to ensure all projects are accounted for and on schedule. Additionally, they will track all design-related output and maintain team schedules. The Team Coordinator will ensure adherence to established policies and procedures for design format and usage, and promote participation and use of brand guidelines. Responsibilities will include, but not be limited, to working closely with our Design Project Coordinator, Senior Project Manager, Art Director, Designers and Creative Director; assuming primary responsibility for managing team’s day to day operations; and maintaining schedules and calendars for the Design Project Coordinator'}
      ]
    },
    two: {
      educationLevel: ['B.A.', 'B.S.'],
      educationField: ['Journalism', 'Media Studies', 'Communication'],
      experienceField: ['Journalism', 'Marketing'],
      positions: [
        {title: 'Senior Online Marketing Manager', description: 'Working in close collaboration with various corporate divisions, the Sr. Manager of Online Campaigns & Innovation will use innovative digital marketing techniques, content, formats and channels to engage our target audiences. He/she will work closely with the Director of Digital Marketing to refine and articulate our digital campaign strategy in support of our corporate marketing objectives, namely building awareness for the firm and our products, deepening relationships and reinforcing the credibility of our leaders, practices and capabilities. This role will be pivotal in shaping how the firm leverages digital technologies to engage with clients, prospects, recruits and alumni. Responsibilities will include, but not be limited to, managing digital marketing campaigns; engaging with relevant teams to develop, and produce/executing digital marketing initiatives for  global audiences.'},
        {title: 'Senior Product Marketing Specialist', description: 'The Senior Product Marketing Specialist will support the Global Product Marketing Manager to help lead product marketing and branding efforts for our practice areas. The role involves managing projects across a variety of stakeholders, including at times partners and senior practice area directors, collaborating with other marketing and creative groups to showcase our products and services effectively in the consulting marketplace and to internal audiences. At times, the role will also involve facilitating and participating in brainstorm sessions, managing vendor relationships and meetings, drafting product copy and mocking up simple designs. As such, the ideal candidate has both a strict orientation to detail, strong communications skills and a bias towards action, as well as interest in the creative arts.'},
        {title: 'Content Editor/Copywriter', description: 'The Content Editor/Copywriter is responsible for developing the messaging and content to promote our product offerings. The Content Editor/Copywriter serves as an internal resource within the our Marketing Department, providing online and print copywriting, video scripting, infographic storyboarding, headline writing and other types of editorial support as required. The Content Editor/Copywriter provides this support to the Online, Global Brand, Global Video and Global Editorial teams as needed, helps ensure that messaging and content is coordinated and consistent among them, seeks opportunities to create derivative content from product brochures that help spread their digital footprint and aids our practices in marketing and selling their products.' },
        {title: 'Design Team Coordinator', description: 'The Design Team Coordinator assumes primary responsibility for managing daily team operations and tracking incoming day to day print and digital design requests. They will work closely with the Design Project Coordinator to ensure all projects are accounted for and on schedule. Additionally, they will track all design-related output and maintain team schedules. The Team Coordinator will ensure adherence to established policies and procedures for design format and usage, and promote participation and use of brand guidelines. Responsibilities will include, but not be limited, to working closely with our Design Project Coordinator, Senior Project Manager, Art Director, Designers and Creative Director; assuming primary responsibility for managing team’s day to day operations; and maintaining schedules and calendars for the Design Project Coordinator'}
      ]
    },
    three: {

      educationLevel: ['M.S.', 'PhD'],
      educationField: ['Journalism', 'Media Studies', 'Communication'],
      experienceField: ['Journalism', 'Marketing'],
      positions: [
        {title: 'Content Editor/Copywriter', description: 'The Content Editor/Copywriter is responsible for developing the messaging and content to promote our product offerings. The Content Editor/Copywriter serves as an internal resource within the our Marketing Department, providing online and print copywriting, video scripting, infographic storyboarding, headline writing and other types of editorial support as required. The Content Editor/Copywriter provides this support to the Online, Global Brand, Global Video and Global Editorial teams as needed, helps ensure that messaging and content is coordinated and consistent among them, seeks opportunities to create derivative content from product brochures that help spread their digital footprint and aids our practices in marketing and selling their products. He or she will support the Online and Brand teams in the development of product brochures and online product pages, tailoring materials to to an audience of business executives'},
        {title: 'Design Team Coordinator', description: 'The Design Team Coordinator assumes primary responsibility for managing daily team operations and tracking incoming day to day print and digital design requests. They will work closely with the Design Project Coordinator to ensure all projects are accounted for and on schedule. Additionally, they will track all design-related output and maintain team schedules. The Team Coordinator will ensure adherence to established policies and procedures for design format and usage, and promote participation and use of brand guidelines. Responsibilities will include, but not be limited, to working closely with our Design Project Coordinator, Senior Project Manager, Art Director, Designers and Creative Director; assuming primary responsibility for managing team’s day to day operations; and maintaining schedules and calendars for the Design Project Coordinator'}
      ]
    }
  },
  Education: {
    one: {
      educationLevel: ['B.A.', 'B.S.'],
      educationField: ['Education'],
      experienceField: ['Education'],
      positions: [
        {title: 'Education Support Associate', description: 'Working in coordination with the Training and Development Department, the Education and Support Associate provides research and provides editorial support to assist in developing comprehensive training strategies. These strategies and resources will include new curricula and lesson plans, online learning module content, training best practices manuals, and webinar content. The associate supports the Remote Learning Officer and reports to the Education and Learning Director.'},
        {title: 'Curriculum and Instruction Assistant' , description: 'The Curriculum and Instruction Assistant will work closely with the internal liaison for the Private Education Consortium to craft policy-oriented research related to maintaining high student outcomes in academic environments. Research will include STEM education and best practices in vocational preparation. The Curriculum and Instruction Assistant will report directly to the Director on site. They will support and reflect on the Teacher Based Teams in order to help teachers to build their teaching skills and review their data.' },
        {title: 'Education and Curriculum Officer', description: 'Working in coordination with the Training and Development Department, the Education and Curriculum Officer develops and implements a comprehensive training strategy and oversees the development of resources and tools for external providers including new curricula and lesson plans, online learning module content, best practices, and webinar content. The Education and Curriculum Officer, supervises the Remote Learning Officer and reports to the Education and Learning Director.'}
      ]
    },
    two: {
      educationLevel: ['B.A.', 'B.S.'],
      educationField: ['Education'],
      experienceField: ['Education'],
      positions: [
        {title: 'Senior Curriculum and Instruction Specialist', description: 'The Curriculum and Instruction Specialist will work closely with the Private Education Consortium as a key member of the instructional leadership team. Represented private schools share the common goal of maintaining high student outcomes in academic environments with high quality teaching. Schools will adopt new programs based on proven research-based models from around the country. Among the models are STEM education and vocational preparation curriculum. The Curriculum and Instruction Specialist will report directly to the Director on site. They will support and reflect on the Teacher Based Teams in order to help teachers to build their teaching skills and review their data.'},
        {title: 'Knowledge Management Training Program Specialist', description: 'The Knowledge Management Training Program Specialist will advise clients on goals,	 curriculum, and best way to execute against professional development objectives. He or she will advise on relevant solutions to educational curriculum strategy. Potential roles will include, but not be limited to, designing educational material conceptualization strategies; distilling best practices in corporate learning and professional development into comprehensive training guidelines for clients; and conducting research on innovations in educational technology. He or she will interface with clients, and conduct outreach on new business and/or partnership opportunities.'},
        {title: 'Training and Curriculum Advisor', description: 'The Training and Curriculum Adivisor will advise clients on goals,	 curriculum, and best way to execute against professional development objectives. He or she will advise on relevant solutions to educational curriculum strategy. Potential roles will include, but not be limited to, designing educational material conceptualization strategies; distilling best practices in corporate learning and professional development into comprehensive training guidelines for clients; and conducting research on innovations in educational technology. He or she will interface with clients, and conduct outreach on new business and/or partnership opportunities.'},
      ]
    },
    three: {
      educationLevel: ['M.S.', 'PhD'],
      educationField: ['Education'],
      experienceField: ['Education'],
      positions: [
        {title: 'Director of Education Services', description: 'We are seeking a dynamic and innovative educator and leader to fill our role of Director of Education Services. The new Director will lead the successful operation of our growing and innovative education programs, develop curriculum, maintain contracts, and manage a staff of more than a dozen teachers. He or she will: provides thought leadership and leads the growth of educational vision services; develop and maintain relationships with Education Directors, school systems, and other key education influencers; manage requests for services and staff caseloads; collaborate with Early Supports and Services agencies to provide for vision needs of children ages birth to three; contributes to marketing, business development, and grant proposal efforts.' },
        {title: 'Educational Leadership Director', description: 'We are seeking an Educational Services Advisor to join our Staff Development Solutions Team. For the right motivated individual, there is an excellent opportunity for career development and advancement. Consultants work in a deadline-oriented, fast paced environment as part of a growing team consisting of consulting and operations staff. This position revolves around technology, policy and financial management functions. Consultants are vital in achieving stated business objectives. Responsibilities include leading current projects and working with project managers to develop new business in a fast-paced and demanding environment. The selected candidate will be responsible for: preparing written status reports for clients; assisting proposal teams, including writing sections, coordinating efforts, and preparing proposal submissions; and leading clients through implementation processes for our web-based technologies.'},

      ]
    }
  }
}

// console.log(jobFields['Education'])

function createPosting(sector) {
  // determine experience level;
    // this will spit out the  experience level, educationLevel,
    // let sector= sector;
    if (sector === 'Human Resources') sector = 'humanResources'

    let experienceRanking = createExperienceRanking();
    console.log('experienceRanking', experienceRanking)
    let possibilities = Object.assign({}, jobFields[sector][experienceRanking]);
    let educationLevel = possibilities['educationLevel'][Math.floor(Math.random()*possibilities['educationLevel'].length)];
    let educationField = possibilities['educationField'][Math.floor(Math.random()*possibilities['educationField'].length)];
    let experienceField = possibilities['experienceField'][Math.floor(Math.random()*possibilities['experienceField'].length)];
    let experienceLevel = createExperienceLevel(experienceRanking)
    let wholePosition = possibilities['positions'][Math.floor(Math.random()*possibilities['positions'].length)];
    let positionTitle = wholePosition.title;
    let positionDescription = wholePosition.description;
    return {positionTitle, positionDescription, educationLevel, educationField, experienceLevel, experienceField}

}


module.exports = {createPosting, jobFields}
// create a
