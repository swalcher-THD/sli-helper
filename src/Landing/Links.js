import { Button, Grid } from "@mui/material";

const Links = ({ begin, end }) => {
  //All our current boards use day after the actual date to include the full day
  let adjustedEnd = new Date(end);
  adjustedEnd.setDate(adjustedEnd.getDate() + 1);

  //Add leading 0 for single digits
  const fixDate = (n) => (n < 10 ? `0${n}` : n);

  //Set previous month
  let previousMonthBegin = new Date(begin);
  let previousMonthEnd = new Date(adjustedEnd);
  previousMonthBegin.setMonth(previousMonthBegin.getMonth() - 1);
  previousMonthEnd.setMonth(previousMonthEnd.getMonth() - 1);

  //Set previous week
  let previousWeekBegin = new Date(begin);
  let previousWeekEnd = new Date(adjustedEnd);
  previousWeekBegin.setDate(previousWeekBegin.getDate() - 7);
  previousWeekEnd.setDate(previousWeekEnd.getDate() - 7);

  //Set strings for YYYY MM DD
  let startYear = fixDate(begin.getFullYear());
  let startMonth = fixDate(begin.getMonth() + 1);
  let startDay = fixDate(begin.getDate());
  let endYear = adjustedEnd.getFullYear();
  let endMonth = fixDate(adjustedEnd.getMonth() + 1);
  let endDay = fixDate(adjustedEnd.getDate());

  let previousMonthStartYear = previousMonthBegin.getFullYear();
  let previousMonthStartMonth = fixDate(previousMonthBegin.getMonth() + 1);
  let previousStartDay = fixDate(previousMonthBegin.getDate());
  let previousMonthEndYear = previousMonthEnd.getFullYear();
  let previousMonthEndMonth = fixDate(previousMonthEnd.getMonth() + 1);
  let previousMonthEndDay = fixDate(previousMonthEnd.getDate());

  let previousWeekStartYear = fixDate(previousWeekBegin.getFullYear());
  let previousWeekStartMonth = fixDate(previousWeekBegin.getMonth() + 1);
  let previousWeekStartDay = fixDate(previousWeekBegin.getDate());
  let previousWeekEndYear = previousWeekEnd.getFullYear();
  let previousWeekEndMonth = fixDate(previousWeekEnd.getMonth() + 1);
  let previousWeekEndDay = fixDate(previousWeekEnd.getDate());

  //name: display name for link
  //link: link
  //{} leave an empty grid item
  let links = [
    {
      name: "Crisp Dashboard",
      link: `https://homedepot.looker.com/dashboards-next/4271?Type%20of%20Request=Kosmos,AZ%20Subscription,GCP%20Project,Vantage&Life%20Cycle=&Name=-%25muskrat%25&Vendor=&Owner%20Email=&Requester%20Email=&Subexperience=&Cost%20Center=&Start%20Time=${startYear}%2F${startMonth}%2F${startDay}%20to%20${endYear}%2F${endMonth}%2F${endDay}&State=`,
    },
    {
      name: "Crisp Dashboard (all time)",
      link: `https://homedepot.looker.com/dashboards-next/4269?Type%20of%20Request=Kosmos,AZ%20Subscription,GCP%20Project,Vantage&Life%20Cycle=&Name=-%25muskrat%25&Vendor=&Owner%20Email=&Requester%20Email=&Subexperience=&Cost%20Center=&State=SUCCESS`,
    },
    {},
    {
      name: "Cloud Spend (without credits)",
      link: `https://homedepot.looker.com/dashboards/751?Date%20Range=${previousMonthStartYear}%2F${previousMonthStartMonth}%2F${previousStartDay}%20to%20${previousMonthEndYear}%2F${previousMonthEndMonth}%2F${previousMonthEndDay},${startYear}%2F${startMonth}%2F${startDay}%20to%20${endYear}%2F${endMonth}%2F${endDay}&Cloud%20Space=&Service=&Provider=&Subexperience=&Subexperience%20Owner=&Collection=All%20Projects`,
    },
    {
      name: "Cloud Spend",
      link: `https://homedepot.looker.com/dashboards/698?Date%20Range=${previousMonthStartYear}%2F${previousMonthStartMonth}%2F${previousStartDay}%20to%20${previousMonthEndYear}%2F${previousMonthEndMonth}%2F${previousMonthEndDay},${startYear}%2F${startMonth}%2F${startDay}%20to%20${endYear}%2F${endMonth}%2F${endDay}&Collection=All%20Projects&Cloud%20Space=&Service=&Provider=&Subexperience=&Subexperience%20Owner=`,
    },
    {},
    {
      name: "Eve Uptime",
      link: `https://console.cloud.google.com/monitoring/metrics-explorer?pageState=%7B%22xyChart%22:%7B%22dataSets%22:%5B%7B%22timeSeriesFilter%22:%7B%22filter%22:%22metric.type%3D%5C%22monitoring.googleapis.com%2Fuptime_check%2Fcheck_passed%5C%22%20metric.label.%5C%22check_id%5C%22%3D%5C%22eve-api-uptime-check-0zD0m8AkiLg%5C%22%22,%22minAlignmentPeriod%22:%2260s%22,%22aggregations%22:%5B%7B%22perSeriesAligner%22:%22ALIGN_NEXT_OLDER%22,%22crossSeriesReducer%22:%22REDUCE_COUNT_TRUE%22,%22alignmentPeriod%22:%2260s%22,%22groupByFields%22:%5B%22metric.label.%5C%22checker_location%5C%22%22,%22resource.label.%5C%22instance_id%5C%22%22%5D%7D,%7B%22perSeriesAligner%22:%22ALIGN_NONE%22,%22crossSeriesReducer%22:%22REDUCE_NONE%22,%22alignmentPeriod%22:%2260s%22,%22groupByFields%22:%5B%5D%7D%5D%7D,%22targetAxis%22:%22Y1%22,%22plotType%22:%22LINE%22%7D%5D,%22options%22:%7B%22mode%22:%22COLOR%22%7D,%22constantLines%22:%5B%5D,%22timeshiftDuration%22:%220s%22,%22y1Axis%22:%7B%22label%22:%22y1Axis%22,%22scale%22:%22LINEAR%22%7D%7D,%22isAutoRefresh%22:true,%22timeSelection%22:%7B%22timeRange%22:%22custom%22,%22start%22:%22${startYear}-${startMonth}-${startDay}T05:00:00.000Z%22,%22end%22:%22${endYear}-${endMonth}-${endDay}T04:59:00.000Z%22%7D%7D&project=pr-te-terraform`,
    },
    {
      name: "Eve Latency (95%)",
      link: `https://console.cloud.google.com/monitoring/metrics-explorer?pageState=%7B%22xyChart%22:%7B%22dataSets%22:%5B%7B%22timeSeriesFilter%22:%7B%22filter%22:%22metric.type%3D%5C%22monitoring.googleapis.com%2Fuptime_check%2Frequest_latency%5C%22%20metric.label.%5C%22check_id%5C%22%3D%5C%22eve-api-uptime-check-0zD0m8AkiLg%5C%22%22,%22minAlignmentPeriod%22:%223600s%22,%22aggregations%22:%5B%7B%22perSeriesAligner%22:%22ALIGN_MEAN%22,%22crossSeriesReducer%22:%22REDUCE_PERCENTILE_95%22,%22alignmentPeriod%22:%2260s%22,%22groupByFields%22:%5B%22metric.label.%5C%22checker_location%5C%22%22,%22resource.label.%5C%22instance_id%5C%22%22%5D%7D,%7B%22perSeriesAligner%22:%22ALIGN_NONE%22,%22crossSeriesReducer%22:%22REDUCE_NONE%22,%22alignmentPeriod%22:%2260s%22,%22groupByFields%22:%5B%5D%7D%5D%7D,%22targetAxis%22:%22Y1%22,%22plotType%22:%22LINE%22%7D%5D,%22options%22:%7B%22mode%22:%22COLOR%22%7D,%22constantLines%22:%5B%5D,%22timeshiftDuration%22:%220s%22,%22y1Axis%22:%7B%22label%22:%22y1Axis%22,%22scale%22:%22LINEAR%22%7D%7D,%22isAutoRefresh%22:true,%22timeSelection%22:%7B%22timeRange%22:%22custom%22,%22start%22:%22${startYear}-${startMonth}-${startDay}T05:00:00.000Z%22,%22end%22:%22${endYear}-${endMonth}-${endDay}T04:59:00.000Z%22%7D%7D&project=pr-te-terraform`,
    },
    {},
    {
      name: "VM Uptime",
      link: `https://console.cloud.google.com/monitoring/metrics-explorer?pageState=%7B%22xyChart%22:%7B%22dataSets%22:%5B%7B%22timeSeriesFilter%22:%7B%22filter%22:%22metric.type%3D%5C%22monitoring.googleapis.com%2Fuptime_check%2Fcheck_passed%5C%22%20metric.label.%5C%22check_id%5C%22%3D%5C%22vmfleetuptimecheck-PxuMQfSDrKY%5C%22%22,%22minAlignmentPeriod%22:%2260s%22,%22aggregations%22:%5B%7B%22perSeriesAligner%22:%22ALIGN_NEXT_OLDER%22,%22crossSeriesReducer%22:%22REDUCE_COUNT_TRUE%22,%22alignmentPeriod%22:%2260s%22,%22groupByFields%22:%5B%22metric.label.%5C%22checker_location%5C%22%22,%22resource.label.%5C%22instance_id%5C%22%22%5D%7D,%7B%22perSeriesAligner%22:%22ALIGN_NONE%22,%22crossSeriesReducer%22:%22REDUCE_NONE%22,%22alignmentPeriod%22:%2260s%22,%22groupByFields%22:%5B%5D%7D%5D%7D,%22targetAxis%22:%22Y1%22,%22plotType%22:%22LINE%22%7D%5D,%22options%22:%7B%22mode%22:%22COLOR%22%7D,%22constantLines%22:%5B%5D,%22timeshiftDuration%22:%220s%22,%22y1Axis%22:%7B%22label%22:%22y1Axis%22,%22scale%22:%22LINEAR%22%7D%7D,%22isAutoRefresh%22:true,%22timeSelection%22:%7B%22timeRange%22:%22custom%22,%22start%22:%22${startYear}-${startMonth}-${startDay}T05:00:00.000Z%22,%22end%22:%22${endYear}-${endMonth}-${endDay}T04:59:00.000Z%22%7D%7D&project=pr-te-cloud-tooling`,
    },
    {
      name: "VM Latency (95%)",
      link: `https://console.cloud.google.com/monitoring/metrics-explorer?pageState=%7B%22xyChart%22:%7B%22dataSets%22:%5B%7B%22timeSeriesFilter%22:%7B%22filter%22:%22metric.type%3D%5C%22monitoring.googleapis.com%2Fuptime_check%2Frequest_latency%5C%22%20metric.label.%5C%22check_id%5C%22%3D%5C%22vmfleetuptimecheck-PxuMQfSDrKY%5C%22%22,%22minAlignmentPeriod%22:%223600s%22,%22aggregations%22:%5B%7B%22perSeriesAligner%22:%22ALIGN_MEAN%22,%22crossSeriesReducer%22:%22REDUCE_PERCENTILE_95%22,%22alignmentPeriod%22:%2260s%22,%22groupByFields%22:%5B%22metric.label.%5C%22checker_location%5C%22%22,%22resource.label.%5C%22instance_id%5C%22%22%5D%7D,%7B%22perSeriesAligner%22:%22ALIGN_NONE%22,%22crossSeriesReducer%22:%22REDUCE_NONE%22,%22alignmentPeriod%22:%2260s%22,%22groupByFields%22:%5B%5D%7D%5D%7D,%22targetAxis%22:%22Y1%22,%22plotType%22:%22LINE%22%7D%5D,%22options%22:%7B%22mode%22:%22COLOR%22%7D,%22constantLines%22:%5B%5D,%22timeshiftDuration%22:%220s%22,%22y1Axis%22:%7B%22label%22:%22y1Axis%22,%22scale%22:%22LINEAR%22%7D%7D,%22isAutoRefresh%22:true,%22timeSelection%22:%7B%22timeRange%22:%22custom%22,%22start%22:%22${startYear}-${startMonth}-${startDay}T05:00:00.000Z%22,%22end%22:%22${endYear}-${endMonth}-${endDay}T04:59:00.000Z%22%7D%7D&project=pr-te-cloud-tooling`,
    },
    {},
    {
      name: "Eve Stats",
      link: `https://homedepot.looker.com/dashboards-next/3026?Current%20Iteration=${startYear}%2F${startMonth}%2F${startDay}%20to%20${endYear}%2F${endMonth}%2F${endDay}&Requester=&Type=&Repo=&Previous%20Iteration=${previousWeekStartYear}%2F${previousWeekStartMonth}%2F${previousWeekStartDay}%20to%20${previousWeekEndYear}%2F${previousWeekEndMonth}%2F${previousWeekEndDay}`,
    },
  ];

  return (
    <>
      {links.map((item, index) => {
        if (item.name) {
          return (
            <Grid key={`${item.name}-${index}`} item xs={10} md={4}>
              <Button onClick={() => window.open(item.link, "_blank")}>
                {item.name}
              </Button>
            </Grid>
          );
        } else {
          return <Grid key={`spacer-${index}`} item xs={1} md={4}></Grid>;
        }
      })}
    </>
  );
};

export default Links;
