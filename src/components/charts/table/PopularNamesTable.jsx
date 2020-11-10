import React, { useState } from "react"
import Table from "./Table.jsx"
import _ from "lodash-contrib"
import DecadeSlider from "../../charts/slider/DecadeSlider.jsx"

const PopularNamesTable = ({ data, featuredColumn, columnTitle }) => {
  const [decade, setDecade] = useState(1940)

  const dataSource = _.take(
    data.filter(d => d.decade.includes(decade.toString()))[0].topPeople,
    5
  ).map((d, i) => ({ ...d, answers: d.answers[0], rank: i + 1 }))

  const columns = [
    { title: "Rank", dataIndex: "rank", key: "rank" },
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: columnTitle,
      dataIndex: featuredColumn,
      key: featuredColumn,
    },
    { title: "Birth Year", dataIndex: "birthYear", key: "birthYear" },
  ]
  return (
    <>
      <DecadeSlider decade={decade} setDecade={setDecade} />
      <Table data={dataSource} columns={columns} />
    </>
  )
}

export default PopularNamesTable
