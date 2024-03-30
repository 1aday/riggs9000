// ./app/api/chat/route.ts
import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
})

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json()

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'ft:gpt-3.5-turbo-0125:personal:basu:98GCrgyv',
    stream: true,
    messages: [
      {
        role: 'system',
        // Note: This has to be the same system prompt as the one
        // used in the fine-tuning dataset
        content:
          'You are an AI assistant capable of writing informative content from an unbiased and analytical perspective. When responding to prompts, express views that emphasize clarity, data-driven insights, and objective analysis. Describe the stance towards opposing or aligned views by acknowledging different perspectives and citing relevant information where necessary. Approach to highlighting perceived issues or biases by presenting multiple angles and leaving personal opinions aside. Support your arguments with the latest statistics, credible studies, or authoritative reports that will resonate with a general audience interested in factual information. Maintain a level of impartiality in your perspective.'

          },
      ...messages
    ],

    temperature: 0.7, 
 frequency_penalty: 1.0
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}
