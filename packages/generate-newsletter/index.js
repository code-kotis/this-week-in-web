const fs = require('fs');
const htmlCreator = require('html-creator');
const { prompt } = require('enquirer');
const { extractSheets } = require('spreadsheet-to-json');

const { getRandomColor, colorLuminance } = require('./utils');
const credentials = require('./credentials.json');

require('dotenv').load(); // Load .env and put it into process.env

const spreadsheetKey = process.env.SHEET_URL;

const askQuestions = async () => {
	const userResponse = await prompt([
		{
			type: 'input',
			name: 'issue',
			message: 'Issue no ?'
		},
		{
			type: 'autocomplete',
			name: 'month',
			message: `Select the newsletter's month`,
			suggest(input, choices) {
				return choices.filter(choice => choice.message.startsWith(input));
			},
			choices: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		},
		{
			type: 'input',
			name: 'date',
			message: 'Date ?'
		}
	]);

	return userResponse;
};

askQuestions().then(userResponse => {
	console.log('\n Generating pls wait... \n ');

	extractSheets({ spreadsheetKey, credentials }, (err, data) => {
		if (err) {
			console.log('ERROR: ', err);
		}

		// Newsletter Sections
		let whatsNew = '';
		let browserUpdates = '';
		let ide = '';
		let articles = '';

		Object.values(data)[0].forEach(newsletterData => {
			if (!newsletterData.TAGS) newsletterData.TAGS = '<------- tag missing -------->';
			var content = new htmlCreator([
				{
					type: 'div',
					attributes: {
						class: 'table__container'
					},
					content: [
						{
							type: 'div',
							attributes: {
								class: 'table__content'
							},
							content: [
								{
									type: 'a',
									content: newsletterData.TITLE,
									attributes: {
										href: newsletterData.LINK,
										target: '_blank'
									}
								},
								{
									type: 'p',
									content: newsletterData.DESCRIPTION,
									attributes: {}
								},
								...newsletterData.TAGS.split(', ').map(tag => {
									return {
										type: 'span',
										content: `${tag}`,
										attributes: {
											class: `tag ${tag}`
										}
									};
								})
							]
						}
					]
				}
			]);

			if (newsletterData.SECTION === 'whats new') {
				whatsNew += content.renderHTML();
			} else if (newsletterData.SECTION === 'browser updates') {
				browserUpdates += content.renderHTML();
			} else if (newsletterData.SECTION === 'ide') {
				ide += content.renderHTML();
			} else if (newsletterData.SECTION === 'articles') {
				articles += content.renderHTML();
			}
		});

		const bannerBGColor = getRandomColor();
		const bannerBottomBGColor = colorLuminance(bannerBGColor.hex, -0.2); // adjust 2 argument in colorLuminance for darker color (- for darker, + for lighter)

		const html = new htmlCreator([
			{
				type: 'center',
				content: [
					{
						type: 'table',
						attributes: {
							align: 'center',
							border: '0',
							cellspacing: '0',
							width: '100%',
							height: '100%',
							cellpadding: '0',
							class: 'table'
						},
						content: [
							{
								type: 'tbody',
								content: [
									{
										type: 'tr',
										content: [
											{
												type: 'td',
												content: [
													{
														type: 'div',
														attributes: {
															class: 'table__banner',
															style: `background: ${bannerBGColor.hex}`
														},
														content: [
															{
																type: 'h2',
																content: 'PWA Tips Monthly Newsletter'
															},
															{
																type: 'div',
																attributes: {
																	class: 'table__banner-bottom',
																	style: `background: ${bannerBottomBGColor}`
																},
																content: [
																	{
																		type: 'center', // Issue & date
																		content: `Issue #${userResponse.issue} <span> | </span> ${userResponse.month} ${
																			userResponse.date
																		}, ${new Date().getFullYear()}`
																	}
																]
															}
														]
													}
												]
											}
										]
									},
									{
										type: 'tr',
										content: [
											{
												type: 'td',
												content: `<h1>What's New?</h1>`
											}
										]
									},
									{
										type: 'tr',
										content: `<td>${whatsNew}</td>`
									},
									{
										type: 'tr',
										content: [
											{
												type: 'td',
												content: `<h1>Browser Updates</h1>`
											}
										]
									},
									{
										type: 'tr',
										content: `<td>${browserUpdates}</td>`
									},
									{
										type: 'tr',
										content: [
											{
												type: 'td',
												content: `<h1>IDE Updates</h1>`
											}
										]
									},
									{
										type: 'tr',
										content: `<td>${ide}</td>`
									},
									{
										type: 'tr',
										content: [
											{
												type: 'td',
												content: `<h1>Articles &amp; Tutorials</h1>`
											}
										]
									},
									{
										type: 'tr',
										content: `<td>${articles}</td>`
									}
								]
							}
						]
					}
				]
			}
		]);

		fs.writeFile('./template.html', html.renderHTML(), (err, done) => {
			if (err) console.log('Not able to generate template');
			else console.log(' Done 😬 \n');
		});
	});
});
