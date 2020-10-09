import _ from "lodash";
import { COLORS } from "../styles/colors.js";

// workaround for react so links work
export const createMarkup = (content) => {
  return { __html: content };
};

// rounds an array of percentages so that they add up to 100, minimizing error
export const roundData = (data, target = 100) => {
  const originalOrder = data.map((d) => d.group);
  const naiveRoundSum = data.reduce((acc, currentValue) => {
    return acc + Math.round(currentValue.percent);
  }, 0);
  const off = target - naiveRoundSum;

  const rounded = _.chain(data)
    .sortBy(({ percent }) => Math.round(percent) - percent)
    .map(({ group, percent }, i) => ({
      percent: Math.round(percent) + (off > i) - (i >= data.length + off),
      group,
    }))
    .value();

  const inOriginalOrder = _.sortBy(rounded, (d) => {
    return _.findIndex(originalOrder, (original) => original === d.group);
  });
  return inOriginalOrder;
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
