"""
Super simplified LangGraph-like workflow.
It just orchestrates agent calls and returns mock results.
"""

from app2.agents.talk_agent import TalkAgent
from app2.agents.slideshow_agent import SlideshowAgent
from app2.agents.postgres_agent import PostgresAgent

async def resource_flow(user_id: str, query: str, db_agent): # run flow to generate resources
    print("🧠 Starting LangGraph workflow...")

    # Initialize mock agents
    talk_agent = TalkAgent()
    slide_agent = SlideshowAgent()

    # Step 1: Read user info (mock)
    user_data = await db_agent.read_user(user_id)
    print(f"📄 User data: {user_data}")

    # Step 2: Generate response
    talk_result = await talk_agent.chat_with_model(
    user_id=user_id,
    user_input=query,
    user_data=user_data
)
    response_text = talk_result["response_text"]
    
    print(f"💬 Talk agent says: {response_text}")

    
    # add to DB
    await db_agent.add_comment(user_id=user_id, content=response_text, from_user=False)
    chat_history = await db_agent.read_chat_history(user_id)

    # Step 4: Check if user query includes creating a task
    task = False
    markdown_content = None
    if talk_result["create_task"]:
        task_info = talk_result["task_info"]
        kwargs = {k: (k == task_info["task_type"]) for k in ["method_text", "method_audio", "method_video"]}
        await db_agent.add_task(user_id=user_id, task=task_info["task_name"], **kwargs)
        print(f"📌 Task created for {task_info['task_type']}")
        task = True

        # Step 5: Create Markdown report
        markdown_content = await slide_agent.make_slides(
            task_info=task_info,
            user_data=user_data,
            chat_history=chat_history
        )


    print("✅ LangGraph workflow complete.")
    return {
        "user": user_data,
        "query": query,
        "content": response_text, 
        "task": task,
        "slides": markdown_content, 
    }
