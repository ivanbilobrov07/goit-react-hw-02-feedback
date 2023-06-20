import { FeedbackButton, OptionsContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  optionsText: { positiveText, negativeText, neutralText },
  onLeaveFeedback,
}) => {
  return (
    <OptionsContainer>
      <FeedbackButton name="good" color="green" onClick={onLeaveFeedback}>
        {positiveText}
      </FeedbackButton>
      <FeedbackButton name="neutral" color="orange" onClick={onLeaveFeedback}>
        {neutralText}
      </FeedbackButton>
      <FeedbackButton name="bad" color="red" onClick={onLeaveFeedback}>
        {negativeText}
      </FeedbackButton>
    </OptionsContainer>
  );
};
