export default function convertHourToMinute(time:string){
    //formato horário 12:32
    const [hour, minutes] = time.split(':').map(Number);

    const timeInMinutes = ( hour * 60 ) + minutes

    return timeInMinutes;
}