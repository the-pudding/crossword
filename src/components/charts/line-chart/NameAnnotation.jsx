import React from "react"
import _ from "lodash"
import { AnnotationText } from "../../../styles/styles.js"

const NameAnnotation = ({ fill, label }) => {
  return (
    <AnnotationText labelKey={_.camelCase(label)} color={fill}>
      {label}
    </AnnotationText>
  )
}

export default NameAnnotation
