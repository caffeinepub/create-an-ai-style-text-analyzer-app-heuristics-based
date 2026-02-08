import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import VoiceControls from './VoiceControls';
import { Send } from 'lucide-react';

interface ChatComposerProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatComposer({ onSend, disabled }: ChatComposerProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  const handleVoiceInput = (transcript: string) => {
    setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex-1 relative">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message... (Shift+Enter for new line)"
          className="min-h-[60px] max-h-[200px] resize-none pr-12"
          disabled={disabled}
        />
        <div className="absolute right-2 bottom-2">
          <VoiceControls onTranscript={handleVoiceInput} disabled={disabled} />
        </div>
      </div>
      <Button type="submit" size="lg" disabled={!input.trim() || disabled} className="self-end">
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
}
