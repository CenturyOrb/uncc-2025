from fastapi import APIRouter, Request
from pydantic import BaseModel
from app2.workflows.resources_flow import resource_flow

router = APIRouter()

class ResourceRequest(BaseModel):
    user_id: str
    content: str
    from_user: bool

@router.post("/run")
async def run_resource_flow(request: Request, body: ResourceRequest):
    """
    request → FastAPI object to access app.state
    body → Pydantic model with user_id and query
    """
    db_agent = request.app.state.db_agent  # get db_agent from app.state
    clean_query = body.content.strip()       # sanitize input

    response = await resource_flow(
        user_id=body.user_id,
        query=clean_query,
        db_agent=db_agent
    )
    return {"workflow_response": response}
