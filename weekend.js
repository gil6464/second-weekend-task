const preCourse = [
    {
      startAt : new Date("2021-01-10:9:30"),
      finishedAt : new Date("2021-01-10:21:45"),
      taskGiven : 3,
      taskFinished : 2,
      topic : "Html" ,
    },
    {
      startAt :  new Date("2021-01-11:9:30"),
      finishedAt : new Date("2021-01-11:15:30"),
      taskGiven : 3,
      taskFinished : 3,
      topic : "Css" ,
    },
    { 
      startAt :  new Date("2021-01-12:9:30"),
      finishedAt : new Date("2021-01-12:16:15"),
      taskGiven : 4,
      taskFinished : 3,
      topic : "Vscode" ,
    },
    {
      startAt :  new Date("2021-01-13:9:30"),
      finishedAt : new Date("2021-01-13:18:30"),
      taskGiven : 2,
      taskFinished : 2,
      topic : "Css" ,
    },
    {
      startAt :  new Date("2021-01-14:9:30"),
      finishedAt : new Date("2021-01-14:23:45"),
      taskGiven : 1,
      taskFinished : 1,
      topic : "GitHub",
    },
    {
      startAt :  new Date("2021-01-17:9:30"),
      finishedAt : new Date("2021-01-17:21:30"),
      taskGiven : 3,
      taskFinished : 3,
      topic : "JavaScript" ,
    },
    {
      startAt :  new Date("2021-01-18:9:30"),
      finishedAt : new Date("2021-01-18:20:30"),
      taskGiven : 6,
      taskFinished : 5,
      topic : "Loops" ,
    },
    {
      startAt :  new Date("2021-01-19:9:30"),
      finishedAt : new Date("2021-01-19:23:15"),
      taskGiven : 12,
      taskFinished : 8,
      topic : "Arrays" ,
    },
    {
      startAt :  new Date("2021-01-20:9:30"),
      finishedAt : new Date("2021-01-20:23:30"),
      taskGiven : 7,
      taskFinished : 5,
      topic : "Conditions" ,
    },
    {
      startAt :  new Date("2021-01-21:9:30"),
      finishedAt : new Date("2021-01-21:19:00"),
      taskGiven : 3,
      taskFinished : 2,
      topic : "Objects" ,
    },
];

  for (const day of preCourse) {
       day.startAtHour = day.startAt.toLocaleTimeString([]
       , {hour : '2-digit', minute:'2-digit'});
       day.finishedAtHour = day.finishedAt.toLocaleTimeString([]
       , {hour : '2-digit', minute:'2-digit'});

       day.totalTime = Math.abs(day.finishedAt - day.startAt) / 36e5;
     
       day.taskFinishedPrecent = 
       Math.floor((day.taskFinished / day.taskGiven) * 100)  
  };

    const headsOfTable = ["Started at:", "Finished at:",
     "Total time spent:", "Task given:", "Task finished:",
     "Task finished % :", "Topic:" ];
     
    const body = document.body;
    const heading = document.createElement("h1");
    heading.textContent = "This is Dom manipulation task:"
    body.append(heading);

    const table = document.createElement("table");
     
    for (const title of headsOfTable) {

      const headsOfTable = document.createElement("th"); 
      headsOfTable.textContent = title;
      headsOfTable.className = "info";

      table.append(headsOfTable);
      body.append(table);
    };

    for (const day of preCourse) {    
       
        const rows = document.createElement("tr");
         table.append(rows);

        const startHour = document.createElement("td");
         startHour.textContent = day.startAtHour; 
         table.append(startHour);

        const endHour = document.createElement("td");
         endHour.textContent = day.finishedAtHour;
         table.append(endHour);

        const totalHours = document.createElement("td");
         totalHours.textContent = day.totalTime;

         if (day.totalTime < 8) {
             totalHours.className = "little";
         } else if (day.totalTime <= 10) {
             totalHours.className = "medium";
         } else {
             totalHours.className = "alot";  
         };
             table.append(totalHours);

        const tasks = document.createElement ("td");
          tasks.textContent = day.taskGiven;
          table.append(tasks);

        const finishTask = document.createElement("td");
         finishTask.textContent = day.taskFinished;
         table.append(finishTask);

        const finishTaskPrecent = document.createElement("td");
         finishTaskPrecent.textContent = day.taskFinishedPrecent;

          if (day.taskFinishedPrecent < 75) {
            finishTaskPrecent.className = "bad";
          } else if (day.taskFinishedPrecent < 90) {
            finishTaskPrecent.className = "almost";
          } else {
            finishTaskPrecent.className = "good";
          };
         table.append(finishTaskPrecent);

        const topicData = document.createElement("td");
         topicData.textContent = day.topic;
         table.append(topicData);
    };

