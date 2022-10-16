let printDate = function(){
    const currentDate = new Date()
    console.log(currentDate)
}
let printMonth = function(){
    const currentMonth = [
        "January" , 
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    const currentDate = new Date()
        let abc = currentMonth[currentDate.getMonth()]
        console.log(abc)

}
function getBatchInfo(){
    console.log ("Lithium cohort , week 3 day 5, the topic for today is nodejs module system")
}

module.exports.Date=printDate
module.exports.Month=printMonth
module.exports.BatchInfo=getBatchInfo




