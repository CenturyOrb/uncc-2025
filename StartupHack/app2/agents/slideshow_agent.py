import json
from openai import AsyncOpenAI

class SlideshowAgent:
    
    def __init__(self, model="gpt-4o-mini"):
        # self.client = AsyncOpenAI(api_key="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")
        self.model = model

    async def make_slides(self, task_info, user_data, chat_history):
        
        topic = task_info.get("task_name", "Untitled Topic")
        query = task_info.get("query", "")
        task_type = task_info.get("task_type", "slides")

        system_prompt = (
            "You are a content creator AI that produces clear, structured, and visually scannable "
            "Markdown reports to help users learn about a topic. "
            "The tone should be friendly but professional — think 'AI study guide'. "
            "Always include headers, lists, and optional emoji to make it engaging."
        )

        user_prompt = f"""
User info:
{json.dumps(user_data, indent=2)}

Task info:
{json.dumps(task_info, indent=2)}

Recent conversation:
{json.dumps(chat_history[-5:], indent=2)}  # last few messages for context

Now create a Markdown-based summary, guide, or intro on the topic **{topic}**, 
based on the above data.

The Markdown should include:
- A `# Title`
- A short 2–3 sentence overview
- `## Key Concepts`
- Bullet points or short explanations
- `## Why It Matters`
- `## Next Steps / Resources`

Return ONLY the Markdown text, no extra commentary.
"""

        response = await self.client.chat.completions.create(
            model=self.model,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
            temperature=0.7,
        )

        markdown_output = response.choices[0].message.content.strip()
        print(f"[SlideshowAgent] Generated markdown for topic: {topic}")
        return markdown_output
