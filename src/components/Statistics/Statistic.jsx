import { Notification } from 'components/Notification';

export const Statistic = ({
  optionsText: { positiveText, negativeText, neutralText },
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
    <div>
      <p>
        {positiveText}: {good}
      </p>
      <p>
        {neutralText}: {neutral}
      </p>
      <p>
        {negativeText}: {bad}
      </p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  ) : (
    <Notification message="There is no feedback" />
  );
};
