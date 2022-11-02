import { client } from "./client";

export const getAllProducts = async() => {
    const data = await client.fetch(` * [_type == "product" ]{'slug': slug.current}`)
    
    return data
}