let preCourse = [
     day1 = {
            startAt: new Date("2021-01-10:9:30"),
            finishedAt: new Date("2021-01-10:21:30"),
            taskGiven: 2,
            taskFinished: 2,
            topic: "Html" ,
     },
     day2 = {
            startAt:  new Date("2021-01-11:9:30"),
            finishedAt: new Date("2021-01-11:15:30"),
            taskGiven: 3,
            taskFinished: 3,
            topic: "Css" ,
     },
     day3 = { 
            startAt:  new Date("2021-01-12:9:30"),
            finishedAt: new Date("2021-01-12:16:30"),
            taskGiven: 3,
            taskFinished: 3,
            topic: "Vscode" ,
     },
     day4 = {
            startAt:  new Date("2021-01-13:9:30"),
            finishedAt: new Date("2021-01-13:18:30"),
            taskGiven: 2,
            taskFinished: 2,
            topic: "Css" ,
     },
     day5 = {
            startAt:  new Date("2021-01-14:9:30"),
            finishedAt: new Date("2021-01-14:23:30"),
            taskGiven: 1,
            taskFinished: 1,
            topic: "GitHub",
     },
     day6 = {
            startAt:  new Date("2021-01-17:9:30"),
            finishedAt: new Date("2021-01-17:21:30"),
            taskGiven: 3,
            taskFinished: 3,
            topic: "JavaScript" ,
     },
     day7 = {
            startAt:  new Date("2021-01-18:9:30"),
            finishedAt: new Date("2021-01-18:20:30"),
            taskGiven: 6,
            taskFinished: 5,
            topic: "Loops" ,
     },
     day8 = {
            startAt:  new Date("2021-01-19:9:30"),
            finishedAt: new Date("2021-01-19:23:30"),
            taskGiven: 12,
            taskFinished: 8,
            topic: "Arrays" ,
     },
     day9 = {
            startAt:  new Date("2021-01-20:9:30"),
            finishedAt: new Date("2021-01-20:23:30"),
            taskGiven: 6,
            taskFinished: 5,
            topic: "Conditions" ,
     },
     day10 = {
            startAt:  new Date("2021-01-21:9:30"),
            finishedAt: new Date("2021-01-10:19:30"),
            taskGiven: 1,
            taskFinished: 1,
            topic: "Objects" ,
     },
]

for (day of preCourse) {
     day.totalTime = ((day.finishedAt.getHours())-
     (day.startAt.getHours()))
     
     day.taskFinishedPrecent = Math.floor((day.taskFinished / day.taskGiven) * 100) + "%"
     
}