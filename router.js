const express = require('express')

const router = express.Router()
const diaryEntryController = require('./diaryEntryController')
const multer = require('multer')
const upload = multer({})

router.post('/diary-entry', upload.single("audio"), diaryEntryController.postDiaryEntry)




module.exports = router