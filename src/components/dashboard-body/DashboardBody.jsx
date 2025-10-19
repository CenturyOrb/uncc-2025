import { useState, useContext } from "react";
import styles from "./dashboardbody.module.css";
import { IoSearchOutline } from "react-icons/io5";

import UserProfile from "../user-profile/UserProfile.jsx";
import ActivityGrid from "../activity-grid/ActivityGrid.jsx";
import LearnlyPrompt from "../learnly-prompt/LearnlyPrompt.jsx";
import ChatDisplay from "../chat-display/ChatDisplay.jsx";
import MarkdownViewer from "../markdown-viewer/MarkdownViewer.jsx";

import { UserContext } from "../../App.jsx";

const DashboardBody = () => {
  const [taskValue, setTaskValue] = useState("");
  const { learning, setLearning } = useContext(UserContext);

  const md = `
# Setup

1. Go to project directory  
2. Run \`git init\` — initialize Git repository

# Common Commands

- \`git add .\` — stage all files  
- \`git commit -m "<description>"\` — save staged files with a message  
- \`git log\` — view commit history  
- \`git checkout <commit-id>\` — switch to a specific commit  
- \`git remote add <alias> <repo-url>\` — connect local repo to remote  
- \`git push -u <alias> <branch>\` — push commits to remote  
- \`git checkout -b <branch-name>\` — create and switch to new branch  
- \`git branch\` — list branches  
- \`git pull <alias> <branch>\` — pull updates from remote  
`;

  const render = learning ? (
    <MarkdownViewer content={md} />
  ) : (
    <>
      <div className={styles.task_container}>
        <IoSearchOutline color="black" size={22} />
        <input
          className={styles.task_input}
          placeholder="Searching for a task?"
          onChange={(e) => setTaskValue(e.target.value)}
          value={taskValue}
        />
      </div>
      <section className={styles.section_1}>
        <UserProfile />
        <ActivityGrid />
      </section>
      <ChatDisplay />
      <section style={{ marginTop: "auto" }}>
        <LearnlyPrompt />
      </section>
    </>
  );

  // ternary for showing which page
  return <main className={styles.dashboard_body}>{render}</main>;
};

export default DashboardBody;
