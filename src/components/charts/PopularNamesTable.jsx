import React, { useState } from "react"
import data from "../../data/topPeopleNyt.json"
import { Table } from "antd"
import _ from "lodash-contrib"
import DecadeSlider from "../charts/chart-elements/DecadeSlider.jsx"

const PopularNamesTable = () => {
  const [decade, setDecade] = useState(1940)

  const dataSource = _.take(
    data.filter(d => d.decade.includes(decade.toString()))[0].topPeople,
    5
  ).map(d => ({ ...d, answers: d.answers.join(" | ") }))

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Common Answers",
      dataIndex: "answers",
      key: "commonAnswers",
    },
    { title: "Appearances", dataIndex: "frequency", key: "appearances" },
    { title: "Birth Year", dataIndex: "birthYear", key: "birthYear" },
  ]
  return (
    <>
      <h3>Popular clued people in NYT by decade</h3>
      <DecadeSlider decade={decade} setDecade={setDecade} />
      {typeof window !== "undefined" ? (
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      ) : null}
    </>
  )
}

export default PopularNamesTable
