import React from "react";
import { MonthStats } from "types";
import "./OneStat.css";
import "../ComponentsStyles.css";

interface Props {
  stat: MonthStats;
}

export const OneStat = (props: Props) => {
  return (
    <div className="one-stat-box">
      <div className="one-stat-date-box">
        <p className="month-name">{props.stat.monthName}</p>
        <p>{props.stat.year}</p>
      </div>
      <div className="one-stat-data-box">
        <p>Suma faktur: {props.stat.totalInvoicesValue.toFixed(2)} zł</p>
        <p>Ilość faktur: {props.stat.invoicesCount}</p>
        <p>{`Średnia wartość: ${Number(props.stat.averageInvoiceValue).toFixed(
          2
        )} zł`}</p>
      </div>
    </div>
  );
};
