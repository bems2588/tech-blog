module.exports = {
  format_time: (dt) => {
    let date = dt || new Date()
    return date.toLocaleTimeString();
  },
  format_date: (dt) => {
    let date = dt || new Date()
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear() + 5
      }`;
  },
};
