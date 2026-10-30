import React, { useRef, useState } from 'react';
import { ImagePlus } from 'lucide-react';
import { cmsService } from '../../services/cmsService';

interface Props {
    value: string;
    onChange: (url: string) => void;
    label?: string;
    urlLabel?: string;
    previewAspect?: 'video' | 'square' | 'wide';
}

export default function ImageUploadField({
    value,
    onChange,
    label = 'Cover Image',
    urlLabel = 'Or paste image URL',
    previewAspect = 'video',
}: Props) {
    const [uploading, setUploading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const aspectClass =
        previewAspect === 'square' ? 'aspect-square' :
        previewAspect === 'wide'   ? 'aspect-[21/9]'  :
                                     'aspect-video';

    const handleFile = async (file: File) => {
        if (!file.type.startsWith('image/')) return;
        setUploading(true);
        try {
            const url = await cmsService.uploadFile(file);
            onChange(url);
        } catch {
            alert('Image upload failed');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="space-y-3">
            {label && (
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                    {label}
                </label>
            )}

            {/* Preview */}
            <div
                className={`${aspectClass} w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-200 dark:border-gray-700 relative group`}
            >
                {value ? (
                    <>
                        <img
                            src={value}
                            alt="Preview"
                            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button
                                type="button"
                                onClick={() => inputRef.current?.click()}
                                className="bg-white text-gray-900 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-100 transition-colors"
                            >
                                Replace Image
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400">
                        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mb-2" />
                        <span className="text-xs uppercase font-bold tracking-wider">No Image</span>
                    </div>
                )}
            </div>

            {/* Hidden file input */}
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFile(file);
                    e.target.value = '';
                }}
            />

            {/* Upload button */}
            <button
                type="button"
                onClick={() => inputRef.current?.click()}
                disabled={uploading}
                className="w-full border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group cursor-pointer disabled:opacity-60"
            >
                <div className="w-8 h-8 bg-primary-100 text-primary-600 dark:bg-primary-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <ImagePlus className="w-4 h-4" />
                </div>
                <div className="text-left">
                    <p className="text-xs font-bold text-gray-900 dark:text-white">
                        {uploading ? 'Uploading…' : 'Upload image from device'}
                    </p>
                    <p className="text-[10px] text-gray-400">JPG, PNG, WebP · up to 10 MB</p>
                </div>
            </button>

            {/* URL input */}
            <div>
                {urlLabel && (
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                        {urlLabel}
                    </label>
                )}
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-xs text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
                    placeholder="https://..."
                />
            </div>
        </div>
    );
}
