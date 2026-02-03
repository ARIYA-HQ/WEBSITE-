import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import {
    Bold, Italic, List, ListOrdered, Quote, Heading1, Heading2, Heading3,
    Link as LinkIcon, Image as ImageIcon, Undo, Redo, Code, Strikethrough
} from 'lucide-react';

interface RichTextEditorProps {
    content: string;
    onChange: (content: string) => void;
}

const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) {
        return null;
    }

    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('URL', previousUrl);

        if (url === null) {
            return;
        }

        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    };

    const addImage = () => {
        const url = window.prompt('Image URL');

        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };

    return (
        <div className="flex flex-wrap gap-2 p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 rounded-t-xl">
            {/* History */}
            <div className="flex gap-1 pr-2 border-r border-gray-300 dark:border-gray-600">
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().chain().focus().undo().run()}
                    className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors"
                >
                    <Undo className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().chain().focus().redo().run()}
                    className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors"
                >
                    <Redo className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
            </div>

            {/* Formatting */}
            <div className="flex gap-1 pr-2 border-r border-gray-300 dark:border-gray-600">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('bold') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`}
                >
                    <Bold className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                    className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('italic') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`}
                >
                    <Italic className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editor.can().chain().focus().toggleStrike().run()}
                    className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('strike') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`}
                >
                    <Strikethrough className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editor.can().chain().focus().toggleCode().run()}
                    className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('code') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`}
                >
                    <Code className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
            </div>

            {/* Headings */}
            <div className="flex gap-1 pr-2 border-r border-gray-300 dark:border-gray-600">
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`}
                >
                    <Heading1 className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`}
                >
                    <Heading2 className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`}
                >
                    <Heading3 className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
            </div>

            {/* List */}
            <div className="flex gap-1 pr-2 border-r border-gray-300 dark:border-gray-600">
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('bulletList') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`}
                >
                    <List className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('orderedList') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`}
                >
                    <ListOrdered className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('blockquote') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`}
                >
                    <Quote className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
            </div>

            {/* Insert */}
            <div className="flex gap-1">
                <button
                    onClick={setLink}
                    className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${editor.isActive('link') ? 'bg-gray-200 dark:bg-gray-700 shadow-inner' : ''}`}
                >
                    <LinkIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                    onClick={addImage}
                    className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    <ImageIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
            </div>
        </div>
    );
};

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Link.configure({
                openOnClick: false,
            }),
            Placeholder.configure({
                placeholder: 'Start writing your masterpiece...',
            }),
        ],
        content: content,
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose-base dark:prose-invert focus:outline-none min-h-[300px] px-8 py-6',
            },
        },
        onUpdate: ({ editor }: { editor: any }) => {
            onChange(editor.getHTML());
        },
    });

    // Update content when it changes externally (e.g. initial load)
    // Avoid re-rendering if content is same to prevent cursor jump
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
