from fastapi import FastAPI, File, UploadFile, HTTPException, Request, Form, Response
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from decouple import config
import openai

#custom function imports
from functions.openai_requests import generate_prompt

app = FastAPI()

#origins
origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:4173",
    "http://localhost:4174",
    "http://localhost:3000"
]

app.add_middleware(CORSMiddleware,
allow_origins=origins,
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"]
)

#end point check health
@app.get("/health")
async def check_health():
    return {"message": "Hello World"}

@app.get("/post-chat/")
async def get_chat(string: str):
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt=generate_prompt(string),
        temperature=0.6,
    )
    result = response.choices[0].text
    return result