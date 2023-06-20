# OpenAI Simple React Chatbot & FastAPI
## Description
React frontend with Python fastapi backend for rapid testing, prompt engineering, and task automation at low cost
<p align="center"> 
   <img src="https://github.com/whoynes/openai-reactchatbot-fastapi/blob/main/misc/readmepic.png" width="275" height="500"> 
</p>

# Run in Codespace
[![Open in GitHub Codespaces](https://img.shields.io/static/v1?style=for-the-badge&label=GitHub+Codespaces&message=Open&color=lightgrey&logo=github)](https://codespaces.new/whoynes/openai-reactchatbot-fastapi)
<br> Skip steps 1 - 3 </br>
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
# Reference
<br> Frontend: https://github.com/FredrikOseberg/chatbot-tutorial </br>
<br> Backend: https://github.com/oikosohn/openai-quickstart-fastapi </br>



