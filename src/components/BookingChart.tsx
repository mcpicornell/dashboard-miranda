import React from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory';

interface CheckIn {
  date: string;
}

interface CheckOut {
  date: string;
}

interface BookingChartProps {
  checkIns: CheckIn[];
  checkOuts: CheckOut[];
}

export const BookingChart: React.FC<BookingChartProps> = ({ checkIns, checkOuts }) => {
  const today = new Date();
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1)); // Lunes actual
  const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 7)); // Domingo actual

  const filteredCheckIns = checkIns.filter((checkIn) => {
    const checkInDate = new Date(checkIn.date);
    return checkInDate >= startOfWeek && checkInDate <= endOfWeek;
  });

  const filteredCheckOuts = checkOuts.filter((checkOut) => {
    const checkOutDate = new Date(checkOut.date);
    return checkOutDate >= startOfWeek && checkOutDate <= endOfWeek;
  });

  const uniqueDates = [
    ...new Set([
      ...filteredCheckIns.map((checkIn) => checkIn.date),
      ...filteredCheckOuts.map((checkOut) => checkOut.date),
    ]),
  ];

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const bookingsByDay: { [day: string]: { checkIns: number; checkOuts: number } } = daysOfWeek.reduce((acc, day) => {
    acc[day] = { checkIns: 0, checkOuts: 0 };

    const formattedDate = new Date(startOfWeek);
    formattedDate.setDate(formattedDate.getDate() + daysOfWeek.indexOf(day));

    const formattedDateString = formattedDate.toISOString().split('T')[0]; // Obtiene la fecha en formato 'YYYY-MM-DD'

    if (uniqueDates.includes(formattedDateString)) {
      const checkInsCount = filteredCheckIns.filter((checkIn) => checkIn.date === formattedDateString).length;
      const checkOutsCount = filteredCheckOuts.filter((checkOut) => checkOut.date === formattedDateString).length;

      acc[day].checkIns = checkInsCount;
      acc[day].checkOuts = checkOutsCount;
    }

    return acc;
  }, {} as { [day: string]: { checkIns: number; checkOuts: number } });

  const data = Object.keys(bookingsByDay).map((day) => {
    return {
      day,
      checkIns: bookingsByDay[day].checkIns,
      checkOuts: bookingsByDay[day].checkOuts,
    };
  });

  return (
    <div>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis tickFormat={daysOfWeek} style={{ tickLabels: { angle: -45, fontSize: 8 } }} />
        <VictoryAxis dependentAxis domain={[0, 60]} />
        <VictoryBar data={data} x="day" y="checkIns" style={{ data: { fill: 'green' } }} />
        <VictoryBar data={data} x="day" y="checkOuts" style={{ data: { fill: 'orange' } }} />
      </VictoryChart>
    </div>
  );
};