# Day 1 (Introduction and Development Essentials)
## Introduction to SDLC and Devops
Explaining the software Development Life Cycle and how it is all connected to perform any app development.

1. Plan: Where planning about the application modification happens
2. Design: Designing the modification and code changes
3. Implement: Do the actual code development
4. Test: Test our Code Manually (Quality Assurance) or Automatically (Write tests)
5. Deploy: Deploy our code to our infrastructure
6. Maintain: Administration and Monitoring ouf our application and infrastructure

Six steps, One Lifecycle
Plan (Brainstorm)--> Design (App Structure) --> Implement (Or Develop) --> Test (Manual & Automatic) --> Deploy (To Staging + Production) --> Maintain (Admin + Monitor)

## Source Code Management
Github Basics and Collaborative Development
Explained Gitflow and how the code modification and collaboration work is interconnected and related.
Created our Github Accounts and Netlify Accounts.

### GIT BASICS:
```
## Clone and existing repository
git clone [repo_link]
## Do your modifications
## Add your changes so that git is aware of them
git add .
## Add a commit with a comment on what you changed in the code
git commit -m "Your Message Here"
## Push your code to the repository
git push origin main
```

### GIT BASICS (Working with Branches): Git Development while working as a team.
```
git clone [repo_link]
git branch YOUR_BRANCH
git checkout YOUR_BRANCH
## Do your modifications
git add .
git commit -m "Commit Message"
git push origin YOUR_BRANCH
```
Then do a Pull Request and ask for code review

### REVERT Changes back to a specific Commit History:
```
git checkout main
git reset --hard <commit-hash>
git push origin main --force
```

## Explained Cloud Models
SAAS: Software as a service: Example: Teams, Zoom etc..
PAAS: Platform as a service: Example: Nelify, Vercel, Atlas Mongo
IAAS: Infrastructure as a service: Example: AWS, Azure, GCP, Digital Ocean, Ali Baba Cloud


## Static VS Full Stack Apps
Static App have static contents
Full stack app has different components: **Frontend + Backend + DB**