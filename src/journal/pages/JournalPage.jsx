import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { NoteView } from '../views/NoteView'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'

export const JournalPage = () => {

    const { isSaving, active } = useSelector(state => state.journal)

    const dispatch = useDispatch()

    const onClickNewNote = () => {
        dispatch(startNewNote())
    }

    return (
        <JournalLayout>
            {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tempora tenetur quisquam, ipsa magnam architecto velit inventore id beatae dolores iure sunt omnis cupiditate quibusdam recusandae impedit dicta voluptas quasi.</Typography> */}

            {
                (!!active)
                    ? <NoteView />
                    : <NothingSelectedView />
            }

            <IconButton disabled={isSaving} onClick={onClickNewNote} size='large' sx={{ color: 'white', backgroundColor: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: 0.9 }, position: 'fixed', right: 50, bottom: 50 }}>
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout >
    )
}
