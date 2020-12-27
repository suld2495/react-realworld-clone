import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BoardWrite from '../pages/BoardWrite';
import { updateBoard, editBoardField, boardLoad } from '../modules/board';

const BoardWriteContainer = ({ article, updateBoard, editBoardField, boardLoad }) => {
    useEffect(() => {
        boardLoad();
    }, []);
        
    return (
        <BoardWrite 
            article={article} 
            updateBoard={updateBoard} 
            editBoardField={editBoardField}
        />
    )
};

export default connect(
    state => ({
        article: state.board.article
    }),
    {
        updateBoard,
        editBoardField,
        boardLoad
    }
)(BoardWriteContainer);