import React, { useEffect, useState } from "react";
import "../ComponentsStyles.css";
import { isMobile } from "react-device-detect";
import { OneAction } from "types";
import { Loading } from "../../common/Loading/Loading";
import { getUserHistory } from "../../utils/getUserHistory";
import { OneHistoryAction } from "../OneHistoryAction/OneHistoryAction";

export const HistoryBox = () => {
  const [history, setHistory] = useState<OneAction[] | undefined>();

  const fetchUserHistory = async () => {
    setHistory(await getUserHistory());
  };

  useEffect(() => {
    fetchUserHistory();
  });

  return (
    <div className={isMobile ? "data-box-mobile" : "data-box"}>
      {history ? (
        history
          .sort((a, b) => b.fullDateAndTime.localeCompare(a.fullDateAndTime))
          .map((history) => (
            <OneHistoryAction
              action={history.action}
              date={history.date}
              time={history.time}
              key={history.id}
            />
          ))
      ) : (
        <Loading />
      )}
    </div>
  );
};
