import { createClient } from "next-sanity";

import urlBuilder from "@sanity/image-url";

export const  client = createClient({
    projectId:'qjax7pp1',
    dataset:'production',
    apiVersion:'2022-11-01',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = urlBuilder(client)

export const urlFor = (source) => builder.image(source)