import { useState } from "react";
import BaseButton from "@/components/BaseButton";
import Boan from "@/containers/interviews/Boan";
import WenChia from "@/containers/interviews/WenChia";
import boanFocus from "@/assets/images/focus-boan.jpg";
import wenChiaFocus from "@/assets/images/focus-wen-chia.jpg";

const COMPONENTS = {
  boan: Boan,
  wenChia: WenChia,
};

const Interviews = () => {
  const [activeComponent, setActiveComponent] = useState("");

  const handleOpenComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleCloseComponent = () => {
    setActiveComponent(null);
  };

  const SelectedComponent = activeComponent
    ? COMPONENTS[activeComponent]
    : null;

  return (
    <>
      {!activeComponent && (
        <div className="container">
          <BaseButton
            className="border-none"
            onClick={() => handleOpenComponent("boan")}
          >
            <img className="h-36" src={boanFocus} alt="boanFocus" />
          </BaseButton>
          <BaseButton
            className="border-none"
            onClick={() => handleOpenComponent("wenChia")}
          >
            <img className="h-36" src={wenChiaFocus} alt="wenChiaFocus" />
          </BaseButton>
        </div>
      )}
      {SelectedComponent && (
        <SelectedComponent onClose={handleCloseComponent} />
      )}
    </>
  );
};

export default Interviews;
