const config = {
  bucket_name: process.env.REACT_APP_BUCKET_SLUG || "996304b0-28d1-11e9-9e3f-b139f5a50259",
  bucket_slug: process.env.REACT_APP_BUCKET_SLUG || "996304b0-28d1-11e9-9e3f-b139f5a50259",
  bucket_id: process.env.REACT_APP_BUCKET_ID || "",
  read_key: process.env.REACT_APP_BUCKET_READ_KEY || "",
  write_key: process.env.REACT_APP_BUCKET_WRITE_KEY || "",
  url: "https://api.cosmicjs.com/v1/"
}
export default config;