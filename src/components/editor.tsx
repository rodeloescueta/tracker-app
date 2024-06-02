"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

// Our <Editor> component we can reuse later
export default function Editor({ ...params }) {
  // Creates a new editor instance.
  // Stores the document JSON.
  // Stores the editor's contents as HTML.
  const [html, setHTML] = useState<string>("");
  const editor = useCreateBlockNote();

  const htmlInputChanged = useCallback(
    async (e: ChangeEvent<HTMLTextAreaElement>) => {
      // Whenever the current HTML content changes, converts it to an array of
      // Block objects and replaces the editor's content with them.
      const blocks = await editor.tryParseHTMLToBlocks(e.target.value);
      editor.replaceBlocks(editor.document, blocks);
    },
    [editor]
  );

  const onChange = async () => {
    // Converts the editor's contents from Block objects to HTML and store to state.
    const html = await editor.blocksToHTMLLossy(editor.document);
    params.setArticleContent(html);
  };

  // For initialization; on mount, convert the initial HTML to blocks and replace the default editor's content
  useEffect(() => {
    async function loadInitialHTML() {
      const blocks = await editor.tryParseHTMLToBlocks(params.content);
      editor.replaceBlocks(editor.document, blocks);
    }
    loadInitialHTML();
  }, [editor]);

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      editor={editor}
      onChange={onChange}
      className="!bg-gray-500 "
    />
  );
}
