import styles from '../styles';

const StartSteps = ({ number, question, additionalText }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#010203]`}>
      <p className="font-bold text-[20px] text-white">
        {number}
      </p>
    </div>
    <div className="flex-1 ml-[30px]">
      <p className="font-bold text-[18px] text-[#374148] leading-[32px]">
        {question}
      </p>
      <p className="font-normal text-[16px] text-[#374148] mt-2">
        {additionalText}
      </p>
    </div>
  </div>
);

export default StartSteps;
