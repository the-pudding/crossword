import React from "react"
import _ from "lodash"
import { AnnotationText } from "../../../styles/styles.js"

const NameAnnotation = ({ fill, label }) => {
  console.log(_.camelCase(label))
  return (
    <AnnotationText labelKey={_.camelCase(label)} color={fill}>
      {label}
    </AnnotationText>
  )
}

export default NameAnnotation
