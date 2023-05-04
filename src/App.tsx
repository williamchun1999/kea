import { FriendTaskOverview } from "./components/friend_task_overview";

// Temporary Hard coded data response of friends tasks
const friendsTaskResponse = [
  {
    userName: "William",
    tasks: [
      {
        taskName: "5 questions of Leetcode",
        taskType: "Progress",
        taskCompleted: false,
        taskProgress: 0.8,
      },
    ],
  },
  {
    userName: "Chloe",
    tasks: [
      {
        taskName: "Finish Essay",
        taskType: "Checkbox",
        taskCompleted: false,
        taskProgress: null,
      },
      {
        taskName: "3 questions of Leetcode",
        taskType: "Progress",
        taskCompleted: true,
        taskProgress: 1,
      },
    ],
  },
];

function App() {
  return (
    <>
      <div className="card">
        <FriendTaskOverview friendsTasks={friendsTaskResponse} />
      </div>
    </>
  );
}

export default App;
