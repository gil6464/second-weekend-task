"use strict"
let preCourse = [
     {
      startAt: new Date("2021-01-10:9:30"),
      finishedAt: new Date("2021-01-10:21:30"),
      taskGiven: 2,
      taskFinished: 2,
      topic: "Html" ,
     },
     {
      startAt:  new Date("2021-01-11:9:30"),
      finishedAt: new Date("2021-01-11:15:30"),
      taskGiven: 3,
      taskFinished: 3,
      topic: "Css" ,
     },
     { 
      startAt:  new Date("2021-01-12:9:30"),
      finishedAt: new Date("2021-01-12:16:30"),
      taskGiven: 3,
      taskFinished: 3,
      topic: "Vscode" ,
     },
     {
      startAt:  new Date("2021-01-13:9:30"),
      finishedAt: new Date("2021-01-13:18:30"),
      taskGiven: 2,
      taskFinished: 2,
      topic: "Css" ,
     },
     {
      startAt:  new Date("2021-01-14:9:30"),
      finishedAt: new Date("2021-01-14:23:30"),
      taskGiven: 1,
      taskFinished: 1,
      topic: "GitHub",
     },
     {
      startAt:  new Date("2021-01-17:9:30"),
      finishedAt: new Date("2021-01-17:21:30"),
      taskGiven: 3,
      taskFinished: 3,
      topic: "JavaScript" ,
     },
     {
      startAt:  new Date("2021-01-18:9:30"),
      finishedAt: new Date("2021-01-18:20:30"),
      taskGiven: 6,
      taskFinished: 5,
      topic: "Loops" ,
     },
     {
      startAt:  new Date("2021-01-19:9:30"),
      finishedAt: new Date("2021-01-19:23:30"),
      taskGiven: 12,
      taskFinished: 8,
      topic: "Arrays" ,
     },
     {
      startAt:  new Date("2021-01-20:9:30"),
      finishedAt: new Date("2021-01-20:23:30"),
      taskGiven: 6,
      taskFinished: 5,
      topic: "Conditions" ,
     },
     {
      startAt:  new Date("2021-01-21:9:30"),
      finishedAt: new Date("2021-01-10:19:30"),
      taskGiven: 1,
      taskFinished: 1,
      topic: "Objects" ,
     },
]

for (let day of preCourse) {
     day.totalTime = ((day.finishedAt.getHours())-
     (day.startAt.getHours()))
     
     day.taskFinishedPrecent = Math.floor((day.taskFinished / day.taskGiven) * 100) + "%"

     day.startHours = day.startAt.getHours() + ":" + day.startAt.getMinutes();
     day.lastHours = day.finishedAt.getHours() + ":" + day.finishedAt.getMinutes();
     
}
const headsOfTable = ["Started at:", "Finished at:",
 "Total time spent:", "Task given:", "Task finished:", "Task finished % :", "Topic:" ];
     
 document.write(`<table>`)
     
 for (let title of headsOfTable) {
      document.write(`<th class = "info" >  ${title} </th>`)
 }
 
      for (let i = 0; i<preCourse.length; i++) {
           document.write(`<tr><td> ${preCourse[i].startHours}
           ${preCourse[i].lastHours} ${preCourse[i].totalTime}
           ${preCourse[i].taskGiven} ${preCourse[i].taskFinished}
           ${preCourse[i].taskFinishedPrecent} ${preCourse[i].topic} </td></tr>`)
            }
          

 document.write(`</table>`)
