import React from 'react';
import styled from 'styled-components';

const BoardWriteStyled = styled.div`
    width: 920px;
    margin: 0 auto;
    margin-top: 50px;
    input, textarea {
        width: 100%;
        margin-bottom: 20px;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 3px;
        padding: 10px;
        box-sizing: border-box;
    }
    input {
        height: 35px;
    }
    textarea {
        height: 200px;
    }
    button {
        padding: 12px 30px;
        background-color: #5cb85c;
        color: #fff;
        border: none;
        border-radius: 5px;
        float: right;
        cursor: pointer;
    }
`;

const message = {
    title: '제목을 입력해 주세요.',
    desc: '설명을 입력해 주세요.',
    content: '내용을 입력해 주세요.',
    tag: '태그를 입력해 주세요',
}

const BoardWrite = ({ article, updateBoard, editBoardField }) => {
    const updateField = key => e => {
        editBoardField(key, e.target.value);
    };
    const changeTitle = updateField('title');
    const changeDesc = updateField('desc');
    const changeContent = updateField('content');
    const changeTag = updateField('tag');
    const onSubmit = (e) => {
        e.preventDefault();

        for (const key in article) {
            if (article[key] === 'title' || article[key] === 'desc' || article[key] === 'content' ) {
                alert(message[key]);
                return false;
            }
        }

        updateBoard({ ...article });
    }

    return (
        <BoardWriteStyled>
            <form onSubmit={onSubmit}>
                <input value={article.title} onChange={changeTitle} placeholder="제목을 입력하세요"/>
                <input value={article.desc} onChange={changeDesc} placeholder="내용에 대해서 간단하게 설명해주세요"/>
                <textarea  value={article.content} onChange={changeContent} placeholder="내용을 입력해 주세요"/>
                <input  value={article.tag} onChange={changeTag} placeholder="태그를 입력해 주세요"/>
                <button>등록하기</button>
            </form>
        </BoardWriteStyled>
    )
};

export default BoardWrite;