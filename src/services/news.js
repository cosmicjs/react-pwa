import config from './../config/config';
import axios from 'axios';

const newsData = {

    // add news to Cosmic JS database
    addnews(title, description, newsbody, date)
    {
        return axios.post(config.url+config.bucket_slug+"/add-object/", {
            title: title, slug: title, content: newsbody, type_slug: 'news', write_key: config.write_key,

            metafields: [
                {
                  key: "description",
                  type: "text",
                  value: description
                },
                {
                    key: "date",
                    type: "text",
                    value: date
                  }
            ]
        
        })
    },

    // fetch all news from Cosmic JS database
    getNews()
    {
        return axios.get(config.url+config.bucket_slug+"/object-type/news",{
            params: {
                read_key: config.read_key
            }
        })
    },

    // submiting comment
    submitComment(name, comment, newsId)
    {
        return axios.post(config.url+config.bucket_slug+"/add-object/", {
            title: name, slug: name, content: newsId, type_slug: 'comments', write_key: config.write_key,
            metafields: [
                {
                  key: "comment",
                  type: "text",
                  value: comment
                }
            ]
                    
        })
    },

    // all comments
    allComments()
    {
        return axios.get(config.url+config.bucket_slug+"/object-type/comments",{
            params: {
                read_key: config.read_key
            }
        })
    }

}

export default newsData;