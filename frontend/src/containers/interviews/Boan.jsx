import PropTypes from "prop-types";
import BaseButton from "@/components/BaseButton";
import boanImage from "@/assets/images/boan.jpg";

const Boan = ({ onClose }) => {
  const boanWebsiteUrl = "https://cy4309.github.io/TFD105_01CYC/MainPage.html";
  return (
    <>
      <div className="container">
        <BaseButton onClick={onClose}>Back</BaseButton>
        <BaseButton onClick={() => window.open(boanWebsiteUrl, "_blank")}>
          Go to Website
        </BaseButton>
        <h2>GOODOLDDAYZ</h2>
        <img src={boanImage} alt="boanImage" className="h-36" />
      </div>
    </>
  );
};

Boan.propTypes = {
  onClose: PropTypes.func,
};

export default Boan;
