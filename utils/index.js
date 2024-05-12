import { GENRE_ENUM } from "../const"

export const createDatabaseId = (genre) =>{
    let databaseId = '5b2e9f64d73f47bda1a77823d98cc853'//process.env.NEXT_PUBLIC_NOTION_MOVIE_DATABASE_ID;
    if(genre){
      if(genre == GENRE_ENUM.GENRE1){
        databaseId = '5b2e9f64d73f47bda1a77823d98cc853'//process.env.NEXT_PUBLIC_NOTION_MOVIE_DATABASE_ID;
      } else if (genre == GENRE_ENUM.GENRE2){
        databaseId = 'c0adce8b8e0d444b87b40972bea718e4'//process.env.NEXT_PUBLIC_NOTION_RECORDING_DATABASE_ID;
      } else if (genre == GENRE_ENUM.GENRE3){
        databaseId = 'aed402882bd8429db246882741052d2b'//process.env.NEXT_PUBLIC_NOTION_TIPS_DATABASE_ID;
      } else if (genre == GENRE_ENUM.GENRE4){
        databaseId = 'a3c29e8d71d24591aa84660d8fba9366'//process.env.NEXT_PUBLIC_NOTION_TECH_DATABASE_ID;
      }
    }
    return databaseId
}