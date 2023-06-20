# OpenAI Simple React Chatbot & Fastapi
## Based on Following Repos
<br> Frontend: https://github.com/FredrikOseberg/chatbot-tutorial </br>
<br> Backend: https://github.com/oikosohn/openai-quickstart-fastapi </br>
## Description
Built for testing and building simple chat applications for prompt engineering and task automation at scale
# Instructions
1. Install Python
2. Clone This Repo
3. Get yarn (Mac: https://tecadmin.net/install-yarn-macos/)
```bash
$ brew install yarn 
```
## Backend
4. Build python venv
```bash
   # Linux
   $ python -m venv venv
   $ . venv/bin/activate
```
5. Install requirements.txt
```bash
   $ pip install -r requirements.txt
```
6. Copy example .env file and set OPENAI_API_KEY
```bash
   # Linux
   $ cp .env.example .env
```
7. Launch fastapi
```bash
   $uvicorn main:app
```
8. Link for API testing
```bash
   http://127.0.0.1:8000/docs 
```
## Frontend
9. Launch seperate terminal
7. Navigate to frontend and launch react
```bash
   $yarn start
```



