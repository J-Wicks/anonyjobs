## Anonyjob

*What is Anonyjob?*

Anonyjob is a service that looks to solve the problem of unconsoius bias in sourcing job candidates. We do this by allowing candidates to apply to jobs without any identifying information outside of their credentials and a brief cover letter. We also evaluate the cover letters sent to prospective employers to see if they betray any demographic information about the candidate, and only allow it to be submitted once it's ambiguous enough.

*How can I install and run this fantastic service on my laptop (for some reason)?*

(This assumes you meet certain base dependency requirements, like JavaScript and Python3)

- Clone this repo
- Create a Postgres database called `anonyjobsapp`
- (optional) Run `node seed.js` to pre-populate the database
- Inside the root of the repo folder, run `npm install`
- Also run `pip3 install -r requirements.txt`
- Run `npm run start-dev` to get the dev version of our service running
- Navigate to `localhost:3000` and ***PRESTO!***
