const fs = require('fs-extra')
const path = require('path')
const htmlCreator = require('html-creator')
const { prompt } = require('enquirer')
const { extractSheets } = require('spreadsheet-to-json')
const argv = require('yargs').argv

const { getRandomColor, colorLuminance, getCurrentDate } = require('./utils')
const credentials = require('./credentials.json')

require('dotenv').load() // Load .env and put it into process.env

const spreadsheetKey = process.env.SHEET_URL
const outDir = argv.out || '.'

const askQuestions = async () => {
  const userResponse = await prompt([
    {
      type: 'input',
      name: 'issue',
      message: 'Issue no ?',
    },
    {
      type: 'autocomplete',
      name: 'month',
      message: `Select the newsletter's month`,
      suggest(input, choices) {
        return choices.filter(choice => choice.message.startsWith(input))
      },
      choices: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    },
    {
      type: 'input',
      name: 'date',
      message: 'Date ?',
      initial: getCurrentDate(),
    },
  ])

  return userResponse
}

askQuestions().then(userResponse => {
  console.log('\n Generating pls wait... \n ')

  extractSheets({ spreadsheetKey, credentials }, (err, data) => {
    if (err) {
      console.log('ERROR: ', err)
      return
    }
    let linksCollection = Object.values(data)[0].map(item => {
      return `
				<tr>
					<td>
						<div class="issue__content">
							<a href="${item.LINK}"><h3 class="issue__content-title">${item.TITLE}</h3></a>
							<p class="issue__content-desc">${item.DESCRIPTION}</p>
							<div class="issue__content-info"><a href="${item.LINK}">${item.LINK}</a> <span>${item.AUTHOR}</span></div>
						</div>
					</td>
				</tr>`
    })
    let links = linksCollection.join('')
    const html = `
<center>
	<table align="center" border="0" cellspacing="0" width="100%" height="100%" cellpadding="0">
	<tbody>${links}</tbody>
	</table>
</center>	
		`
    const currentYear = userResponse.date.split('-').shift()
    const month = userResponse.month.substring(0, 3).toLowerCase()
    const issueNo = userResponse.issue
    // @TODO: update the content title
    const markdown = `---
path: "/issues/${currentYear}/${month}/${issueNo}"
published: true
date: "${userResponse.date}"
title: "Issue #${issueNo}"
contentTitle: Run <code>copy(obj)</code> in the Chrome Dev Tools console to copy an object to your clipboard.
---		
${html}
		`

    const templateFile = path.resolve(outDir, currentYear, month, `${issueNo}.html`)
    const markdownFile = path.resolve(outDir, currentYear, month, `${issueNo}.md`)

    fs.outputFile(templateFile, html, (err, done) => {
      if (err) console.log('Not able to generate template')
      else console.log('✅ Generated template file \n')
    })

    fs.outputFile(markdownFile, markdown, (err, done) => {
      if (err) console.log('Not able to generate markdown')
      else console.log('✅ Generated markdown file \n')
    })
  })
})
