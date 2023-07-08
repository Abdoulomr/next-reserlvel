"use client";
import React, { useEffect, useState } from "react";
import { BiBaseball, BiFootball, BiTennisBall } from "react-icons/bi";
import { FcSportsMode } from "react-icons/fc";
import { IoMdArrowDropdown } from "react-icons/io";
import ButtonInput from "../inputs/ButtonInput";
import { ImCompass, ImLocation } from "react-icons/im";
import Geocode from "react-geocode";

Geocode.setLanguage("fr");
Geocode.setRegion("sn");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const sportOptions = [
  { id: 1, value: "football", title: "Football", sportIcon: <BiFootball /> },
  {
    id: 2,
    value: "basketball",
    title: "Basketball",
    sportIcon: <BiBaseball />,
  },
  { id: 3, value: "tennis", title: "Tennis", sportIcon: <BiTennisBall /> },
];

type searchVenueDataType = {
  sportType: string;
  location: string;
};

export default function FieldSearch() {
  const [selectedSport, setSelectedSport] = useState({
    id: 0,
    value: "",
    title: "Choix du sport",
    icon: <FcSportsMode />,
  });

  const [sportOptionsVisible, setSportOptionsVisible] = useState(false);
  const [formData, setFormData] = useState<searchVenueDataType>({
    sportType: selectedSport.value,
    location: "",
  });

  const displayOptions =
    sportOptionsVisible &&
    sportOptions.map((sport) => {
      return (
        <div
          key={sport.id}
          className={`flex  z-10 m-0 cursor-pointer items-center bg-slate-50 hover:bg-indigo-900 hover:text-white w-full justify-start gap-2 p-3 
          ${sport.id === sportOptions.length && "rounded-b-sm"}
          ${sport.id === 1 && "rounded-t-sm"}
          `}
          onClick={() => handleSportSelect(sport)}
        >
          <span>{sport.sportIcon}</span>
          <span>{sport.title}</span>
        </div>
      );
    });

  function handleSportSelect(item: any) {
    setSelectedSport({
      ...selectedSport,
      value: item.value,
      title: item.title,
      icon: item.sportIcon,
      id: item.id,
    });
    setSportOptionsVisible(false);
  }

  useEffect(() => {
    setFormData({ ...formData, sportType: selectedSport.value });
  }, [selectedSport.value]);

  function getLocation() {
    Geocode.fromLatLng("48.8583701", "2.2922926").then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
      },
      (error) => {
        console.error(error);
      }
    );

    // Get formatted address, city, state, country from latitude & longitude when
    // Geocode.setLocationType("ROOFTOP") enabled
    // the below parser will work for most of the countries
    Geocode.fromLatLng("48.8583701", "2.2922926").then(
      (response) => {
        const address = response.results[0].formatted_address;
        let city, state, country;
        for (
          let i = 0;
          i < response.results[0].address_components.length;
          i++
        ) {
          for (
            let j = 0;
            j < response.results[0].address_components[i].types.length;
            j++
          ) {
            switch (response.results[0].address_components[i].types[j]) {
              case "locality":
                city = response.results[0].address_components[i].long_name;
                break;
              case "administrative_area_level_1":
                state = response.results[0].address_components[i].long_name;
                break;
              case "country":
                country = response.results[0].address_components[i].long_name;
                break;
            }
          }
        }
        console.log(city, state, country);
        console.log(address);
      },
      (error) => {
        console.error(error);
      }
    );

    // Get latitude & longitude from address.
    Geocode.fromAddress("Eiffel Tower").then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  return (
    <form
      className="flex flex-col justify-start items-center gap-6 w-[95vw] mx-auto max-w-lg py-5 px-5 h-full bg-slate-100"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formData);
      }}
    >
      <h4 className="mb-4 text-slate-600">Trouver l'espace de jeu idéal</h4>

      {/* --------------------------------------------------------------------------------------------------------------------- */}

      <div className="w-full relative h-fit flex flex-col gap-0 text-slate-600 shadow-md">
        <div
          className="flex cursor-pointer mt-[1px] items-center bg-slate-50 w-full justify-start gap-2 p-4"
          onClick={() => setSportOptionsVisible(!sportOptionsVisible)}
        >
          <span>{selectedSport.icon}</span>
          <span>{selectedSport.title}</span>
          <span>
            <IoMdArrowDropdown
              className={`absolute right-3 top-[50%] -translate-y-2/4 text-2xl ${
                sportOptionsVisible && "rotate-180"
              }`}
            />
          </span>
        </div>
        <div className=" w-full bg-transparent h-fit absolute flex gap-0 flex-col top-[105%]  box-border shadow-md rounded-sm">
          {displayOptions}
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------------------------------- */}

      <div className="relative w-full flex items-center  shadow-md">
        <span className="absolute left-0 t text-lg text-indigo-950 top-0 w-10 bg-transparent h-full flex items-center justify-center">
          <ImLocation />
        </span>
        <input
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          type="text"
          placeholder="Lieu"
          className="flex  transition-display duration-150 items-center outline-none bg-slate-50 w-full justify-start gap-2 p-4 pl-10"
        />
        <span
          className="absolute text-lg text-white hover:opacity-80 right-0 top-0 w-12 bg-indigo-950 h-full flex items-center justify-center cursor-pointer"
          onClick={getLocation}
        >
          <ImCompass />
        </span>
      </div>

      {/* --------------------------------------------------------------------------------------------------------------------- */}

      <ButtonInput title="Trouver" btnType="Primary" bgColor="bg-indigo-950" />
    </form>
  );
}
