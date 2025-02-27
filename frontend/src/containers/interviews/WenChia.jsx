import BaseButton from "@/components/BaseButton";
import PropTypes from "prop-types";

const WenChia = ({ onClose }) => {
  return (
    <>
      <div className="container">
        <BaseButton onClick={onClose}>Back</BaseButton>
        <h2>Wen Chia</h2>
      </div>
    </>
  );
};

WenChia.propTypes = {
  onClose: PropTypes.func,
};

export default WenChia;
