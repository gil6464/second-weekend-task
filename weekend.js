let preCourse = [
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

for (let day of preCourse) {
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
     
  let body = document.body;
  const heading = document.createElement("h1");
  heading.textContent = "This is Dom manipulation task:"
  body.append(heading);

 let table = document.createElement("table");
     
  for (let title of headsOfTable) {
       let headsOfTable = document.createElement("th")
       headsOfTable.textContent = title;
       headsOfTable.className = "info"
       table.append(headsOfTable)
  };

  body.append(table);

  for (let day of preCourse) {    
   
       if (day.taskFinishedPrecent < 75) {
        day.taskFinishedPrecent.className = 'bad'
     } else if (day.taskFinishedPrecent < 90) {
      day.taskFinishedPrecent.className =  'almost'
     } else {
      day.taskFinishedPrecent.className = 'good' 
     }
      let rows = document.createElement("tr");
      table.append(rows);

       let startHour = document.createElement("td");
         startHour.textContent = day.startAtHour; 
         table.append(startHour);

       let endHour = document.createElement("td");
         endHour.textContent = day.finishedAtHour;
         table.append(endHour);

         let totalHours = document.createElement("td");
         totalHours.textContent = day.totalTime;
         console.log(totalHours);

         if (day.totalTime < 8) {
            totalHours.classList.add("little");
         } else if (day.totalTime <= 10) {
            totalHours.classList.add("medium");
         } else {
            totalHours.classList.add("alot");  
         }
         table.append(totalHours);

       let tasks = document.createElement ("td");
         tasks.textContent = day.taskGiven;
         table.append(tasks);

      let finishTask = document.createElement("td");
        finishTask.textContent = day.taskFinished;
        table.append(finishTask);

       let finishTaskPrecent = document.createElement("td");
         finishTaskPrecent.textContent = day.taskFinishedPrecent +"%";
         table.append(finishTaskPrecent);

       let topicData = document.createElement("td");
         topicData.textContent = day.topic;
         table.append(topicData);
   }
   // }
  
