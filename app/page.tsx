import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import ItineraryCard from "@/components/itinerary-card";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <>
      <ItineraryCard />

      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
