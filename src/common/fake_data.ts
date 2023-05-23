import { TaskType, User } from "./types";

export const friendsTaskResponse:Array<User> = [
  {
    userName: "William",
    uuid: "3809e1a3-95fc-41f7-82b9-6e00f8d36079",
    tasks: [
      {
        taskName: "5 questions of Leetcode",
        taskType: TaskType.progress,
        taskCompleted: false,
        taskProgress: 0.8,
        taskProgressTotal: 10,
      },
    ],
  },


  {
    userName: "Chloe",
    uuid: "0cd30d2c-5b1b-47a4-b430-6b329e0597e6",
    tasks: [
      {
        taskName: "Finish Essay",
        taskType: TaskType.checkbox,
        taskCompleted: false,
        taskProgress: null,
        taskProgressTotal: null,
      },
      {
        taskName: "3 questions of Leetcode",
        taskType: TaskType.progress,
        taskCompleted: true,
        taskProgress: 1,
        taskProgressTotal: 3,
      },
    ],
  },


  {
    userName: "William",
    uuid: "3809e1a3-95fc-41f7-82b9-6e00f8d36079",
    tasks: [
      {
        taskName: "5 questions of Leetcode",
        taskType: TaskType.progress,
        taskCompleted: false,
        taskProgress: 0.8,
        taskProgressTotal: 10,
      },
    ],
  },


  {
    userName: "Chloe",
    uuid: "0cd30d2c-5b1b-47a4-b430-6b329e0597e6",
    tasks: [
      {
        taskName: "Finish Essay",
        taskType: TaskType.checkbox,
        taskCompleted: false,
        taskProgress: null,
        taskProgressTotal: null,
      },
      {
        taskName: "3 questions of Leetcode",
        taskType: TaskType.progress,
        taskCompleted: true,
        taskProgress: 1,
        taskProgressTotal: 3,
      },
    ],
  },


  {
    userName: "William",
    uuid: "3809e1a3-95fc-41f7-82b9-6e00f8d36079",
    tasks: [
      {
        taskName: "5 questions of Leetcode",
        taskType: TaskType.progress,
        taskCompleted: false,
        taskProgress: 0.8,
        taskProgressTotal: 10,
      },
    ],
  },


  {
    userName: "Chloe",
    uuid: "0cd30d2c-5b1b-47a4-b430-6b329e0597e6",
    tasks: [
      {
        taskName: "Finish Essay",
        taskType: TaskType.checkbox,
        taskCompleted: false,
        taskProgress: null,
        taskProgressTotal: null,
      },
      {
        taskName: "3 questions of Leetcode",
        taskType: TaskType.progress,
        taskCompleted: true,
        taskProgress: 1,
        taskProgressTotal: 3,
      },
    ],
  },

  
  {
    userName: "Chloe",
    uuid: "0cd30d2c-5b1b-47a4-b430-6b329e0597e6",
    tasks: [
      {
        taskName: "Finish Essay",
        taskType: TaskType.checkbox,
        taskCompleted: false,
        taskProgress: null,
        taskProgressTotal: null,
      },
      {
        taskName: "3 questions of Leetcode",
        taskType: TaskType.progress,
        taskCompleted: true,
        taskProgress: 1,
        taskProgressTotal: 3,
      },
    ],
  },
];

export const currentUserDataResponse:User = {
  userName: "elena",
  uuid: "a48dd82a-318b-439a-b1f5-cb98f22a0ddb",
  tasks: [
    {
      taskName: "pair programming",
      taskType: TaskType.checkbox,
      taskCompleted: true,
      taskProgress: null,
      taskProgressTotal: null,
    },
    {
      taskName: "do 5 leetcodes",
      taskType: TaskType.progress,
      taskCompleted: false,
      taskProgress: 0.4,
      taskProgressTotal: 5,
    }
  ],
};
