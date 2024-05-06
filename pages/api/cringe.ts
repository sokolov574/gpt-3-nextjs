/* import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI, Configuration } from 'openai'
 
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI(configuration);
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
} */


import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'openai'
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prompt = req.query.prompt;

  if (!prompt) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  if(prompt.length > 100) {
    return res.status(400).json({ error: "Prompt is to long" });
  }

  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: `Create a cringy motivational quote based on the following topic.\n
    Topic: ${prompt}\n
    Cringy motivational quote:`,
});
}