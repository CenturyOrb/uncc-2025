# postgres_agent.py
import asyncpg

class PostgresAgent:
    def __init__(self):
        self.pool = None

    async def init(self):
        # Replace with your ngrok info
        self.pool = await asyncpg.create_pool(
            host="2.tcp.ngrok.io",
            port=18184,
            user="lewy",
            password="hackathon",
            database="uncc_2025"
        )
        print("[PostgresAgent] Connection pool initialized.")

    async def read_user(self, user_id: str):
        async with self.pool.acquire() as conn:
            row = await conn.fetchrow(
                "SELECT auth_id, user_name, user_description, upvote_count "
                "FROM user_table WHERE auth_id=$1",
                user_id
            )
            if row:
                return dict(row)
            return None

    async def read_chat_history(self, user_id: str, limit: int = 10):
        
        async with self.pool.acquire() as conn:
            rows = await conn.fetch(
                """
                SELECT content, from_user
                FROM comment
                WHERE user_id = $1
                ORDER BY id DESC
                LIMIT $2
                """,
                user_id, limit
            )
            # Reverse so oldest messages come first
            history = [dict(row) for row in reversed(rows)]
            return history
        
    async def add_comment(self, user_id: int, content: str, from_user: bool = False):
        async with self.pool.acquire() as conn:
            await conn.execute(
                "INSERT INTO comment(user_id, content, from_user) VALUES($1, $2, $3)",
                user_id, content, from_user
            )

    async def add_task(self, user_id: int, task: str, method_text=False, method_audio=False, method_video=False):
        async with self.pool.acquire() as conn:
            await conn.execute(
                "INSERT INTO task_table(user_id,task, method_text, method_audio, method_video) "
                "VALUES($1, $2, $3, $4, $5)",
                user_id, task, method_text, method_audio, method_video
            )

    async def close(self):
        await self.pool.close()
        print("[PostgresAgent] Connection pool closed.")
