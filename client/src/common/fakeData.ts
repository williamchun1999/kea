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
        taskProgress: 8,
        taskProgressTotal: 10,
        userId: "3809e1a3-95fc-41f7-82b9-6e00f8d36079",
        id: "3c4c7f9b-116a-4621-95be-76e7bbc9976e",
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
        userId: "0cd30d2c-5b1b-47a4-b430-6b329e0597e6",
        id: "2e1c4a18-2505-41c7-9e5f-6e0d0a9e6e40",
      },
      {
        taskName: "3 questions of Leetcode",
        taskType: TaskType.progress,
        taskCompleted: true,
        taskProgress: 1,
        taskProgressTotal: 3,
        userId: "0cd30d2c-5b1b-47a4-b430-6b329e0597e6",
        id: "1d322d6c-aa48-472e-85b9-0f496c1c14ab",
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
        taskProgress: 8,
        taskProgressTotal: 10,
        userId: "3809e1a3-95fc-41f7-82b9-6e00f8d36079",
        id: "3c4c7f9b-116a-4621-95be-76e7bbc9976e",
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
        userId: "0cd30d2c-5b1b-47a4-b430-6b329e0597e6",
        id: "2e1c4a18-2505-41c7-9e5f-6e0d0a9e6e40",
      },
      {
        taskName: "3 questions of Leetcode",
        taskType: TaskType.progress,
        taskCompleted: true,
        taskProgress: 1,
        taskProgressTotal: 3,
        userId: "0cd30d2c-5b1b-47a4-b430-6b329e0597e6",
        id: "1d322d6c-aa48-472e-85b9-0f496c1c14ab",
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
        taskProgress: 8,
        taskProgressTotal: 10,
        userId: "3809e1a3-95fc-41f7-82b9-6e00f8d36079",
        id: "3c4c7f9b-116a-4621-95be-76e7bbc9976e",
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
        userId: "0cd30d2c-5b1b-47a4-b430-6b329e0597e6",
        id: "2e1c4a18-2505-41c7-9e5f-6e0d0a9e6e40",
      },
      {
        taskName: "3 questions of Leetcode",
        taskType: TaskType.progress,
        taskCompleted: true,
        taskProgress: 1,
        taskProgressTotal: 3,
        userId: "0cd30d2c-5b1b-47a4-b430-6b329e0597e6",
        id: "1d322d6c-aa48-472e-85b9-0f496c1c14ab",
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
        userId: "0cd30d2c-5b1b-47a4-b430-6b329e0597e6",
        id: "2e1c4a18-2505-41c7-9e5f-6e0d0a9e6e40",
      },
      {
        taskName: "3 questions of Leetcode",
        taskType: TaskType.progress,
        taskCompleted: true,
        taskProgress: 1,
        taskProgressTotal: 3,
        userId: "0cd30d2c-5b1b-47a4-b430-6b329e0597e6",
        id: "1d322d6c-aa48-472e-85b9-0f496c1c14ab",
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
      userId: "a48dd82a-318b-439a-b1f5-cb98f22a0ddb",
      id: "26225aca-8a7d-4079-96b9-66df3a67cd26",
    },
    {
      taskName: "do 5 leetcodes",
      taskType: TaskType.progress,
      taskCompleted: false,
      taskProgress: 2,
      taskProgressTotal: 5,
      userId: "a48dd82a-318b-439a-b1f5-cb98f22a0ddb",
      id: "85016d1a-4016-4a5e-a93e-d1c9e987b995",
    }
  ],
};
