from fastapi import FastAPI
from app2.routes import learning_routes
from app2.agents.postgres_agent import PostgresAgent
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
from pyngrok import ngrok, conf

# Ngrok setup
conf.get_default().auth_token = "33xzxiZcz2D9OqJRiXdhSVZOqVp_5yK9FWW8SKpf1nn4PRXKB"

db_agent = PostgresAgent()

@asynccontextmanager
async def lifespan(app: FastAPI):
    await db_agent.init()
    app.state.db_agent = db_agent

    # Start ngrok
    public_url = ngrok.connect(8000).public_url
    print(f"Ngrok URL: {public_url}")

    yield

    await db_agent.close()

# Create the FastAPI app **once**
app = FastAPI(title="Agentic Learning MVP", lifespan=lifespan)

# Add CORS middleware
origins = ["*"]  # for dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # allow POST, OPTIONS, etc.
    allow_headers=["*"],
)

# Include routes
app.include_router(learning_routes.router, prefix="/resources", tags=["Resources"])

@app.get("/")
async def root():
    return {"message": "Agentic Learning MVP is running!"}
