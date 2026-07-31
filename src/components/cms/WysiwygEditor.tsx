'use client';

import { useEffect, useRef, useState } from 'react';
import { Bold, Italic, Underline, Heading2, Heading3, List, Link as LinkIcon, Image as ImageIcon, Code, Eye, Eraser, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface WysiwygEditorProps {
  value: string;
  onChange: (val: string) => void;
}

export default function WysiwygEditor({ value, onChange }: WysiwygEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isCodeView, setIsCodeView] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  const [uploading, setUploading] = useState(false);

  // Sync value from parent once on load or when view switches
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || '<p><br></p>';
    }
    setInternalValue(value);
  }, [value]);

  const handleInput = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      onChange(html);
      setInternalValue(html);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    onChange(val);
    setInternalValue(val);
  };

  const executeCommand = (command: string, value: string = '') => {
    document.execCommand(command, false, value);
    handleInput();
  };

  const addLink = () => {
    const url = prompt('Enter the link URL (e.g. https://altruva.co.id):');
    if (url) {
      executeCommand('createLink', url);
    }
  };

  const handleImageButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/cms/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        if (data.url) {
          // Focus the editor before inserting
          if (editorRef.current) {
            editorRef.current.focus();
          }
          const imgHtml = `<img src="${data.url}" alt="${file.name}" class="rounded-lg my-6 shadow-md max-w-full h-auto block mx-auto" />`;
          document.execCommand('insertHTML', false, imgHtml);
          handleInput();
        }
      } else {
        alert('Failed to upload image. Please try again.');
      }
    } catch (err) {
      console.error('Image upload failed:', err);
      alert('An error occurred during upload.');
    } finally {
      setUploading(false);
      // Reset input value to allow uploading the same file again
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-primary focus-within:border-primary">
      {/* Hidden File Input for Image Upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Toolbar */}
      <div className="bg-white border-b border-slate-200 px-3 py-2 flex flex-wrap gap-1.5 items-center justify-between">
        <div className="flex flex-wrap gap-1 items-center">
          {/* Formatting Buttons */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-slate-200 text-slate-700"
            onClick={() => executeCommand('bold')}
            title="Bold"
            disabled={isCodeView}
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-slate-200 text-slate-700"
            onClick={() => executeCommand('italic')}
            title="Italic"
            disabled={isCodeView}
          >
            <Italic className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-slate-200 text-slate-700"
            onClick={() => executeCommand('underline')}
            title="Underline"
            disabled={isCodeView}
          >
            <Underline className="h-4 w-4" />
          </Button>
          
          <div className="w-px h-6 bg-slate-200 mx-1" />

          {/* Headings */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 px-2 hover:bg-slate-200 text-slate-700"
            onClick={() => executeCommand('formatBlock', 'h2')}
            title="Heading 2"
            disabled={isCodeView}
          >
            <Heading2 className="h-4 w-4 mr-1" /> H2
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 px-2 hover:bg-slate-200 text-slate-700"
            onClick={() => executeCommand('formatBlock', 'h3')}
            title="Heading 3"
            disabled={isCodeView}
          >
            <Heading3 className="h-4 w-4 mr-1" /> H3
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 px-2 hover:bg-slate-200 text-slate-700"
            onClick={() => executeCommand('formatBlock', 'p')}
            title="Paragraph"
            disabled={isCodeView}
          >
            P
          </Button>

          <div className="w-px h-6 bg-slate-200 mx-1" />

          {/* List, Link, and Image */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-slate-200 text-slate-700"
            onClick={() => executeCommand('insertUnorderedList')}
            title="Bullet List"
            disabled={isCodeView}
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-slate-200 text-slate-700"
            onClick={addLink}
            title="Add Link"
            disabled={isCodeView}
          >
            <LinkIcon className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-slate-200 text-slate-700"
            onClick={handleImageButtonClick}
            title="Upload Image"
            disabled={isCodeView || uploading}
          >
            {uploading ? (
              <Loader2 className="h-4 w-4 animate-spin text-primary" />
            ) : (
              <ImageIcon className="h-4 w-4" />
            )}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-slate-200 text-slate-700"
            onClick={() => executeCommand('removeFormat')}
            title="Clear Formatting"
            disabled={isCodeView}
          >
            <Eraser className="h-4 w-4" />
          </Button>
        </div>

        {/* View Toggle */}
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-8 text-xs font-semibold"
          onClick={() => setIsCodeView(!isCodeView)}
        >
          {isCodeView ? (
            <>
              <Eye className="h-3.5 w-3.5 mr-1" /> Visual Editor
            </>
          ) : (
            <>
              <Code className="h-3.5 w-3.5 mr-1" /> Code View (HTML)
            </>
          )}
        </Button>
      </div>

      {/* Editor Content Area */}
      <div className="bg-white">
        {isCodeView ? (
          <Textarea
            value={internalValue}
            onChange={handleTextareaChange}
            className="min-h-[350px] w-full border-none rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 font-mono text-sm p-4 bg-white"
            placeholder="<p>Write raw HTML content here...</p>"
          />
        ) : (
          <div
            ref={editorRef}
            contentEditable
            onInput={handleInput}
            className="min-h-[350px] p-5 focus:outline-none prose prose-slate max-w-none text-foreground/80 overflow-y-auto bg-white [&>h2]:font-serif [&>h2]:text-primary [&>h2]:text-2xl [&>h2]:mt-6 [&>h2]:mb-3 [&>h3]:font-serif [&>h3]:text-primary [&>h3]:text-xl [&>h3]:mt-4 [&>h3]:mb-2 [&>p]:mb-4"
          />
        )}
      </div>
    </div>
  );
}
