const uploadOptions = {
	key: process.env.AWS_KEY,
	secret: process.env.AWS_SECRET,
	bucket: process.env.BUCKET,
}
const adapter = require('skipper-better-s3')(options)
const receiver = adapter.receive("./s3/tmp/")
const Readable = require("stream").Readable

const write = (req, res) => {
	const text = req.param('text');
	const exp = req.param('expiraion')

	if (isValid(text)) {
		updateToS3(text)
			.then((s3path) => {
				return Pastes.create({
					short: '1234',
					path: s3path,
					expiration: ''
				}).exec((err, result) => {
					return res.json(result)
				})
			})
	} else {
		res.json({
			status: 'Empty'
		})
	}
}

const updateToS3 = (text) => {
	s = new Readable()
	s.push(text)
	s.push(null)
	receiver.write(file, () => {
		// Upload complete! You can find some interesting info on the stream's
		// `extra` property
		console.log(file.extra)
		res.send("")
	})
}

const isValid = (text) => (typeof text === 'undefined') || (text === "")

module.exports = {
	write
}
