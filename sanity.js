import { createClient, createCurrentUserHook } from 'next-sanity'
import createImageBuilder from '@sanity/image-url'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)

//helper function for generating Image URLs with only the asset reference data in your documents
export const urlFor = (source) => createImageBuilder(config).image(source)

//helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)
