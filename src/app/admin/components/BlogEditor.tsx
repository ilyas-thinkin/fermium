'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BlogPost } from '@/app/blog/blogData';

interface BlogEditorProps {
  editingBlog?: BlogPost | null;
  onCancelEdit?: () => void;
}

export default function BlogEditor({ editingBlog, onCancelEdit }: BlogEditorProps) {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    author: 'Fermium Designs',
    excerpt: '',
    cardImage: null as File | null,
    coverImage: null as File | null,
    contentFile: null as File | null,
    contentType: 'manual' as 'file' | 'manual',
    manualContent: '',
    manualSEO: false,
    metaTitle: '',
    metaDescription: '',
    focusKeyword: '',
    keywords: '',
  });

  const [previews, setPreviews] = useState({
    cardImage: '',
    coverImage: '',
  });

  const [contentImages, setContentImages] = useState<Array<{ file: File; preview: string; id: string }>>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showHeadingMenu, setShowHeadingMenu] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkText, setLinkText] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const editorRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const savedSelectionRef = useRef<Range | null>(null);

  useEffect(() => {
    if (editingBlog) {
      setFormData({
        title: editingBlog.title,
        slug: editingBlog.slug,
        category: editingBlog.category,
        author: editingBlog.author,
        excerpt: editingBlog.excerpt,
        cardImage: null,
        coverImage: null,
        contentFile: null,
        contentType: 'manual',
        manualContent: '',
        manualSEO: false,
        metaTitle: '',
        metaDescription: '',
        focusKeyword: '',
        keywords: '',
      });
      setPreviews({
        cardImage: editingBlog.image,
        coverImage: editingBlog.coverImage || '',
      });

      fetch(`/api/admin/blogs/${editingBlog.slug}`)
        .then(res => res.json())
        .then(data => {
          if (data.blog && data.blog.contentFile) {
            const content = extractContentFromComponent(data.blog.contentFile);
            setFormData(prev => ({ ...prev, manualContent: content }));
          }
        });
    }
  }, [editingBlog]);

  const extractContentFromComponent = (componentStr: string): string => {
    let content = componentStr;
    content = content.replace(/import.*?;\n/g, '');
    content = content.replace(/export default function.*?\(\)\s*\{/g, '');
    content = content.replace(/return\s*\(/g, '');
    content = content.replace(/<>|<\/>/g, '');
    content = content.replace(/\s*\}\s*$/g, '');
    content = content.replace(/<div className="blog-content-wrapper">/g, '');
    content = content.replace(/<div className="cta-box">[\s\S]*?<\/div>/g, '');
    content = content.replace(/<div className="key-takeaways">[\s\S]*?<\/div>/g, '');
    content = content.replace(/style=\{\{([^}]+)\}\}/g, (match, styleObj) => {
      let styleStr = styleObj.replace(/'/g, '');
      styleStr = styleStr.replace(/,\s*(?=[a-zA-Z]+\s*:)/g, '; ');
      styleStr = styleStr.replace(/:\s+/g, ': ').trim();
      return `style="${styleStr}"`;
    });
    content = content.replace(/<\/div>\s*\)\s*;?\s*$/g, '');
    content = content.replace(/^\s+/gm, '');
    content = content.replace(/\n{3,}/g, '\n\n');
    content = content.trim();
    return content;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, [fieldName]: file }));
    if (file && (fieldName === 'cardImage' || fieldName === 'coverImage')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews(prev => ({ ...prev, [fieldName]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleEditorPaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const clipboardData = e.clipboardData;
    const items = clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        e.preventDefault();
        const file = items[i].getAsFile();
        if (file) addImageToEditor(file);
        return;
      }
    }

    const htmlContent = clipboardData.getData('text/html');
    if (htmlContent && htmlContent.length > 0) {
      e.preventDefault();
      let cleanHtml = htmlContent;
      cleanHtml = cleanHtml.replace(/<p[^>]*class="?MsoTitle"?[^>]*>([\s\S]*?)<\/p>/gi, '<h1>$1</h1>');
      cleanHtml = cleanHtml.replace(/<p[^>]*mso-outline-level:\s*1[^>]*>([\s\S]*?)<\/p>/gi, '<h1>$1</h1>');
      cleanHtml = cleanHtml.replace(/<p[^>]*class="?MsoHeading1"?[^>]*>([\s\S]*?)<\/p>/gi, '<h1>$1</h1>');
      cleanHtml = cleanHtml.replace(/<p[^>]*class="?MsoHeading2"?[^>]*>([\s\S]*?)<\/p>/gi, '<h2>$1</h2>');
      cleanHtml = cleanHtml.replace(/<p[^>]*class="?MsoHeading3"?[^>]*>([\s\S]*?)<\/p>/gi, '<h3>$1</h3>');
      cleanHtml = cleanHtml.replace(/<p[^>]*mso-outline-level:\s*2[^>]*>([\s\S]*?)<\/p>/gi, '<h2>$1</h2>');
      cleanHtml = cleanHtml.replace(/<p[^>]*mso-outline-level:\s*3[^>]*>([\s\S]*?)<\/p>/gi, '<h3>$1</h3>');
      cleanHtml = cleanHtml.replace(/<p[^>]*>(\s*<[^>]*>)*\s*(\d+\.)\s*(<b>|<strong>)([\s\S]*?)(<\/b>|<\/strong>)([\s\S]*?)<\/p>/gi,
        (match, prefix, num, boldOpen, content, boldClose, suffix) => {
          const text = `${num} ${content}${suffix}`.replace(/<[^>]+>/g, '').trim();
          return `<h2>${text}</h2>`;
        });
      cleanHtml = cleanHtml.replace(/<o:p[^>]*>[\s\S]*?<\/o:p>/gi, '');
      cleanHtml = cleanHtml.replace(/<w:[^>]*>[\s\S]*?<\/w:[^>]*>/gi, '');
      cleanHtml = cleanHtml.replace(/<!--[\s\S]*?-->/g, '');
      cleanHtml = cleanHtml.replace(/<style[\s\S]*?<\/style>/gi, '');
      cleanHtml = cleanHtml.replace(/<xml[\s\S]*?<\/xml>/gi, '');
      cleanHtml = cleanHtml.replace(/<p[^>]*mso-list[^>]*>([\s\S]*?)<\/p>/gi, '<li>$1</li>');
      cleanHtml = cleanHtml.replace(/<p[^>]*class="?MsoListParagraph"?[^>]*>([\s\S]*?)<\/p>/gi, '<li>$1</li>');
      cleanHtml = cleanHtml.replace(/(<li>[\s\S]*?<\/li>)+/gi, (match) => `<ul>${match}</ul>`);
      cleanHtml = cleanHtml.replace(/\s+class="[^"]*"/gi, '');
      cleanHtml = cleanHtml.replace(/\s+style="[^"]*"/gi, '');
      cleanHtml = cleanHtml.replace(/\s+lang="[^"]*"/gi, '');
      cleanHtml = cleanHtml.replace(/<p[^>]*>\s*<\/p>/gi, '');
      cleanHtml = cleanHtml.replace(/<span[^>]*>\s*<\/span>/gi, '');
      cleanHtml = cleanHtml.replace(/<span[^>]*>/gi, '');
      cleanHtml = cleanHtml.replace(/<\/span>/gi, '');
      cleanHtml = cleanHtml.replace(/<b[^>]*>/gi, '<strong>');
      cleanHtml = cleanHtml.replace(/<\/b>/gi, '</strong>');
      cleanHtml = cleanHtml.replace(/<i[^>]*>/gi, '<em>');
      cleanHtml = cleanHtml.replace(/<\/i>/gi, '</em>');
      cleanHtml = cleanHtml.replace(/<img[^>]*>/gi, '');
      cleanHtml = cleanHtml.replace(/<(p|h[1-6]|ul|ol|li|strong|em|a|div|br)[^>]*>/gi, '<$1>');
      cleanHtml = cleanHtml.replace(/<li>\s*[·•]\s*/gi, '<li>');
      cleanHtml = cleanHtml.replace(/<li>\s*\d+\.\s*/gi, '<li>');
      cleanHtml = cleanHtml.replace(/(&nbsp;)+/g, ' ');
      cleanHtml = cleanHtml.replace(/\s+/g, ' ');
      cleanHtml = cleanHtml.replace(/<(\w+)>\s*<\/\1>/gi, '');
      cleanHtml = cleanHtml.replace(/<\/ul>\s*<ul>/gi, '');
      document.execCommand('insertHTML', false, cleanHtml);
      syncEditorToState();
    }
  };

  const addImageToEditor = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageId = `img_${Date.now()}`;
      setContentImages(prev => [...prev, { file, preview: reader.result as string, id: imageId }]);
      const imagePlaceholder = `<p>[IMAGE: ${imageId}]</p>`;
      document.execCommand('insertHTML', false, imagePlaceholder);
      syncEditorToState();
    };
    reader.readAsDataURL(file);
  };

  const handleContentImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    addImageToEditor(files[0]);
    e.target.value = '';
  };

  const removeContentImage = (id: string) => {
    setContentImages(prev => prev.filter(img => img.id !== id));
    if (editorRef.current) {
      editorRef.current.innerHTML = editorRef.current.innerHTML.replace(
        new RegExp(`<p>\\[IMAGE: ${id}\\]</p>|\\[IMAGE: ${id}\\]`, 'g'),
        ''
      );
      syncEditorToState();
    }
  };

  const saveSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      savedSelectionRef.current = selection.getRangeAt(0).cloneRange();
    }
  };

  const restoreSelection = () => {
    if (savedSelectionRef.current) {
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(savedSelectionRef.current);
      }
    }
  };

  const execFormat = (command: string, value?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
    syncEditorToState();
  };

  const formatBold = () => execFormat('bold');
  const formatItalic = () => execFormat('italic');
  const formatHeading = (level: number) => {
    execFormat('formatBlock', `h${level}`);
    setShowHeadingMenu(false);
  };
  const formatBulletList = () => execFormat('insertUnorderedList');
  const formatNumberedList = () => execFormat('insertOrderedList');
  const formatQuote = () => execFormat('formatBlock', 'blockquote');

  const openLinkModal = () => {
    saveSelection();
    const selection = window.getSelection();
    if (selection) setLinkText(selection.toString());
    setLinkUrl('');
    setShowLinkModal(true);
  };

  const insertLink = () => {
    restoreSelection();
    const url = linkUrl || '/';
    const text = linkText || 'link';
    if (window.getSelection()?.toString()) {
      execFormat('createLink', url);
    } else {
      const linkHtml = `<a href="${url}">${text}</a>`;
      execFormat('insertHTML', linkHtml);
    }
    setShowLinkModal(false);
    setLinkText('');
    setLinkUrl('');
  };

  const syncEditorToState = () => {
    const editor = editorRef.current;
    if (!editor) return;
    setFormData(prev => ({ ...prev, manualContent: editor.innerHTML }));
  };

  const handleEditorInput = () => {
    syncEditorToState();
  };

  const getCleanContent = (): string => {
    const editor = editorRef.current;
    if (!editor) return formData.manualContent;
    let html = editor.innerHTML;

    html = html.replace(/<h1[^>]*>(.*?)<\/h1>/gi, (_, content) => {
      const text = content.replace(/<[^>]+>/g, '').trim();
      return text ? `\n## ${text}\n` : '';
    });
    html = html.replace(/<h2[^>]*>(.*?)<\/h2>/gi, (_, content) => {
      const text = content.replace(/<[^>]+>/g, '').trim();
      return text ? `\n## ${text}\n` : '';
    });
    html = html.replace(/<h3[^>]*>(.*?)<\/h3>/gi, (_, content) => {
      const text = content.replace(/<[^>]+>/g, '').trim();
      return text ? `\n### ${text}\n` : '';
    });
    html = html.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
    html = html.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**');
    html = html.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*');
    html = html.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*');
    html = html.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi, '[$2]($1)');
    html = html.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_match: string, content: string) => {
      const items = content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_m: string, item: string) => {
        const cleanItem = item.replace(/<[^>]+>/g, '').trim();
        return cleanItem ? `- ${cleanItem}\n` : '';
      });
      return `\n${items}`;
    });
    html = html.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_match: string, content: string) => {
      let i = 0;
      const items = content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_m: string, item: string) => {
        const cleanItem = item.replace(/<[^>]+>/g, '').trim();
        return cleanItem ? `${++i}. ${cleanItem}\n` : '';
      });
      return `\n${items}`;
    });
    html = html.replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, '\n> $1\n');
    html = html.replace(/<\/p>/gi, '\n\n');
    html = html.replace(/<p[^>]*>/gi, '');
    html = html.replace(/<br\s*\/?>/gi, '\n');
    html = html.replace(/<div[^>]*>/gi, '\n');
    html = html.replace(/<\/div>/gi, '');
    html = html.replace(/<[^>]+>/g, '');
    html = html.replace(/&nbsp;/g, ' ');
    html = html.replace(/&amp;/g, '&');
    html = html.replace(/&lt;/g, '<');
    html = html.replace(/&gt;/g, '>');
    html = html.replace(/&quot;/g, '"');
    html = html.replace(/^#{2,6}\s*$/gm, '');
    html = html.replace(/\n{3,}/g, '\n\n');
    html = html.trim();
    return html;
  };

  useEffect(() => {
    if (editorRef.current && formData.manualContent && !editorRef.current.innerHTML) {
      let content = formData.manualContent;
      if (content.includes('##') || content.includes('**')) {
        content = content.replace(/^# (.+)$/gm, '<h1>$1</h1>');
        content = content.replace(/^## (.+)$/gm, '<h2>$1</h2>');
        content = content.replace(/^### (.+)$/gm, '<h3>$1</h3>');
        content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        content = content.replace(/\*(.+?)\*/g, '<em>$1</em>');
        content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
        content = content.replace(/^- (.+)$/gm, '<li>$1</li>');
        content = content.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
        content = content.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
        content = content.replace(/\n\n/g, '</p><p>');
        content = '<p>' + content + '</p>';
        content = content.replace(/<p><(h[1-3]|ul|ol|blockquote)/g, '<$1');
        content = content.replace(/<\/(h[1-3]|ul|ol|blockquote)><\/p>/g, '</$1>');
      }
      editorRef.current.innerHTML = content;
    }
  }, [formData.manualContent]);

  const triggerImageUpload = () => {
    document.getElementById('contentImages')?.click();
  };

  const triggerCoverUpload = () => {
    document.getElementById('coverImage')?.click();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, title: value }));
    if (titleRef.current) {
      titleRef.current.style.height = 'auto';
      titleRef.current.style.height = titleRef.current.scrollHeight + 'px';
    }
    if (!editingBlog) {
      setFormData(prev => ({ ...prev, slug: generateSlug(value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();

      if (editingBlog) {
        data.append('originalSlug', editingBlog.slug);
        data.append('isEditing', 'true');
      }

      const contentToSend = editingBlog
        ? (editorRef.current?.innerHTML || formData.manualContent)
        : getCleanContent();

      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && typeof value !== 'object') {
          if (key === 'manualContent') {
            data.append(key, contentToSend);
          } else {
            data.append(key, value.toString());
          }
        }
      });

      if (formData.cardImage) data.append('cardImage', formData.cardImage);
      if (formData.coverImage) data.append('coverImage', formData.coverImage);
      if (formData.contentFile) data.append('contentFile', formData.contentFile);

      if (editingBlog && !formData.cardImage) {
        data.append('existingCardImage', editingBlog.image);
      }
      if (editingBlog && !formData.coverImage && editingBlog.coverImage) {
        data.append('existingCoverImage', editingBlog.coverImage);
      }

      contentImages.forEach((img, index) => {
        data.append(`contentImage_${index}`, img.file);
      });

      const endpoint = editingBlog ? '/api/admin/update-blog' : '/api/admin/create-blog';
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        alert(editingBlog ? 'Blog post updated successfully! Netlify will deploy in ~1–2 minutes.' : 'Blog post created successfully! Netlify will deploy in ~1–2 minutes.');

        setFormData({
          title: '',
          slug: '',
          category: '',
          author: 'Fermium Designs',
          excerpt: '',
          cardImage: null,
          coverImage: null,
          contentFile: null,
          contentType: 'manual',
          manualContent: '',
          manualSEO: false,
          metaTitle: '',
          metaDescription: '',
          focusKeyword: '',
          keywords: '',
        });
        setPreviews({ cardImage: '', coverImage: '' });
        setContentImages([]);

        if (editorRef.current) {
          editorRef.current.innerHTML = '';
        }

        if (onCancelEdit) onCancelEdit();
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog post');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="linkedin-editor">
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <div className="editor-header">
          <div className="editor-header-left">
            <span className="editor-brand">Fermium Designs</span>
            <span className="editor-type">Article</span>
          </div>
          <div className="editor-header-right">
            <button type="button" className="settings-btn" onClick={() => setShowSettings(!showSettings)}>
              Settings
            </button>
            {editingBlog && onCancelEdit && (
              <button type="button" onClick={onCancelEdit} className="cancel-btn-header" disabled={isSubmitting}>
                Cancel
              </button>
            )}
            <button type="submit" disabled={isSubmitting} className="publish-btn">
              {isSubmitting ? 'Publishing...' : (editingBlog ? 'Update' : 'Publish')}
            </button>
          </div>
        </div>

        {/* Toolbar */}
        {formData.contentType === 'manual' && (
          <div className="top-toolbar">
            <button type="button" onClick={formatBold} className="toolbar-btn" title="Bold">
              <strong>B</strong>
            </button>
            <button type="button" onClick={formatItalic} className="toolbar-btn" title="Italic">
              <em>I</em>
            </button>
            <div className="toolbar-divider"></div>
            <div className="toolbar-dropdown">
              <button
                type="button"
                onClick={() => setShowHeadingMenu(!showHeadingMenu)}
                className="toolbar-btn toolbar-dropdown-btn"
                title="Heading"
              >
                <span>H</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {showHeadingMenu && (
                <div className="toolbar-dropdown-menu">
                  <button type="button" onClick={() => formatHeading(1)} className="dropdown-item heading-h1">
                    <span className="heading-preview-h1">H1</span> Main Title
                  </button>
                  <button type="button" onClick={() => formatHeading(2)} className="dropdown-item heading-h2">
                    <span className="heading-preview-h2">H2</span> Section
                  </button>
                  <button type="button" onClick={() => formatHeading(3)} className="dropdown-item heading-h3">
                    <span className="heading-preview-h3">H3</span> Subsection
                  </button>
                </div>
              )}
            </div>
            <div className="toolbar-divider"></div>
            <button type="button" onClick={formatBulletList} className="toolbar-btn" title="Bullet List">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="4" cy="6" r="2"/>
                <circle cx="4" cy="12" r="2"/>
                <circle cx="4" cy="18" r="2"/>
                <rect x="9" y="5" width="12" height="2"/>
                <rect x="9" y="11" width="12" height="2"/>
                <rect x="9" y="17" width="12" height="2"/>
              </svg>
            </button>
            <button type="button" onClick={formatNumberedList} className="toolbar-btn" title="Numbered List">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <text x="1" y="8" fontSize="8" fontWeight="bold">1.</text>
                <text x="1" y="14" fontSize="8" fontWeight="bold">2.</text>
                <text x="1" y="20" fontSize="8" fontWeight="bold">3.</text>
                <rect x="9" y="5" width="12" height="2"/>
                <rect x="9" y="11" width="12" height="2"/>
                <rect x="9" y="17" width="12" height="2"/>
              </svg>
            </button>
            <div className="toolbar-divider"></div>
            <button type="button" onClick={formatQuote} className="toolbar-btn" title="Quote">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </button>
            <button type="button" onClick={openLinkModal} className="toolbar-btn" title="Insert Link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </button>
            <button type="button" onClick={triggerImageUpload} className="toolbar-btn" title="Insert Image">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </button>
          </div>
        )}

        {/* Link Modal */}
        {showLinkModal && (
          <div className="link-modal-overlay" onClick={() => setShowLinkModal(false)}>
            <div className="link-modal" onClick={(e) => e.stopPropagation()}>
              <h3>Insert Link</h3>
              <div className="link-modal-field">
                <label>Link Text</label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="Text to display"
                  autoFocus
                />
              </div>
              <div className="link-modal-field">
                <label>URL</label>
                <input
                  type="text"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://example.com or /contact"
                />
                <span className="link-hint">Use /page for internal links, https:// for external</span>
              </div>
              <div className="link-modal-actions">
                <button type="button" onClick={() => setShowLinkModal(false)} className="link-cancel-btn">Cancel</button>
                <button type="button" onClick={insertLink} className="link-insert-btn">Insert Link</button>
              </div>
            </div>
          </div>
        )}

        {/* Settings Panel */}
        {showSettings && (
          <div className="settings-panel">
            <div className="settings-grid">
              <div className="settings-group">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="e.g., Interior Fit-Out"
                />
              </div>
              <div className="settings-group">
                <label>Author</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                />
              </div>
              <div className="settings-group">
                <label>URL Slug</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  placeholder="blog-url-slug"
                />
              </div>
              <div className="settings-group full-width">
                <label>Excerpt (Summary for blog list)</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="Brief description shown on blog cards"
                />
              </div>
              <div className="settings-group">
                <label>Card Image (for blog list)</label>
                <input
                  type="file"
                  id="cardImage"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'cardImage')}
                  style={{ display: 'none' }}
                />
                <button type="button" className="upload-btn-small" onClick={() => document.getElementById('cardImage')?.click()}>
                  {formData.cardImage ? formData.cardImage.name : 'Choose Card Image'}
                </button>
                {previews.cardImage && (
                  <div className="small-preview">
                    <img src={previews.cardImage} alt="Card preview" />
                  </div>
                )}
              </div>
              <div className="settings-group">
                <label className="checkbox-inline">
                  <input
                    type="checkbox"
                    name="manualSEO"
                    checked={formData.manualSEO}
                    onChange={handleInputChange}
                  />
                  Custom SEO Settings
                </label>
              </div>
              {formData.manualSEO && (
                <>
                  <div className="settings-group full-width">
                    <label>Meta Title</label>
                    <input
                      type="text"
                      name="metaTitle"
                      value={formData.metaTitle}
                      onChange={handleInputChange}
                      maxLength={60}
                      placeholder="SEO title for search results"
                    />
                  </div>
                  <div className="settings-group full-width">
                    <label>Meta Description</label>
                    <textarea
                      name="metaDescription"
                      value={formData.metaDescription}
                      onChange={handleInputChange}
                      maxLength={160}
                      rows={2}
                      placeholder="SEO description for search snippets"
                    />
                  </div>
                  <div className="settings-group">
                    <label>Focus Keyword</label>
                    <input
                      type="text"
                      name="focusKeyword"
                      value={formData.focusKeyword}
                      onChange={handleInputChange}
                      placeholder="Main keyword"
                    />
                  </div>
                  <div className="settings-group">
                    <label>Keywords (comma separated)</label>
                    <input
                      type="text"
                      name="keywords"
                      value={formData.keywords}
                      onChange={handleInputChange}
                      placeholder="keyword1, keyword2"
                    />
                  </div>
                </>
              )}
              <div className="settings-group full-width">
                <label className="checkbox-inline">
                  <input
                    type="checkbox"
                    checked={formData.contentType === 'file'}
                    onChange={(e) => setFormData(prev => ({ ...prev, contentType: e.target.checked ? 'file' : 'manual' }))}
                  />
                  Upload Document (PDF/DOCX) instead of writing manually
                </label>
                {formData.contentType === 'file' && (
                  <div className="file-upload-inline">
                    <input
                      type="file"
                      id="contentFile"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, 'contentFile')}
                      style={{ display: 'none' }}
                    />
                    <button type="button" className="upload-btn-small" onClick={() => document.getElementById('contentFile')?.click()}>
                      {formData.contentFile ? formData.contentFile.name : 'Choose Content File'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Main Editor */}
        <div className="editor-main">
          {/* Cover Image */}
          <div
            className={`cover-upload-area ${previews.coverImage ? 'has-image' : ''}`}
            onClick={triggerCoverUpload}
          >
            {previews.coverImage ? (
              <div className="cover-preview">
                <img src={previews.coverImage} alt="Cover" />
                <div className="cover-overlay">
                  <span>Click to change cover image</span>
                </div>
              </div>
            ) : (
              <div className="cover-placeholder">
                <div className="cover-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <p className="cover-text">Add a cover image to your article</p>
                <button type="button" className="cover-btn">Upload from computer</button>
              </div>
            )}
            <input
              type="file"
              id="coverImage"
              accept="image/*"
              onChange={(e) => handleFileChange(e, 'coverImage')}
              style={{ display: 'none' }}
            />
          </div>

          {/* Title */}
          <div className="title-area">
            <textarea
              ref={titleRef}
              className="title-input"
              placeholder="Title"
              value={formData.title}
              onChange={handleTitleChange}
              rows={1}
            />
          </div>

          {/* Content */}
          {formData.contentType === 'manual' && (
            <div className="content-area">
              <div
                ref={editorRef}
                className="content-input visual-editor"
                contentEditable
                onInput={handleEditorInput}
                onPaste={handleEditorPaste}
                data-placeholder="Write here or paste content from Word..."
                suppressContentEditableWarning
              />
              <input
                type="file"
                id="contentImages"
                accept="image/*"
                onChange={handleContentImageChange}
                style={{ display: 'none' }}
              />
              {contentImages.length > 0 && (
                <div className="uploaded-images-section">
                  <p className="uploaded-images-label">Uploaded Images:</p>
                  <div className="uploaded-images-grid">
                    {contentImages.map((img) => (
                      <div key={img.id} className="uploaded-image-item">
                        <img src={img.preview} alt="Uploaded" />
                        <div className="uploaded-image-info">
                          <span className="uploaded-image-id">{img.id}</span>
                          <button type="button" onClick={() => removeContentImage(img.id)} className="uploaded-image-remove">
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {formData.contentType === 'file' && (
            <div className="file-upload-notice">
              <p>Content will be extracted from the uploaded document.</p>
              <p>Go to <strong>Settings</strong> above to select your PDF or DOCX file.</p>
            </div>
          )}
        </div>

        <div className="draft-indicator">
          <span className="draft-dot"></span>
          Draft
        </div>
      </form>
    </div>
  );
}
