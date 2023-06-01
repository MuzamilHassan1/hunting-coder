import { readFile } from 'fs';

export default function handler(req, res) {
  // console.log(req.query) => params

  readFile(`blogdata/${req.query.slug}.json`, 'utf8', (error, data) => {
    if (error) res.status(404).json({error: "Blog not found"})
    // console.log(typeof(data)) => string
    res.status(200).json(JSON.parse(data));
  });
}
