"use client";
import React from "react";

import SingleHotel from "@/components/all-hotels/SingleHotel";

import { Hotel } from "@/lib";
import { useSearchParams } from "next/navigation";

const AllHotels = ({ hotels }: { hotels: Hotel[] }) => {
  // Get first 60 hotels (30 rankings, each with business and leisure)

  const segment = useSearchParams().get("segment");

  const sliceIndex = segment ? 30 : 60;

  const rankedHotels = hotels.slice(0, sliceIndex);

  // Group hotels by ranking position and sort segments within each ranking
  const sortedRankedHotels = rankedHotels.reduce((acc, hotel) => {
    const position = hotel.ranking?.position;
    if (!position) return acc;

    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(hotel);

    // If we have both hotels for this ranking, sort them (business first)
    if (acc[position].length === 2) {
      acc[position].sort((a, b) => {
        if (a.segment === "business" && b.segment === "leisure") return -1;
        if (a.segment === "leisure" && b.segment === "business") return 1;
        return 0;
      });
    }
    return acc;
  }, {} as Record<number, Hotel[]>);

  // Flatten the sorted hotels
  const finalRankedHotels = Object.values(sortedRankedHotels).flat();

  // Get remaining hotels and sort alphabetically
  const alphabeticHotels = hotels
    .slice(sliceIndex)
    .sort((a, b) => (a?.name ?? "").localeCompare(b?.name ?? ""));

  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-6 md:gap-10">
      {finalRankedHotels.map((hotel: Hotel, index: number) => (
        <SingleHotel key={index} data={hotel} srNo="ranking" />
      ))}

      {alphabeticHotels.map((hotel: Hotel, index: number) => (
        <SingleHotel key={index} data={hotel} srNo="alphabatic" />
      ))}
    </section>
  );
};

export default AllHotels;
