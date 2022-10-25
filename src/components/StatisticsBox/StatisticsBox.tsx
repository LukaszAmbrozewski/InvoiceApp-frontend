import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import "../ComponentsStyles.css";
import { getAllStatistics } from "../../utils/getAllStatistics";
import { MonthStats } from "types";
import { OneStat } from "../OneStat/OneStat";
import { Loading } from "../../common/Loading/Loading";

export const StatisticsBox = () => {
  const [statistics, setStatistics] = useState<MonthStats[] | []>();

  const userStatistics = async () => {
    setStatistics(await getAllStatistics());
  };

  useEffect(() => {
    userStatistics();
  }, []);

  return (
    <div className={isMobile ? "data-box-mobile" : "data-box"}>
      {statistics ? (
        <>
          {statistics.map((stat) =>
            stat.totalInvoicesValue !== 0 ? (
              <OneStat key={stat.year + stat.monthName} stat={stat} />
            ) : null
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};
