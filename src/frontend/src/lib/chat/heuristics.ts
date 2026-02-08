// Deterministic heuristic chat response generator (Hindi + English)
// No external AI/LLM services

const greetings = ['hello', 'hi', 'hey', 'namaste', 'namaskar', 'hola'];
const helpKeywords = ['help', 'madad', 'sahayata', 'kya', 'what', 'how', 'kaise'];
const privacyKeywords = ['privacy', 'private', 'secure', 'safety', 'data', 'delete', 'gupti'];
const featureKeywords = ['feature', 'plan', 'roadmap', 'future', 'coming', 'aane wala'];
const videoKeywords = ['video', 'photo', 'image', 'talking', 'motion', 'style'];

export function generateHeuristicResponse(input: string): string {
  const lowerInput = input.toLowerCase().trim();

  // Empty input
  if (!lowerInput) {
    return "Please type a message. / Kripya ek message likhein.";
  }

  // Greetings
  if (greetings.some(g => lowerInput.includes(g))) {
    return "Hello! I'm AI Master, your privacy-first AI assistant. I can help you with chat, voice features, and answer questions about our privacy & security system. How can I assist you today?\n\nNamaste! Main AI Master hoon, aapka privacy-first AI assistant. Main aapki chat, voice features, aur privacy & security ke baare mein madad kar sakta hoon. Aaj main aapki kaise madad kar sakta hoon?";
  }

  // Privacy questions
  if (privacyKeywords.some(k => lowerInput.includes(k))) {
    return "🔐 Privacy & Safety is our Rule No. 1!\n\n✓ Your data is private by default\n✓ Each user has a separate account\n✓ No one can access your chats or data\n✓ You can delete all your data anytime\n✓ Your consent is required before using any media\n\nYou can view full details in the 'Privacy & Safety' section.\n\n---\n\n🔐 Privacy & Safety hamara Rule No. 1 hai!\n\n✓ Aapka data private by default hai\n✓ Har user ka alag account hai\n✓ Koi bhi aapka chat ya data access nahi kar sakta\n✓ Aap apna data kabhi bhi delete kar sakte hain\n✓ Media use karne se pehle aapki permission zaroori hai";
  }

  // Feature/roadmap questions
  if (featureKeywords.some(k => lowerInput.includes(k))) {
    return "📋 AI Master Feature Plan:\n\n🟢 Phase 1 (Available Now):\n• Chat AI (Hindi + English)\n• Voice input & output\n• Login/Logout\n• Privacy & Security system\n\n🟡 Phase 2 (Coming Soon):\n• Image generation\n• Photo upload\n• Study AI\n• User history\n\n🔵 Phase 3 (Future):\n• Photo → Talking video\n• Motion transfer\n• Style-based video\n• Advanced Video AI\n\nCheck the 'Feature Plan' section for complete details!";
  }

  // Video/advanced features
  if (videoKeywords.some(k => lowerInput.includes(k))) {
    return "🎥 Advanced Video AI features are Coming Soon!\n\nWe're planning:\n• Photo → Talking video\n• Photo + Video → Motion transfer\n• Style-based video generation\n\nThese features will be available in Phase 3. Stay tuned!\n\n---\n\n🎥 Advanced Video AI features jald aa rahe hain!\n\nHam plan kar rahe hain:\n• Photo → Talking video\n• Photo + Video → Motion transfer\n• Style-based video generation\n\nYe features Phase 3 mein available honge. Intezaar karein!";
  }

  // Help/general questions
  if (helpKeywords.some(k => lowerInput.includes(k))) {
    return "I can help you with:\n\n💬 Chat in Hindi or English\n🎤 Voice input (speak your message)\n🔊 Voice output (I can read responses aloud)\n🔐 Privacy & Safety information\n📋 Feature roadmap & plans\n⚙️ Settings & data management\n\nWhat would you like to know more about?\n\n---\n\nMain aapki madad kar sakta hoon:\n\n💬 Hindi ya English mein chat\n🎤 Voice input (bol ke message bhejein)\n🔊 Voice output (main jawab padh sakta hoon)\n🔐 Privacy & Safety jaankari\n📋 Feature roadmap & plans\n⚙️ Settings & data management\n\nAap kiske baare mein aur jaanna chahte hain?";
  }

  // Default response for unrecognized input
  return `I received your message: "${input}"\n\nI'm a heuristic AI assistant, so I work best with questions about:\n• Privacy & Security\n• Features & Roadmap\n• Help & Support\n\nTry asking about our privacy system, available features, or future plans!\n\n---\n\nMainne aapka message receive kiya: "${input}"\n\nMain ek heuristic AI assistant hoon, isliye main in topics par best kaam karta hoon:\n• Privacy & Security\n• Features & Roadmap\n• Help & Support\n\nHamari privacy system, available features, ya future plans ke baare mein puchiye!`;
}
