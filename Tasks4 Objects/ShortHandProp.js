
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const sum = arr.reduce((total, initValue) => {
    return total + initValue;
  });

  const avg= sum/ arr.length;

  return {
      max,
      min,
      sum,
      avg
  }
};

const reviews= [4,5,6,7,8,9,10,11,12,12]

const stats= getStats(reviews)



//ex-2

const activity= 'AbcdE'

const nameee= {activity}

console.log(nameee)