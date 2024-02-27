const express = require('express')

const router = express.Router()
const diaryEntryController = require('./diaryEntryController')


router.post('/diary-entry', diaryEntryController.postDiaryEntry)