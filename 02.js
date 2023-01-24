// yy/mm/dd

function countHours(year, holidays) {
  let extra = 0;

  holidays.forEach((holiday) => {
    const [month, day] = holiday.split('/');
    const date = new Date(`${month} ${day}, ${year}`);
    const nday = date.getDay();
    if (nday !== 0 && nday !== 6) extra += 2;
    console.log(nday);
  });
  return extra;
}

countHours(2022, ['01/06', '04/01', '12/25']);
