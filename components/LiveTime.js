import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

function LiveTime() {
  const [Time, setTime] = useState();
  const [AM, setAM] = useState();
  const [Today, setToday] = useState();
  const [Day, setDay] = useState();

  var waqt;
  useEffect(() => {
    waqt = setInterval(() => {
      const cdate = new Date();
      setDay(moment(cdate).format("dddd"));
      setToday(moment(cdate).format("MMM D, YYYY"));
      setTime(moment(cdate).format("h:mm:ss a"));
    }, 1000);
    return () => {
      clearInterval(waqt);
    };
  });
  return (
    <View>
      <Text style={styles.timea}>
        {Time}
        {AM}
      </Text>
      <Text style={styles.time}>
        {Day ? Day + "," : ""} {Today}
      </Text>
    </View>
  );
}

export default LiveTime;

const styles = StyleSheet.create({
  timea: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  time: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
