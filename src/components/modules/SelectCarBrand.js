"use client";

import Image from "next/image";
import Select from "react-select";

import IranKhodroIcon from "../../../public/icons/IranKhodroIcon.png";
import SaipaIcon from "../../../public/icons/SaipaIcon.png";
import PeugeotIcon from "../../../public/icons/PeugeotIcon.png";
import RenaultIcon from "../../../public/icons/RenaultIcon.png";
import ToyotaIcon from "../../../public/icons/ToyotaIcon.webp";
import HyundaiIcon from "../../../public/icons/HyundaiIcon.webp";
import KiaIcon from "../../../public/icons/KiaIcon.webp";
import NissanIcon from "../../../public/icons/NissanIcon.webp";
import MazdaIcon from "../../../public/icons/MazdaIcon.svg";
import CheryIcon from "../../../public/icons/CheryIcon.png";
import JacIcon from "../../../public/icons/JacIcon.png";
import MvmIcon from "../../../public/icons/MvmIcon.webp";
import BenzIcon from "../../../public/icons/BenzIcon.png";
import BmwIcon from "../../../public/icons/BmwIcon.png";

function SelectCarBrand({ setCarBrand, carBrand }) {
  const carOptions = [
    { value: "iran-khodro", label: "ایران خودرو", icon: IranKhodroIcon },
    { value: "saipa", label: "سایپا", icon: SaipaIcon },
    { value: "peugeot", label: "پژو", icon: PeugeotIcon },
    { value: "renault", label: "رنو", icon: RenaultIcon },
    { value: "toyota", label: "تویوتا", icon: ToyotaIcon },
    { value: "hyundai", label: "هیوندای", icon: HyundaiIcon },
    { value: "kia", label: "کیا", icon: KiaIcon },
    { value: "nissan", label: "نیسان", icon: NissanIcon },
    { value: "mazda", label: "مزدا", icon: MazdaIcon },
    { value: "chery", label: "چری", icon: CheryIcon },
    { value: "jac", label: "جک", icon: JacIcon },
    { value: "mvm", label: "ام وی ام", icon: MvmIcon },
    { value: "benz", label: "بنز", icon: BenzIcon },
    { value: "bmw", label: "بی‌ام‌و", icon: BmwIcon },
  ];

  const customOption = ({ label, icon }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Image
        src={icon}
        alt={label}
        width={32}
        height={32}
        style={{ borderRadius: "4px" }}
      />
      <span>{label}</span>
    </div>
  );

  return (
    <div className="w-64">
      <Select
        options={carOptions}
        formatOptionLabel={customOption}
        placeholder="انتخاب برند خودرو..."
        onChange={(option) => setCarBrand(option.value)}
        value={carOptions.find((opt) => opt.value === carBrand) || null}
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: "8px",
            padding: "4px",
            direction: "rtl",
          }),
          menu: (base) => ({
            ...base,
            zIndex: 9999,
            textAlign: "right",
          }),
        }}
      />
    </div>
  );
}

export default SelectCarBrand;
