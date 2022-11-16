const parseDayTime = (meets) => {
  return (meets.split(" "))
}

const hasDayOverlap = (day1, day2) => {
  return (
    ['M', 'Tu', 'W', 'Th', 'F'].reduce((isOverlapped, el) => {
      if (day1.search(el) !== -1 && day2.search(el) !== -1) {
        return true;
      }
      return isOverlapped;
    }, false)
  )
}

const hasTimeOverlap = (time1, time2) => {
  const [start1, end1] = time1.split("-");
  const [start2, end2] = time2.split("-");
  return (start1 <= start2 && start2 <= end1) || (start1 <= end2 && end2 <= end1);
}

export const hasOverlap = (meets1, meets2) => {
  const [day1, time1] = parseDayTime(meets1);
  const [day2, time2] = parseDayTime(meets2);
  return (hasDayOverlap(day1, day2) && hasTimeOverlap(time1, time2));
}
