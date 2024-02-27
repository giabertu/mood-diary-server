const sb = require('./supabaseClient')

async function postDiaryEntry(req, res){
  console.log('here is the file ', req.file);
  console.log("here is the body ", req.body);

  const fileBuffer = req.file.buffer; 
  const filePath = `${req.body.npub}/${Date.now()}*${new Date().toLocaleDateString().replace(/\//g, '_')}.wav`;

  const { data, error } = await sb.storage.from('audio-files').upload(filePath, fileBuffer, {
    contentType: 'audio/wav', // Set the appropriate content type
  });

  if (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Failed to upload file.' });
  } else {
    console.log(data);
    res.json({ status: 'success', message: 'File uploaded successfully.' });
  }
}

module.exports =  {
  postDiaryEntry
}
