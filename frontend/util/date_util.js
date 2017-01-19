const intToMonth = int => {
  switch(int) {
    case 1:
    return 'Jan';
    case 2:
    return 'Feb';
    case 3:
    return 'Mar';
    case 4:
    return 'Apr';
    case 5:
    return 'May';
    case 6:
    return 'Jun';
    case 7:
    return 'Jul';
    case 8:
    return 'Aug';
    case 9:
    return 'Sep';
    case 10:
    return 'Oct';
    case 11:
    return 'Nov';
    case 12:
    return 'Dec';
    default:
    return 'MonthErr';
  }
};

const dbDateToString = date => {
  const monthString = intToMonth(date.getMonth() + 1);
  const day = date.getDate() + 1;

  return `${monthString} ${day}`;
};

const dateToString = date => {
  const monthString = intToMonth(date.getMonth() + 1);
  const day = date.getDate();

  return `${monthString} ${day}`;
};

export const getDateString = dueDate => {
  let dateString;
  let printString;
  if (dueDate) {
    dateString = dbDateToString(new Date(dueDate));
    const today = new Date(Date.now());
    const todayString = dateToString(today);
    const tomorrowString = dateToString(new Date(Date.now() + 24 * 60 * 60 * 1000));
    const yesterdayString = dateToString(new Date(Date.now() - 24 * 60 * 60 * 1000));

    switch (dateString) {
      case todayString:
      printString = "Today";
      break;
      case tomorrowString:
      printString = "Tomorrow";
      break;
      case yesterdayString:
      printString = "Yesterday";
      break;
      default:
      printString = dateString;
    }
  } else {
    printString = "";
  }

  return printString;
};
