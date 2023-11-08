import moment from "moment-timezone";


const convertTimestampToTime = (timestamp) => {
  
    return moment.unix(timestamp).format("h:mm A");
  
};

export default convertTimestampToTime;
