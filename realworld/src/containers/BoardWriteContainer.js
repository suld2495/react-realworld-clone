import React from 'react';
import { connect } from 'react-redux';
import BoardWrite from '../pages/BoardWrite';
import { updateBoard, editBoardField } from '../modules/board';

const BoardWriteContainer = ({ article, updateBoard, editBoardField }) => {
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
        editBoardField
    }
)(BoardWriteContainer);