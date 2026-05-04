#!/usr/bin/env node
/**
 * Daily AI Memo Generator
 * Searches for latest AI trends and generates a new memo entry using Claude.
 * Run daily to keep the AI Memo section on bertharo.com fresh.
 */

const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');

const MEMOS_PATH = path.join(__dirname, '../src/data/aiMemos.json');

async function generateMemo() {
  const client = new Anthropic();
  const today = new Date().toISOString().split('T')[0];

  console.log(`Generating AI memo for ${today}...`);

  // Check if we already generated a memo today
  const existing = JSON.parse(fs.readFileSync(MEMOS_PATH, 'utf8'));
  if (existing.some(m => m.date === today)) {
    console.log('Memo already exists for today. Skipping.');
    return;
  }

  // Use Claude with web search tool to research today's AI trends
  const response = await client.messages.create({
    model: 'claude-opus-4-6',
    max_tokens: 4096,
    tools: [{ type: 'web_search_20250305', name: 'web_search' }],
    messages: [
      {
        role: 'user',
        content: `Today is ${today}. Search for the latest AI news and trends from today or this week.

Search for:
1. "AI news today ${today}"
2. "latest AI model releases April 2026"
3. "AI tools product managers developers ${today}"

Then generate a daily AI memo as a JSON object with this exact structure:
{
  "id": ${existing.length + 1},
  "date": "${today}",
  "title": "A punchy, specific title about the biggest AI story today (max 12 words)",
  "summary": "2-3 sentence overview of what matters today in AI and why a professional should care. Be direct and specific, not generic.",
  "trends": [
    {
      "headline": "Short bold headline (5-8 words)",
      "detail": "1-2 sentences of specific, factual context. Include company names, numbers, or product names where possible."
    }
  ],
  "actionItems": [
    {
      "label": "Short action verb phrase (5-7 words)",
      "description": "2-3 sentences explaining exactly what to do and why it matters today. Be concrete and specific, not vague."
    }
  ]
}

Requirements:
- Include exactly 4-5 trends
- Include exactly 4-5 actionItems
- Base everything on real news from today or this week
- Write for a professional audience: PMs, engineers, founders, and curious learners
- Action items should be things someone can realistically do in 30 minutes or less
- Return ONLY the raw JSON object, no markdown fences, no explanation`
      }
    ]
  });

  // Extract the JSON from the response — use the last text block since web_search
  // causes Claude to emit preamble text before the final JSON answer
  const textBlocks = response.content.filter(b => b.type === 'text');
  const textContent = textBlocks[textBlocks.length - 1];
  if (!textContent) {
    throw new Error('No text content in Claude response');
  }

  let memoJson;
  try {
    const raw = textContent.text;
    const start = raw.indexOf('{');
    const end = raw.lastIndexOf('}');
    if (start === -1 || end === -1) throw new Error('No JSON object found in response');
    memoJson = JSON.parse(raw.slice(start, end + 1));
  } catch (e) {
    console.error('Failed to parse memo JSON:', textContent.text);
    throw e;
  }

  existing.push(memoJson);
  fs.writeFileSync(MEMOS_PATH, JSON.stringify(existing, null, 2));
  console.log(`Memo saved: "${memoJson.title}"`);
}

generateMemo().catch(err => {
  console.error('Error generating memo:', err);
  process.exit(1);
});
