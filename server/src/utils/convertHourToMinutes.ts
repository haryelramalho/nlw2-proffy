export default function convertHourToMinutes(time: string) {
  // 10:00
  const [hour, minutes] = time.split(':').map(Number); //Transformando cada parte da string em um tipo numérico
  const timeInMinutes = (hour * 60) + minutes;

  return timeInMinutes;
}