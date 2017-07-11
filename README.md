## Job Fair

*What is Job Fair?*

Job Fair is a service that looks to solve the problem of unconsoius bias in sourcing job candidates. We do this by allowing candidates to apply to jobs without any identifying information outside of their credentials and a brief cover letter. We also evaluate the cover letters sent to prospective employers to see if they betray any demographic information about the candidate, and only allow it to be submitted once it's ambiguous enough. This feature relies on a machine learning algorithm to make predictions on an individual's demographics.

*What is unconscious bias?*

Unconscious bias relates to the attitudes, beliefs, and opinions about people (or things) that operate outside our awareness, yet have a significant impact in determining our judgment and our behavior towards other people (or things). While bias is not intentional, it is a trait that is pervasive in social interactions and judgment. Culture, upbringing, and life experience all shape how we think about race, gender, orientation, and other individual attributes. These unconscious attitudes affect our behavior and decision-making, and can have unintentional and negative affects on groups of people. In the workplace, for example, an individual's demographics such as gender and ethnicity can impact perceptions on competence and ability. These kinds of biases inform decisions on hiring, promotions, and performance evaluations.

*Features of the Job Fair application*

- Job-seekers

Using LinkedIn oAuth, we allow users to create an account that is pre-populated with their tagline and professional summary. Users can further update their profiles with information on their past job experiences, professional skills, and education. Additionally, they may look through an illustrative list of job postings and submit applications, which are pre-populated with their own LinkedIn professional summary. The user can either use this summary as their cover letter or edit it as they choose.  They key feature of the job application site is a tool to check cover letters for signals of race, gender, and sexual orientation. By clicking "test," users will receive an automated prediction of their demographics, which they may use to make adjustments that yield a more demographically-ambiguous cover letter.

- Employers

Emplyers may use this platform to create job postings, as well as review and screen applications. Viewing information only on the professional credentials of applicants, employers will have the ability to create shortlists of the top applicants.

*How can I install and run this fantastic service on my laptop (for some reason)?*

(This assumes you meet certain base dependency requirements, like JavaScript and Python3)

- Clone this repo
- Create a Postgres database called `anonyjobsapp`
- (optional) Run `node seed.js` to pre-populate the database
- Inside the root of the repo folder, run `npm install`
- Also run `pip3 install -r requirements.txt`
- Run `npm run start-dev` to get the dev version of our service running
- Navigate to `localhost:3000` and ***PRESTO!***
