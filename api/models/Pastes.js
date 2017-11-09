module.exports = {
	attributes: {
		"short": {
			type: 'string',
			required: true,
			primaryKey: true,
			unique: true,
		},
		"path": {
			type: 'string',
			required: 'true',
		},
		"expirtation": {
			type: "datetime",
		}
	}
}
