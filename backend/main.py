from fastapi import FastAPI
from backend.api.routes import router

app = FastAPI(
    title="Career Intelligence Platform",
    description="Decision-support backend for career readiness and navigation",
    version="0.1.0"
)

app.include_router(router)

@app.get("/")
def health_check():
    return {"status": "Backend is running"}