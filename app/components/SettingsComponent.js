"use client";
import { BsGear } from "react-icons/bs";
import { useState } from "react";
import SettingModal from "@/app/components/SettingModal";

const SettingsComponent = ({data}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="absolute right-6 top-6">
      <BsGear
        size={26}
        className="cursor-pointer hover:scale-110"
        onClick={() => setModalOpen(true)}
      />
      {modalOpen && <SettingModal closeModal={() => setModalOpen(false)} data={data}/>}
    </div>
  );
};

export default SettingsComponent;
