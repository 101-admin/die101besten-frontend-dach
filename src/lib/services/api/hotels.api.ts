import { unstable_cache } from "next/cache";
import { client, DEFAULT_EDITION, DEFAULT_LANGUAGE } from "@/lib/config/sanity";
import {
  getAllHotelsQuery,
  getHotelBySlugQuery,
  getHotelPageQuery,
  getSpecialEditionHotelsQuery,
  getHotelCategoriesQuery,
  getCitiesQuery,
} from "@/lib/queries/hotels.queries";

export const HotelsApi = {
  /**
   * Get all hotels with basic information
   */
  getAllHotels: unstable_cache(
    async ({
      edition = DEFAULT_EDITION,
      language = DEFAULT_LANGUAGE,
      category,
      city,
      segment,
      search,
      rankingCategory,
      variant,
    }) => {
      const params = Object.fromEntries(
        Object.entries({
          edition,
          language,
          category,
          city,
          segment,
          search,
          rankingCategory,
          variant,
        }).filter(([_, v]) => v !== undefined && v !== null)
      );
      return await client.fetch(
        getAllHotelsQuery({
          edition,
          language,
          category,
          city,
          segment,
          search,
          rankingCategory,
          variant,
        }),
        params
      );
    },
    ["all-hotels"],
    { tags: ["hotels"], revalidate: 25 }
  ),

  /**
   * Get hotel by slug with all details
   */
  getHotelBySlug: unstable_cache(
    async (slug: string, language = DEFAULT_LANGUAGE) => {
      // console.log({ slug, language }, "@step 2: getHotelBySlug");
      return await client.fetch(getHotelBySlugQuery, {
        slug,
        edition: DEFAULT_EDITION,
        language,
      });
    },
    ["hotel-by-slug"],
    { tags: ["hotels"], revalidate: 25 }
  ),

  getHotelPage: unstable_cache(
    async (language = DEFAULT_LANGUAGE) => {
      return await client.fetch(getHotelPageQuery, {
        language,
        edition: DEFAULT_EDITION,
      });
    },
    ["hotel-page"],
    { tags: ["hotels"], revalidate: 25 }
  ),

  getSpecialEditionHotels: unstable_cache(
    async (language = DEFAULT_LANGUAGE) => {
      return await client.fetch(getSpecialEditionHotelsQuery, {
        language,
        edition: DEFAULT_EDITION,
      });
    },
    ["special-edition-hotels"],
    { tags: ["hotels"], revalidate: 25 }
  ),

  /**
   * Get featured hotels (limited to 6)
   */

  /**
   * Get all hotel categories
   */
  getHotelCategories: unstable_cache(
    async (language = DEFAULT_LANGUAGE, edition = DEFAULT_EDITION) => {
      return await client.fetch(getHotelCategoriesQuery, {
        language,
        edition,
      });
    },
    ["hotel-categories"],
    { tags: ["hotels", "categories"], revalidate: 25 }
  ),

  /**
   * Get all cities
   */
  getCities: unstable_cache(
    async (edition = DEFAULT_EDITION) => {
      return await client.fetch(getCitiesQuery, {
        edition,
      });
    },
    ["cities"],
    { tags: ["hotels", "cities"], revalidate: 25 }
  ),
};
