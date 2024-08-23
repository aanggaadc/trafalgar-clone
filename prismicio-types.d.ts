// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Day Details documents
 */
interface DayDetailsDocumentData {
  /**
   * Name field in *Day Details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_details.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Reference field in *Day Details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_details.ref
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  ref: prismic.KeyTextField;

  /**
   * Description field in *Day Details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_details.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Icon field in *Day Details*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: day_details.icon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;
}

/**
 * Day Details document from Prismic
 *
 * - **API ID**: `day_details`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DayDetailsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<DayDetailsDocumentData>,
    "day_details",
    Lang
  >;

/**
 * Content for Day Experiences documents
 */
interface DayExperiencesDocumentData {
  /**
   * Title field in *Day Experiences*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_experiences.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Day Experiences*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_experiences.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *Day Experiences*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: day_experiences.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Include Trip field in *Day Experiences*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: day_experiences.is_include
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_include: prismic.BooleanField;

  /**
   * Url field in *Day Experiences*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: day_experiences.url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField;
}

/**
 * Day Experiences document from Prismic
 *
 * - **API ID**: `day_experiences`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DayExperiencesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<DayExperiencesDocumentData>,
    "day_experiences",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | QuestionAnswerSlice
  | HighlightsSlice
  | DayByDaySlice
  | TopTourSummarySlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | DayDetailsDocument
  | DayExperiencesDocument
  | HomepageDocument
  | SettingsDocument;

/**
 * Item in *DayByDay → Default → Primary → items*
 */
export interface DayByDaySliceDefaultPrimaryItemsItem {
  /**
   * Title field in *DayByDay → Default → Primary → items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day.default.primary.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *DayByDay → Default → Primary → items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day.default.primary.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *DayByDay → Default → Primary → items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day.default.primary.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Routes field in *DayByDay → Default → Primary → items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day.default.primary.items[].routes
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  routes: prismic.KeyTextField;
}

/**
 * Item in *DayByDay → Default → Primary → Details*
 */
export interface DayByDaySliceDefaultPrimaryDetailsItem {
  /**
   * items field in *DayByDay → Default → Primary → Details*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day.default.primary.details[].items
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  items: prismic.ContentRelationshipField<"day_details">;
}

/**
 * Item in *DayByDay → Default → Primary → Experiences*
 */
export interface DayByDaySliceDefaultPrimaryExperiencesItem {
  /**
   * Items field in *DayByDay → Default → Primary → Experiences*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day.default.primary.experiences[].items
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  items: prismic.ContentRelationshipField<"day_experiences">;
}

/**
 * Primary content in *DayByDay → Default → Primary*
 */
export interface DayByDaySliceDefaultPrimary {
  /**
   * Title field in *DayByDay → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *DayByDay → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * items field in *DayByDay → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day.default.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<Simplify<DayByDaySliceDefaultPrimaryItemsItem>>;

  /**
   * Details field in *DayByDay → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day.default.primary.details[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  details: prismic.GroupField<Simplify<DayByDaySliceDefaultPrimaryDetailsItem>>;

  /**
   * Experiences field in *DayByDay → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day.default.primary.experiences[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  experiences: prismic.GroupField<
    Simplify<DayByDaySliceDefaultPrimaryExperiencesItem>
  >;
}

/**
 * Default variation for DayByDay Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DayByDaySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DayByDaySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *DayByDay*
 */
type DayByDaySliceVariation = DayByDaySliceDefault;

/**
 * DayByDay Shared Slice
 *
 * - **API ID**: `day_by_day`
 * - **Description**: DayByDay
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DayByDaySlice = prismic.SharedSlice<
  "day_by_day",
  DayByDaySliceVariation
>;

/**
 * Item in *Highlights → Default → Primary → Items Left*
 */
export interface HighlightsSliceDefaultPrimaryItemsLeftItem {
  /**
   * Icon field in *Highlights → Default → Primary → Items Left*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.items_left[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * Name field in *Highlights → Default → Primary → Items Left*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.items_left[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;
}

/**
 * Item in *Highlights → Default → Primary → Item Right*
 */
export interface HighlightsSliceDefaultPrimaryItemRightItem {
  /**
   * Icon field in *Highlights → Default → Primary → Item Right*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.item_right[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * Name field in *Highlights → Default → Primary → Item Right*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.item_right[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;
}

/**
 * Primary content in *Highlights → Default → Primary*
 */
export interface HighlightsSliceDefaultPrimary {
  /**
   * Title field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Is Link field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: highlights.default.primary.is_link
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_link: prismic.BooleanField;

  /**
   * Link Text field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_text: prismic.KeyTextField;

  /**
   * Link URL field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.link_url
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_url: prismic.LinkField;

  /**
   * Link Color field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.link_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  link_color: prismic.ColorField;

  /**
   * Items Left field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.items_left[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items_left: prismic.GroupField<
    Simplify<HighlightsSliceDefaultPrimaryItemsLeftItem>
  >;

  /**
   * Item Right field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.item_right[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  item_right: prismic.GroupField<
    Simplify<HighlightsSliceDefaultPrimaryItemRightItem>
  >;
}

/**
 * Default variation for Highlights Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HighlightsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HighlightsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Highlights*
 */
type HighlightsSliceVariation = HighlightsSliceDefault;

/**
 * Highlights Shared Slice
 *
 * - **API ID**: `highlights`
 * - **Description**: Highlights
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HighlightsSlice = prismic.SharedSlice<
  "highlights",
  HighlightsSliceVariation
>;

/**
 * Item in *QuestionAnswer → Default → Primary → Items*
 */
export interface QuestionAnswerSliceDefaultPrimaryItemsItem {
  /**
   * Question field in *QuestionAnswer → Default → Primary → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: question_answer.default.primary.items[].question
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  question: prismic.RichTextField;

  /**
   * Answer field in *QuestionAnswer → Default → Primary → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: question_answer.default.primary.items[].answer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  answer: prismic.RichTextField;
}

/**
 * Primary content in *QuestionAnswer → Default → Primary*
 */
export interface QuestionAnswerSliceDefaultPrimary {
  /**
   * Title field in *QuestionAnswer → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: question_answer.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Items field in *QuestionAnswer → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: question_answer.default.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<
    Simplify<QuestionAnswerSliceDefaultPrimaryItemsItem>
  >;
}

/**
 * Default variation for QuestionAnswer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuestionAnswerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<QuestionAnswerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *QuestionAnswer*
 */
type QuestionAnswerSliceVariation = QuestionAnswerSliceDefault;

/**
 * QuestionAnswer Shared Slice
 *
 * - **API ID**: `question_answer`
 * - **Description**: QuestionAnswer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuestionAnswerSlice = prismic.SharedSlice<
  "question_answer",
  QuestionAnswerSliceVariation
>;

/**
 * Item in *TopTourSummary → Default → Primary → Details*
 */
export interface TopTourSummarySliceDefaultPrimaryDetailsItem {
  /**
   * Title field in *TopTourSummary → Default → Primary → Details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.default.primary.details[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *TopTourSummary → Default → Primary → Details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.default.primary.details[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Icon field in *TopTourSummary → Default → Primary → Details*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.default.primary.details[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;
}

/**
 * Primary content in *TopTourSummary → Default → Primary*
 */
export interface TopTourSummarySliceDefaultPrimary {
  /**
   * Tour Image field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.default.primary.tour_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  tour_image: prismic.ImageField<never>;

  /**
   * Title field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Details field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.default.primary.details[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  details: prismic.GroupField<
    Simplify<TopTourSummarySliceDefaultPrimaryDetailsItem>
  >;

  /**
   * Booking Info title field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.default.primary.booking_info_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  booking_info_title: prismic.RichTextField;

  /**
   * Booking Info Description field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.default.primary.booking_info_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  booking_info_description: prismic.RichTextField;

  /**
   * Booking Info Link field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.default.primary.booking_info_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  booking_info_link: prismic.LinkField;

  /**
   * Trip Code Text field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.default.primary.trip_code_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trip_code_text: prismic.KeyTextField;

  /**
   * Trip Code Value field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.default.primary.trip_code_value
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trip_code_value: prismic.KeyTextField;
}

/**
 * Default variation for TopTourSummary Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TopTourSummarySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TopTourSummarySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TopTourSummary*
 */
type TopTourSummarySliceVariation = TopTourSummarySliceDefault;

/**
 * TopTourSummary Shared Slice
 *
 * - **API ID**: `top_tour_summary`
 * - **Description**: TopTourSummary
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TopTourSummarySlice = prismic.SharedSlice<
  "top_tour_summary",
  TopTourSummarySliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      DayDetailsDocument,
      DayDetailsDocumentData,
      DayExperiencesDocument,
      DayExperiencesDocumentData,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      DayByDaySlice,
      DayByDaySliceDefaultPrimaryItemsItem,
      DayByDaySliceDefaultPrimaryDetailsItem,
      DayByDaySliceDefaultPrimaryExperiencesItem,
      DayByDaySliceDefaultPrimary,
      DayByDaySliceVariation,
      DayByDaySliceDefault,
      HighlightsSlice,
      HighlightsSliceDefaultPrimaryItemsLeftItem,
      HighlightsSliceDefaultPrimaryItemRightItem,
      HighlightsSliceDefaultPrimary,
      HighlightsSliceVariation,
      HighlightsSliceDefault,
      QuestionAnswerSlice,
      QuestionAnswerSliceDefaultPrimaryItemsItem,
      QuestionAnswerSliceDefaultPrimary,
      QuestionAnswerSliceVariation,
      QuestionAnswerSliceDefault,
      TopTourSummarySlice,
      TopTourSummarySliceDefaultPrimaryDetailsItem,
      TopTourSummarySliceDefaultPrimary,
      TopTourSummarySliceVariation,
      TopTourSummarySliceDefault,
    };
  }
}
