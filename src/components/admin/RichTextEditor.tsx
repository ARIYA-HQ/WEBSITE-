import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import {
    Bold, Italic, List, ListOrdered, Quote, Heading1, Heading2, Heading3,
    Link as LinkIcon, Image as ImageIcon, Undo, Redo, Code, Strikethrough, X, Check
} from 'lucide-react';

interface RichTextEditorProps {
    content: string;
    onChange: (content: string) => void;
}

const InputPopover = ({ label, defaultValue = '', onConfirm, onCancel }: {
    label: string; defaultValue?: string; onConfirm: (val: string) => void; onCancel: () => void;
}) => {
    const [value, setValue] = useState(defaultValue);
    return (
        <div className="absolute z-10 top-full mt-1 left-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-3 flex gap-2 min-w-[280px]">
            <input
                autoFocus
                type="url"
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') onConfirm(value); if (e.key === 'Escape') onCancel(); }}
                placeholder={label}
                className="flex-1 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
            />
            <button onClick={() => onConfirm(value)} className="p-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors">
                <Check className="w-4 h-4" />
            </button>
            <button onClick={onCancel} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

const ImageInputPopover = ({ onConfirm, onCancel }: {
    onConfirm: (src: string, alt: string) => void; onCancel: () => void;
}) => {
    const [src, setSrc] = useState('');
    const [alt, setAlt] = useState('');
    const canInsert = src.trim().length > 0 && alt.trim().length > 0;

    return (
        <div className="absolute left-0 top-full z-10 mt-1 flex min-w-[280px] flex-col gap-2 rounded-xl border border-gray-200 bg-white p-3 shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <input
                autoFocus
                type="url"
                value={src}
                onChange={(event) => setSrc(event.target.value)}
                placeholder="https://example.com/image.jpg"
                aria-label="Image URL"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
            <input
                type="text"
                value={alt}
                onChange={(event) => setAlt(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' && canInsert) onConfirm(src.trim(), alt.trim());
                    if (event.key === 'Escape') onCancel();
                }}
                placeholder="Describe the image for screen readers and search"
                aria-label="Image description (alt text)"
                required
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
            <div className="flex justify-end gap-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    aria-label="Cancel image insertion"
                >
                    <X className="h-4 w-4" />
                </button>
                <button
                    type="button"
                    onClick={() => onConfirm(src.trim(), alt.trim())}
                    disabled={!canInsert}
                    className="rounded-lg bg-primary-600 p-2 text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
                    aria-label="Insert image"
                >
                    <Check className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

const MenuBar = ({ editor }: { editor: any }) => {
    const [linkPopover, setLinkPopover] = useState(false);
    const [imagePopover, setImagePopover] = useState(false);

    if (!editor) return null;

    const handleSetLink = (url: string) => {
        setLinkPopover(false);
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
        } else {
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
        }
    };

    const handleAddImage = (url: string, alt: string) => {
        setImagePopover(false);
        editor.chain().focus().setImage({ src: url, alt }).run();
    };

    return (
        <div className="flex flex-wrap gap-2 p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 rounded-t-xl">
            {/* History */}
            <div className="flex gap-1 pr-2 border-r border-gray-300 dark:border-gray-600">
                <button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().chain().focus().undo().run()} className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors" aria-label="Undo">
                    <Undo className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().chain().focus().redo().run()} className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors" aria-label="Redo">
                    <Redo className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
            </div>

            {/* Formatting */}
            <div className="flex gap-1 pr-2 border-r border-gray-300 dark:border-gray-600">
                <button onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()} className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('bold') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`} aria-label="Bold">
                    <Bold className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button onClick={() => editor.chain().focus().toggleItalic().run()} disabled={!editor.can().chain().focus().toggleItalic().run()} className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('italic') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`} aria-label="Italic">
                    <Italic className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button onClick={() => editor.chain().focus().toggleStrike().run()} disabled={!editor.can().chain().focus().toggleStrike().run()} className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('strike') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`} aria-label="Strikethrough">
                    <Strikethrough className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button onClick={() => editor.chain().focus().toggleCode().run()} disabled={!editor.can().chain().focus().toggleCode().run()} className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('code') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`} aria-label="Code">
                    <Code className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
            </div>

            {/* Headings */}
            <div className="flex gap-1 pr-2 border-r border-gray-300 dark:border-gray-600">
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`} aria-label="Heading 1">
                    <Heading1 className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`} aria-label="Heading 2">
                    <Heading2 className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`} aria-label="Heading 3">
                    <Heading3 className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
            </div>

            {/* Lists */}
            <div className="flex gap-1 pr-2 border-r border-gray-300 dark:border-gray-600">
                <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('bulletList') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`} aria-label="Bullet list">
                    <List className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('orderedList') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`} aria-label="Ordered list">
                    <ListOrdered className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('blockquote') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`} aria-label="Blockquote">
                    <Quote className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
            </div>

            {/* Insert */}
            <div className="flex gap-1 relative">
                <div className="relative">
                    <button onClick={() => { setImagePopover(false); setLinkPopover(v => !v); }} className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('link') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`} aria-label="Insert link">
                        <LinkIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </button>
                    {linkPopover && (
                        <InputPopover
                            label="https://example.com"
                            defaultValue={editor.getAttributes('link').href || ''}
                            onConfirm={handleSetLink}
                            onCancel={() => setLinkPopover(false)}
                        />
                    )}
                </div>
                <div className="relative">
                    <button onClick={() => { setLinkPopover(false); setImagePopover(v => !v); }} className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Insert image">
                        <ImageIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </button>
                    {imagePopover && (
                        <ImageInputPopover
                            onConfirm={handleAddImage}
                            onCancel={() => setImagePopover(false)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Link.configure({ openOnClick: false }),
            Placeholder.configure({ placeholder: 'Start writing your masterpiece...' }),
        ],
        content,
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose-base dark:prose-invert focus:outline-none min-h-[300px] px-8 py-6',
            },
        },
        onUpdate: ({ editor }: { editor: any }) => {
            onChange(editor.getHTML());
        },
    });

    if (editor && content && editor.getHTML() !== content && !editor.isFocused) {
        editor.commands.setContent(content);
    }

    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-sm focus-within:ring-2 focus-within:ring-primary-600 transition-shadow">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}
