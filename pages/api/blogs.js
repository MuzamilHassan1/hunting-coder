// import { readFile, readdir } from 'fs';
import * as fs from 'fs'

export default async function handler(req, res) {
  // console.log(req.query) => params

  let blogdata = [];
  let files = await fs.promises.readdir('blogdata');
  for (const file of files) {
    let myFile = await fs.promises.readFile(`blogdata/${file}`, 'utf-8');
    blogdata.push(JSON.parse(myFile));
  }
  res.status(200).json(blogdata);
}

//NOTES -> While fetching file we need to use promises
//So we need to use fs.promises.method
//also we can not use ForEach loop with promises
//we need to use more specific loop like for of
