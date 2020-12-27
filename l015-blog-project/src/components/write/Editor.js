import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import spacing from '../../lib/styles/spacing';
import Responsive from '../common/Responsive';

const EditorBlock = styled(Responsive)`
  ${(props) =>
    props.spacing &&
    css`
      ${spacing(props.spacing)}
    `}
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  width: 100%;

  ${(props) =>
    props.spacing &&
    css`
      ${spacing(props.spacing)}
    `}
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const Editor = ({ title, body, onChangeField }) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: 'Create amazing...',
      modules: {
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });

    const quill = quillInstance.current;

    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'body', value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  return (
    <EditorBlock spacing="p-y-10">
      <TitleInput
        onChange={onChangeTitle}
        value={title}
        placeholder="Input subject"
        spacing="p-b-3 m-b-5"
      />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
