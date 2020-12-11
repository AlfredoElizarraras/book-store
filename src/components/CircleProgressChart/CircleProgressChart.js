import React from 'react';
import PropTypes from 'prop-types';
import '../../flex.css';
import './index.css';

const CircleProgressChart = ({
  bgMain,
  bgProgress,
  percent,
  radius,
  width,
  height,
  maxValue,
  currentValue,
  strokeWidth,
}) => {
  const calculatePercentage = (maxValue, currentValue) => (currentValue * 100) / maxValue;
  const circleCircum = radius => 2 * radius * Math.PI;
  const circleStroke = (circum, percent) => (circum * percent) / 100;
  const svgCircleStrokeDashArray = strokeValue => `${strokeValue} 999`;
  const circleProgressValue = () => (
    svgCircleStrokeDashArray(
      circleStroke(
        circleCircum(radius),
        percent || calculatePercentage(maxValue, currentValue),
      ),
    )
  );

  return (
    <>
      <svg className="circleProgressChart" width={width} height={height}>
        <circle cx="50" cy="50" r={radius} stroke={bgMain} strokeWidth={strokeWidth} />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={bgProgress}
          strokeDasharray={circleProgressValue()}
          strokeWidth={strokeWidth}
        />
      </svg>
      <div>
        <h3 className="circle__percentage-title">
          {percent || calculatePercentage(maxValue, currentValue)}
          %
        </h3>
        <span className="circle__completed">completed</span>
      </div>
    </>
  );
};

CircleProgressChart.propTypes = {
  bgMain: PropTypes.string,
  bgProgress: PropTypes.string,
  percent: PropTypes.number,
  radius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  maxValue: PropTypes.string,
  currentValue: PropTypes.string,
  strokeWidth: PropTypes.string,
};

CircleProgressChart.defaultProps = {
  bgMain: '#e8e8e8',
  bgProgress: '#307bbe',
  percent: null,
  radius: '40',
  width: '100',
  height: '100',
  maxValue: '100',
  currentValue: '0',
  strokeWidth: '8',
};

export default CircleProgressChart;
