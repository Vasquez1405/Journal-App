import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { NoteView } from '../views/NoteView'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tempora tenetur quisquam, ipsa magnam architecto velit inventore id beatae dolores iure sunt omnis cupiditate quibusdam recusandae impedit dicta voluptas quasi.</Typography> */}

            <NothingSelectedView />

            {/* <NoteView /> */}

            <IconButton size='large' sx={{ color: 'white', backgroundColor: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: 0.9 }, position: 'fixed', right: 50, bottom: 50 }}>
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout >
    )
}
