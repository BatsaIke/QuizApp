

import React from 'react';
import { EditorState, Modifier, RichUtils } from 'draft-js';
import styles from './Toolbar.module.css';
import Button from '../botton/Button';

function Toolbar({ editorState, setEditorState }) {

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

   // Updated alignment functions
   const setAlignment = (alignment) => {
    const selection = editorState.getSelection();
    const currentContent = editorState.getCurrentContent();
    const contentWithAlignment = Modifier.mergeBlockData(currentContent, selection, { 'textAlignment': alignment });
    setEditorState(EditorState.push(editorState, contentWithAlignment, 'change-block-data'));
  };

  const onLeftAlignClick = () => {
    setAlignment('left');
  };

  const onCenterAlignClick = () => {
    setAlignment('center');
  
  };

  const onRightAlignClick = () => {
    setAlignment('right');
  };

  const onFontSizeChange = (fontSize) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, `FONT_SIZE_${fontSize}`));
  };

  const onFontTypeChange = (fontType) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, `FONT_FAMILY_${fontType}`));
  };

  return (
    <div className={styles.toolbar}>
      {/* Implement buttons or icons for the toolbar functionalities */}
      <Button className={styles.buttonToolbar}  onClick={onBoldClick} label='Bold' />
        <Button className={styles.buttonToolbar}  onClick={onItalicClick} label='Italic'/>
        <Button className={styles.buttonToolbar}  onClick={onUnderlineClick}label='Underline'/>
        <Button className={styles.buttonToolbar}  onClick={onLeftAlignClick} label='Left Align'/>
        <Button className={styles.buttonToolbar}  onClick={onCenterAlignClick} label='Center Align'/>
        <Button className={styles.buttonToolbar}  onClick={onRightAlignClick} label='Right Align'/>
        <select className={styles.buttonToolbar}  onChange={(e) => onFontSizeChange(e.target.value)}>
          <option value="">Font Size</option>
          <option value="8">8px</option>
          <option value="12">12px</option>
          <option value="16">16px</option>
          <option value="20">20px</option>
        </select>
        <select className={styles.buttonToolbar}  onChange={(e) => onFontTypeChange(e.target.value)}>
          <option value="">Font Type</option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Verdana">Verdana</option>
        </select>
      {/* Add more Buttons for font type, size, align, bold, italic, underline */}
    </div>
  );
}

export default Toolbar;
