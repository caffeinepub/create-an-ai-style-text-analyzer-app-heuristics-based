import { useSpeechToText } from '../../hooks/useSpeechToText';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Mic, MicOff } from 'lucide-react';
import { toast } from 'sonner';

interface VoiceControlsProps {
  onTranscript: (text: string) => void;
  disabled?: boolean;
}

export default function VoiceControls({ onTranscript, disabled }: VoiceControlsProps) {
  const { isSupported, isListening, error, startListening, stopListening } = useSpeechToText();

  const handleMicClick = () => {
    if (!isSupported) {
      toast.error('Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    if (isListening) {
      stopListening();
    } else {
      startListening((transcript) => {
        onTranscript(transcript);
        toast.success('Voice input captured');
      });
    }
  };

  if (error) {
    toast.error(error);
  }

  if (!isSupported) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              disabled
            >
              <MicOff className="h-4 w-4 text-muted-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Voice input not supported in your browser</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant={isListening ? 'default' : 'ghost'}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={handleMicClick}
            disabled={disabled}
          >
            {isListening ? (
              <Mic className="h-4 w-4 animate-pulse" />
            ) : (
              <Mic className="h-4 w-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">{isListening ? 'Stop recording' : 'Start voice input'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
