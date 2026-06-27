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

    const handleAddImage = (url: string) => {
        setImagePopover(false);
        if (url) editor.chain().focus().setImage({ src: url }).run();
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
                        <InputPopover
                            label="https://example.com/image.jpg"
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
