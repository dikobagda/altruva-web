'use client';

import { useEffect, useRef, useState } from 'react';
import { Bold, Italic, Underline, Heading1, Heading2, Heading3, List, Link as LinkIcon, Image as ImageIcon, Code, Eye, Eraser, Loader2, AlignLeft, AlignCenter, AlignRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    // Ambil data HTML dari clipboard jika ada (biasanya dari MS Word)
    const html = e.clipboardData.getData('text/html');
    const text = e.clipboardData.getData('text/plain');

    if (html) {
      // 1. Bersihkan tags dan style sampah dari MS Word / Eksternal
      let cleanHtml = html;

      // Hapus tag XML, Namespace, dan tag Meta Office
      cleanHtml = cleanHtml.replace(/<!--[\s\S]*?-->/g, '');
      cleanHtml = cleanHtml.replace(/<xml>[\s\S]*?<\/xml>/gi, '');
      cleanHtml = cleanHtml.replace(/<(meta|link|style|o:|[wst]:)[^>]*>/gi, '');
      cleanHtml = cleanHtml.replace(/<\/(o:|[wst]:)[^>]*>/gi, '');

      // Hapus inline styling class yang berantakan (MsoNormal, MsoListParagraph, dll)
      cleanHtml = cleanHtml.replace(/\s*class="[^"]*"/gi, '');
      cleanHtml = cleanHtml.replace(/\s*style="[^"]*"/gi, '');
      cleanHtml = cleanHtml.replace(/\s*lang="[^"]*"/gi, '');

      // Bersihkan spasi kosong ganda, tag kosong & tag pembungkus yang tidak diperlukan
      cleanHtml = cleanHtml.replace(/<span[^>]*>([\s\S]*?)<\/span>/gi, '$1');
      cleanHtml = cleanHtml.replace(/<font[^>]*>([\s\S]*?)<\/font>/gi, '$1');
      
      // Sederhanakan list (mengganti list paragraph dari MS Word ke Standard HTML list)
      cleanHtml = cleanHtml.replace(/<p[^>]*>•&nbsp;\s*([\s\S]*?)<\/p>/gi, '<li>$1</li>');
      cleanHtml = cleanHtml.replace(/<p[^>]*>·&nbsp;\s*([\s\S]*?)<\/p>/gi, '<li>$1</li>');

      // Pastikan paragraf tidak memiliki wrapper aneh
      cleanHtml = cleanHtml.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '<p>$1</p>');
      
      // Bersihkan spasi berlebih
      cleanHtml = cleanHtml.trim();

      // Sisipkan HTML yang bersih ke posisi kursor saat ini
      document.execCommand('insertHTML', false, cleanHtml);
    } else if (text) {
      // Jika hanya ada plain text, sisipkan dengan aman
      const textHtml = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br>');
      document.execCommand('insertHTML', false, textHtml);
    }
    handleInput();
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

  const changeLineHeight = (height: string) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    let container = range.commonAncestorContainer as HTMLElement;

    // Resolve text nodes to parent elements
    if (container.nodeType === 3) {
      container = container.parentNode as HTMLElement;
    }

    // Traverse up to find block element or contenteditable root
    while (
      container &&
      container !== editorRef.current &&
      !['H1', 'P', 'H2', 'H3', 'LI', 'BLOCKQUOTE', 'DIV'].includes(container.nodeName)
    ) {
      container = container.parentNode as HTMLElement;
    }

    if (container && container !== editorRef.current) {
      container.style.lineHeight = height;
      handleInput();
    } else {
      // If root editor is selected, wrap selection in span with line-height
      const span = document.createElement('span');
      span.style.lineHeight = height;
      span.style.display = 'inline-block'; // force span to respect height
      try {
        range.surroundContents(span);
        handleInput();
      } catch (e) {
        // Fallback if range cross boundaries
        executeCommand('insertHTML', `<span style="line-height: ${height}; display: inline-block;">${selection.toString()}</span>`);
      }
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
    <div className="border border-slate-200 rounded-lg focus-within:ring-1 focus-within:ring-primary focus-within:border-primary">
      {/* Hidden File Input for Image Upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Toolbar */}
      <div className="sticky top-0 z-20 bg-slate-50 border-b border-slate-200 px-3 py-2 flex flex-wrap gap-1.5 items-center justify-between rounded-t-lg shadow-sm">
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
            className="h-8 w-8 p-0 hover:bg-slate-200 text-slate-700"
            onClick={() => executeCommand('formatBlock', '<h1>')}
            title="Heading 1"
            disabled={isCodeView}
          >
            <Heading1 className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-slate-200 text-slate-700"
            onClick={() => executeCommand('formatBlock', '<h2>')}
            title="Heading 2"
            disabled={isCodeView}
          >
            <Heading2 className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-slate-200 text-slate-700"
            onClick={() => executeCommand('formatBlock', '<h3>')}
            title="Heading 3"
            disabled={isCodeView}
          >
            <Heading3 className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-slate-200 text-slate-700"
            onClick={() => executeCommand('formatBlock', '<p>')}
            title="Paragraph"
            disabled={isCodeView}
          >
            <span className="font-serif font-bold text-sm">P</span>
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
            onClick={() => executeCommand('justifyLeft')}
            title="Align Left"
            disabled={isCodeView}
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-slate-200 text-slate-700"
            onClick={() => executeCommand('justifyCenter')}
            title="Align Center"
            disabled={isCodeView}
          >
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-slate-200 text-slate-700"
            onClick={() => executeCommand('justifyRight')}
            title="Align Right"
            disabled={isCodeView}
          >
            <AlignRight className="h-4 w-4" />
          </Button>

          <div className="w-px h-6 bg-slate-200 mx-1" />

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
            className="h-8 w-8 p-0 hover:bg-slate-200 text-slate-700 font-serif italic text-base font-bold"
            onClick={() => executeCommand('formatBlock', '<blockquote>')}
            title="Quote"
            disabled={isCodeView}
          >
            "
          </Button>

          <div className="w-px h-6 bg-slate-200 mx-1" />

          {/* Line Height Selector */}
          <div className="w-28" title="Text Line Height">
            <Select onValueChange={changeLineHeight} disabled={isCodeView}>
              <SelectTrigger className="h-8 bg-white border-slate-200 text-xs px-2.5">
                <SelectValue placeholder="Line Height" />
              </SelectTrigger>
              <SelectContent className="bg-white border-slate-200 shadow-md">
                <SelectItem value="1.0">Single (1.0)</SelectItem>
                <SelectItem value="1.2">Compact (1.2)</SelectItem>
                <SelectItem value="1.5">Normal (1.5)</SelectItem>
                <SelectItem value="1.8">Loose (1.8)</SelectItem>
                <SelectItem value="2.0">Double (2.0)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-px h-6 bg-slate-200 mx-1" />

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
      <div className="bg-white rounded-b-lg">
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
            onPaste={handlePaste}
            className="min-h-[350px] p-5 focus:outline-none prose prose-slate max-w-none text-foreground/80 overflow-y-auto bg-white [&_h1]:font-serif [&_h1]:text-primary [&_h1]:text-3xl [&_h1]:mt-8 [&_h1]:mb-4 [&_h2]:font-serif [&_h2]:text-primary [&_h2]:text-2xl [&_h2]:mt-6 [&_h2]:mb-3 [&_h3]:font-serif [&_h3]:text-primary [&_h3]:text-xl [&_h3]:mt-4 [&_h3]:mb-2 [&_p]:mb-4"
          />
        )}
      </div>
    </div>
  );
}
