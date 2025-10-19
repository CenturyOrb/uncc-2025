# talk_agent.py
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, AIMessage, SystemMessage
from dotenv import load_dotenv
import os

# TODO - openai key exposed
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.6, openai_api_key="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")

# Store conversation history per user
user_conversations = {}

class TalkAgent:

    async def chat_with_model(self, user_id: str, user_input: str, user_data: str):
        task_info = None
        # Initialize conversation if not exists
        if user_id not in user_conversations:
            system_prompt = (
            f"You are a helpful AI assistant. "
            f"User info: {user_data}. "
            f"Your job: guide the user to provide useful info for a learning task (topic and format: slides, audio, text). "
            f"You should actively ask for missing details to make the task better. "
            f"However, if after one or two clarifying prompts the user has nothing more to add, "
            f"tell them: 'If you don't have anything else to add, I will create the slides now.' "
            f"Once that point is reached, you may produce a learning task even with partial information. "
            f"Be clear, concise, and action-oriented—always aim to produce a usable learning task."
            f"Do not create slides here, it will be picked up by a downstream task as long as user enters keyword."
        )
            user_conversations[user_id] = [SystemMessage(content=system_prompt)]
        
        # Get user's conversation history
        messages = user_conversations[user_id]
        messages.append(HumanMessage(content=user_input))
        response = llm.invoke(messages)
        response_text = response.content
        messages.append(AIMessage(content=response.content))
        user_conversations[user_id] = messages

        # Determine task creation

        task_types = {"slides": "method_text", "docs": "method_text", "audio": "method_audio", "video": "method_video"}
        create_task = False
        task_type = None
        for key in task_types:
            if key in user_input.lower():
                create_task = True
                task_type = key
                break

            task_name = None
        if create_task:
            # Ask the model for a concise task name
            task_name_prompt = (
                f"Create a very short name for this learning task (5 words or less):\n"
                f"Task description: {user_input}"
            )
            task_name_response = llm.invoke([HumanMessage(content=task_name_prompt)])
            task_name = task_name_response.content.strip()

            

            task_info = {
                "user_id": user_id,
                "query": user_input,
                "task_type": task_type,
                "task_name": task_name
            }

        return {
            "response_text": response_text,
            "create_task": create_task,
            "task_type": task_type,
            "task_info": task_info
        }

        return response.content

    async def respond_to_user(self, user_data):
        # You could initialize or fetch conversation history here too if needed
        return f"Hi {user_data['name']}, here's your personalized learning plan!"
