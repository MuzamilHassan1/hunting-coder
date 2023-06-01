import { readFile, readdir } from 'fs';

export default function handler(req, res) {
  // console.log(req.query) => params

  let blogdata = []
  readdir('blogdata', (error, files) => {
    // files.forEach(file => {
    //   readFile(`blogdata/${file}`, 'utf-8', (error, data) => {
    //     if (error) res.status(404).json({ error: "Something went wrong" })
    //     blogdata.push(JSON.parse(data))
    //   })
    // });
    res.status(200).json(files);
  });
}
