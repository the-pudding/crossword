import React, { useState } from "react"
import Table from "./Table.jsx"
import _ from "lodash-contrib"
import DecadeSlider from "../../charts/slider/DecadeSlider.jsx"

const PopularNamesTable = ({ data, featuredColumn, columnTitle }) => {
  const [decade, setDecade] = useState(1940)

  const dataSource = _.take(
    data.filter(d => d.decade.includes(decade.toString()))[0].topPeople,
    5
  ).map(d => ({ ...d, answers: d.answers.join(" | ") }))

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: columnTitle,
      dataIndex: featuredColumn,
      key: featuredColumn,
    },
    { title: "Count", dataIndex: "frequency", key: "count" },
    { title: "Birth Year", dataIndex: "birthYear", key: "birthYear" },
  ]
  return (
    <>
      <DecadeSlider decade={decade} setDecade={setDecade} />
      <Table data={dataSource} columns={columns} />

      {/* {typeof window !== "undefined" ? (
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      ) : null} */}
    </>
  )
}

export default PopularNamesTable
