import _ from "lodash";
import { COLORS } from "../styles/colors.js";

// workaround for react so links work
export const createMarkup = (content) => {
  return { __html: content };
};

// rounds an array of percentages so that they add up to 100, minimizing error
export const roundData = (arr, target = 100) => {
  const off =
    target -
    _.reduce(
      arr,
      function (acc, x) {
        return acc + Math.round(x);
      },
      0
    );
  return _.chain(arr)
    .sortBy(function (x) {
      return Math.round(x) - x;
    })
    .map(function (x, i) {
      return Math.round(x) + (off > i) - (i >= arr.length + off);
    })
    .value();
};

// adds a field 'color' to crossword data based on the metric (gender or race) that's being displayed
export const addColorsToData = (data, metric) => {
  const updatedData = { across: {}, down: {} };
  const acrossKeys = _.keys(data.across);
  const downKeys = _.keys(data.down);
  _.forEach(acrossKeys, (number) => {
    updatedData.across[number] = {
      ...data.across[number],
      color: COLORS[data.across[number][metric]],
    };
  });
  _.forEach(downKeys, (number) => {
    updatedData.down[number] = {
      ...data.down[number],
      color: COLORS[data.down[number][metric]],
    };
  });
  return updatedData;
};
