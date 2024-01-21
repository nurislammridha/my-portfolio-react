import React from "react";
import ActivityList from "./ActivityList";

import { activityData } from "../../../assets/apiData/personalData";

const ActivityTypeList = () => {

  const activityTypes = activityData()

  return (
    <>
      {activityTypes.map((item, index) => (
        <div key={index}>
          <h4>{item.type_name}</h4>
          <ActivityList activities={item.activities} key={index} />
        </div>
      ))}
    </>
  );
};

export default ActivityTypeList;
