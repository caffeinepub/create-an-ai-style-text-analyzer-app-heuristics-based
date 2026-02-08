import { useState, useRef, useEffect } from 'react';
import { useGetHistory, useAddChatMessage } from '../hooks/useQueries';
import { generateHeuristicResponse } from '../lib/chat/heuristics';
import ChatThread from '../components/Chat/ChatThread';
import ChatComposer from '../components/Chat/ChatComposer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Trash2, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { useClearUserData } from '../hooks/useQueries';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chat() {
  const { data: history = [], isLoading } = useGetHistory();
  const addChatMutation = useAddChatMessage();
  const clearDataMutation = useClearUserData();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Parse history into messages
  useEffect(() => {
    const parsed: ChatMessage[] = [];
    history.forEach((entry) => {
      const userMatch = entry.match(/User: (.*?)\nAssistant: (.*)/s);
      if (userMatch) {
        parsed.push({ role: 'user', content: userMatch[1] });
        parsed.push({ role: 'assistant', content: userMatch[2] });
      }
    });
    setMessages(parsed);
  }, [history]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (input: string) => {
    if (!input.trim()) return;

    // Add user message immediately
    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Generate response
    const response = generateHeuristicResponse(input);
    const assistantMessage: ChatMessage = { role: 'assistant', content: response };
    setMessages((prev) => [...prev, assistantMessage]);

    // Persist to backend
    try {
      await addChatMutation.mutateAsync({ input, response });
    } catch (error) {
      toast.error('Failed to save chat message');
      console.error(error);
    }
  };

  const handleClearChat = async () => {
    try {
      await clearDataMutation.mutateAsync();
      setMessages([]);
      toast.success('Chat history cleared successfully');
    } catch (error) {
      toast.error('Failed to clear chat history');
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
          <p className="text-muted-foreground">Loading chat...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Card className="h-[calc(100vh-12rem)] flex flex-col">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Chat AI
              </CardTitle>
              <CardDescription>Hindi + English support • Voice enabled</CardDescription>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm" disabled={messages.length === 0}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Chat
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Clear chat history?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete all your chat messages. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleClearChat} disabled={clearDataMutation.isPending}>
                    {clearDataMutation.isPending ? 'Clearing...' : 'Clear Chat'}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden p-0 flex flex-col">
          <div className="flex-1 overflow-y-auto p-6">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Start a conversation</h3>
                  <p className="text-muted-foreground max-w-md">
                    Ask me about privacy, features, or anything else. I support both Hindi and English!
                  </p>
                </div>
              </div>
            ) : (
              <>
                <ChatThread messages={messages} />
                <div ref={messagesEndRef} />
              </>
            )}
          </div>
          <div className="border-t p-4">
            <ChatComposer onSend={handleSendMessage} disabled={addChatMutation.isPending} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
