# KEA (Keep Eachother Accountable)
An Accountability Task Tracker App. Users can create weekly tasks and follow other users to check in on eachother's progress throughout the week.

**Link to project:** https://jade-courageous-perch.cyclic.app

![alt tag](https://github.com/williamchun1999/kea/blob/main/public/kea.png)

## How It's Made:

**Frontend:** React, Typescript, React-Router, Tailwind CSS, Daisy UI

**Backend:** NodeJS, MongoDB, Express, PassportJS (Local Auth)

We understand that basic task tracker/reminder applications are flawed since it is extremely easy to procrastinate and ignore one's tasks without any form of accountability. KEA aims to solve this by allowing users to be engaged with other friends that are also seeking to build new habits or determined to complete an assigment/project. By seeing eachother's progress, there is social accountability built by having individual tasks be no longer kept to yourself.

## Optimizations
Our early discussions included using React-Redux to manage global states such as the logged in user's information throughout the application. We decided that React-Redux is not necessary. With PassportJS allowing us to keep the logged in user's id persistent throughout the application, it acted as the primary global state needed. Other values such as the User's tasks, or friends' tasks would need to be refetched any time their values would change to stay true to the database values. Therefore, mutating of any global state is unecessary and not required.


However, we are fetching for the logged in user's information in all pages, so utilizing the React Context API for just a simple user information state would reduce the amount of refetching. Other optimizations include enabling pagination for user's friends for scalability of the application.

Cyclic enabled continuous deployment for our application as well, so that any changes in our main branch will be sent to production and available to users immediately.


## Lessons Learned:

CRUD operations in isolation are quite simple, but certain requests will involve a multi-layered solution, such as a deleting an account in this application. Not only are we deleting the user's info, but also the user's tasks, as well as the user's ID in any other user's that are following them. The team as a whole became more proficient with full-stack development utilizing JIRA to help delegate our tasks efficiently and to reach our goals in a timely manner.

## Contributors:

William Chun 

Elena Kim

Chloe Kim
