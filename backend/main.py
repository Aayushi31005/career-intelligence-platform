from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.api.routes import router

app = FastAPI(
    title="Career Intelligence Platform",
    description="Decision-support backend for career readiness and navigation",
    version="0.1.0"
)

# ✅ CORS middleware (THIS IS THE MISSING PIECE)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],          # fine for local + demo
    allow_credentials=True,
    allow_methods=["*"],          # allows OPTIONS, POST, GET
    allow_headers=["*"],
)

# ✅ include routes AFTER middleware
app.include_router(router)

@app.get("/")
def health_check():
    return {"status": "Backend is running"}