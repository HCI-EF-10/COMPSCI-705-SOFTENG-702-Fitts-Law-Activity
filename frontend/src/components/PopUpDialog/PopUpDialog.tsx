import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { useState } from 'react'

export const PopUpDialog = () => { 
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button
                variant="contained"
                sx={{
                fontSize: "1rem",
                paddingX: "2rem",
                borderRadius: "10rem",
                marginBottom: "1rem",
                }}
                onClick={() => setOpen(true)}
            >   CHECKOUT
            </Button>
            <Dialog open={open} onClose={ () => setOpen(false) } aria-labelledby='dialog-title' aria-describedby='dialog-description'>
                <DialogTitle id='dialog-title'> Your Results </DialogTitle>
                <DialogContent id='dialog-description'>
                    <DialogContentText> IDK what to put here </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}> Close </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}