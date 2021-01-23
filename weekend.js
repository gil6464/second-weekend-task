"use strict"
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
          ,  {hour : '2-digit', minute:'2-digit'});

          day.totalTime = Math.abs(day.finishedAt - day.startAt) / 36e5;
     
          day.taskFinishedPrecent = Math.floor((day.taskFinished / day.taskGiven) * 100)  
};

const headsOfTable = ["Started at:", "Finished at:",
 "Total time spent:", "Task given:", "Task finished:", "Task finished % :", "Topic:" ];
     
  document.write(`<table>`)
     
  for (let title of headsOfTable) {
       document.write(`<th class = "info" >  ${title} </th>`)
  };

      for (let day of preCourse) {
               let classNameTime;
               let classNameTask;
          { if (day.totalTime < 8) {
               classNameTime = 'little'
          } else if (day.totalTime <= 10){
                classNameTime = 'medium'
          } else {
                classNameTime = 'alot'
          }   
           if (day.taskFinishedPrecent < 75){
               classNameTask = 'bad'
          } else if (day.taskFinishedPrecent < 90){
               classNameTask =  'almost'
          } else {
               classNameTask = 'good' 
          }
           document.write(`<tr>
           <td> ${day.startAtHour} </td>
           <td> ${day.finishedAtHour} </td>
           <td class = "${classNameTime}"> ${day.totalTime} </td>
           <td> ${day.taskGiven} </td>
           <td> ${day.taskFinished} </td>
           <td class = "${classNameTask}"> ${day.taskFinishedPrecent} % </td>
           <td> ${day.topic} </td> </tr>`)
          }        
     };
 document.write(`</table>`);
