function meetingsTask(input) {
    let meetings={};
    input.forEach(rowInfo => {
        let [dayOfWeek, name] = rowInfo.split(` `)
        if (!meetings.hasOwnProperty(dayOfWeek)) {
            meetings[dayOfWeek] = name;
            console.log(`Scheduled for ${dayOfWeek}`);
        } else {
            console.log(`Conflict on ${dayOfWeek}!`);
        }
    });
let finalInfo = Object.entries(meetings);
finalInfo.forEach(dayInfo => {
    let dayOfWeek = dayInfo[0];
    let personName=dayInfo[1];
    console.log(`${dayOfWeek} -> ${personName}`);
    
});

}
meetingsTask(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
// meetingsTask(['Friday Bob',
//     'Saturday Ted',
//     'Monday Bill',
//     'Monday John',
//     'Wednesday George']);