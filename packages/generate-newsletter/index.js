const fs = require('fs-extra')
const url = require('url')
const path = require('path')
const { prompt } = require('enquirer')
const { extractSheets } = require('spreadsheet-to-json')
const argv = require('yargs').argv

const { getCurrentDate } = require('./utils')
const credentials = fs.pathExistsSync(path.resolve(__dirname, 'credentials.json')) ? require('./credentials.json') : {}
require('dotenv').load() // Load .env and put it into process.env

const spreadsheetKey = process.env.SHEET_URL
const outDir = argv.out || '.'
const initialDate = getCurrentDate()

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
      initial: initialDate,
    },
  ])

  return userResponse
}

askQuestions().then(userResponse => {
  console.log('\n Generating pls wait... \n ')

  extractSheets({ spreadsheetKey, credentials, sheetsToExtract: ['latest'] }, (err, data) => {
    if (err) {
      console.log('ERROR: ', err)
      return
    }

    console.log('\n Received content :  \n ', JSON.stringify(data))
    const updatedData = Object.values(data)[0].map(item => {
      return {
        ...item,
        HOSTNAME: url.parse(item.LINK).hostname,
      }
    })

    let linksCollection = updatedData.map((item, index) => {
      return `
				<tr>
					<td>
            <div class="issue__content">
              <a href="${item.LINK}" target="_blank" rel="noopener noreferrer">
                <span class="issue__counter">${index + 1}</span>
                <span class="issue__content-title">${item.TITLE}</span>
              </a>
							<p class="issue__content-desc">${item.DESCRIPTION}</p>
							<div class="issue__content-info"><a href="${item.LINK}" target="_blank" rel="noopener noreferrer">${item.HOSTNAME}</a> <span>${
        item.AUTHOR
      }</span></div>
						</div>
					</td>
				</tr>`
    })
    let links = linksCollection.join('')

    const currentYear = userResponse.date.split('-').shift()
    const currentDate = userResponse.date.split('-').pop()
    const month = userResponse.month.substring(0, 3).toLowerCase()
    const issueNo = userResponse.issue

    const htmlContent = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>*|MC:SUBJECT|*</title>
    <style>
    * {
      margin: 0;
      padding: 0;
    }

    *,
    :after,
    :before {
      box-sizing: border-box;
    }

    body,
    html {
      height: 100%;
    }

    .nws__title {
      padding-bottom: 20px;
      max-width: 720px;
      margin: auto;
      word-spacing: 5px;
    }

    #twiw__body {
      background-color: #f3e48e;
      font-family: trebuchet ms, lucida grande, lucida sans unicode, lucida sans, tahoma, sans-serif;
      font-weight: 400;
      font-size: 14px;
      -webkit-tap-highlight-color: transparent;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      padding: 20px;
      margin: auto;
    }

    #twiw__body a,
    #twiw__body {
      color: #424242;
    }

    #twiw__body a {
      text-decoration: none;
      border-bottom: 1px solid;
      padding-bottom: 3px;
    }

    #twiw__body a:hover {
      opacity: 0.85;
    }

    #twiw__body li,
    #twiw__body ul {
      list-style-type: none;
    }

    #twiw__body a,
    #twiw__body h1,
    #twiw__body h2,
    #twiw__body h3 {
      font-weight: 600;
    }

    #twiw__body h1 {
      font-size: 40px;
    }

    #twiw__body h2 {
      font-size: 26px;
    }

    #twiw__body h3 {
      font-size: 21px;
    }

    #twiw__body .issue {
      max-width: 720px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px 40px;
      box-shadow: 0 0 5px #ccc;
    }

    #twiw__body .issue__preview-info {
      height: 90px;
      display: block;
      padding: 15px 0;
      color: #333;
      text-align: center;
    }

    #twiw__body .issue__preview-info h2 {
      margin-bottom: 10px;
    }

    #twiw__body .issue__preview-info time {
      color: #424242;
      font-size: 13px;
      font-weight: 500;
    }

    #twiw__body .issue__content {
      min-height: 100px;
      padding: 16px 0 20px;
      word-break: break-word;
    }

    #twiw__body .issue__content > a {
      text-decoration: none;
      border-bottom: none;
      padding-bottom: 5px;
      display: flex;
      margin-bottom: 10px;
    }

    #twiw__body .issue__counter {
      display: inline-block;
      background-color: violet;
      height: 18px;
      width: 18px;
      border-radius: 50%;
      line-height: 20px;
      text-align: center;
      background-color: #3f51b5;
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      margin-right: 10px;
      margin-top: 5px;
      padding-left: 1px;
    }

    #twiw__body .issue__content-title {
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      color: #4054c2;
      font-size: 16px;
    }

    #twiw__body .issue__content-desc {
      margin-bottom: 15px;
      line-height: 25px;
      color: #000;
    }

    #twiw__body .issue__content-info {
      display: block;
    }

    #twiw__body .issue__content-info a {
      color: #ec407a;
      font-style: italic;
      font-weight: 300;
      border: none;
    }

    #twiw__body .issue__content-info span {
      float: right;
      color: #424242;
    }

    #twiw__body .line {
      margin: 10px 0 15px;
      border-width: 2px;
      font-weight: lighter;
      -o-border-image: linear-gradient(90deg, transparent, #f3e48e, #868686, transparent) 100% 1;
      border-image: linear-gradient(90deg, transparent, #f3e48e, #868686, transparent) 100% 1;
      border-style: solid;
      border-top: none;
      min-height: 1px;
    }

    #twiw__body .issue__footer {
      width: 720px;
      margin: 10px auto 0;
      text-align: center;
    }

    #twiw__body .issue__footer em {
      display: block;
      margin-top: 30px;
      margin-bottom: 10px;
    }

    #twiw__body .issue__footer p {
      margin-bottom: 10px;
    }

    #twiw__body .issue__footer a {
      display: inline-block;
      margin-top: 10px;
    }

    @media all and (max-width: 480px) {
      #twiw__body {
        padding: 5px !important;
      }

      #twiw__body .issue__footer {
        width: 100% !important;
      }

      #twiw__body h1.nws__title {
        font-size: 26px !important;
        text-align: center;
        margin-top: 10px !important;
      }

      #twiw__body .issue {
        padding: 12px !important;
      }

      #twiw__body .issue__content-title {
        font-size: 14px !important;
      }

      #twiw__body .issue__content-desc {
        font-size: 13px !important;
        word-break: break-all;
      }

      #twiw__body .issue__counter {
        display: none !important;
      }

      #twiw__body .issue__footer img {
        height: 40px;
        width: 100px;
      }

      #twiw__body .issue__footer,
      #twiw__body .issue__footer em,
      #twiw__body .issue__footer p {
        font-size: 11px;
        width: 90%;
        margin: 10px auto !important;
        text-align: center;
      }

      #twiw__body .issue__footer em {
        margin-top: 20px !important;
      }

      #twiw__body .issue__content-info a,
      #twiw__body .issue__content-info span {
        font-size: 12px;
      }
    }
  </style>
</head>
<body>
<div id="twiw__body">
<h1 class="nws__title">This Week In Web</h1>
<div class="issue"><div class="issue__preview-info"><h2 class="title">Issue #${issueNo}</h2><time>${
      userResponse.month
    } ${currentDate}, ${currentYear}</time></div><div class="line"></div><div class="issue__preview-content">
    <center>
    <table align="center" border="0" cellspacing="0" width="100%" height="100%" cellpadding="0">
    <tbody>
      ${links}
    </tbody>
    </table>
    </center>
</div>
</div>
<div class="issue__footer" style="padding-top:10px;margin-bottom:40px;">
    <div valign="top">
      <em>Copyright © *|CURRENT_YEAR|* *|LIST:COMPANY|*, All rights reserved.</em>
      <br>
      <p>*|IFNOT:ARCHIVE_PAGE|* *|LIST:DESCRIPTION|*</p>
      <p>Want to change how you receive these emails?</p>
      You can <a href="*|UPDATE_PROFILE|*">update your preferences</a> or <a href="*|UNSUB|*">unsubscribe from this list</a>
      <br>
      <br>*|IF:REWARDS|* *|HTML:REWARDS|* *|END:IF|*
    </div>
    </div>
</div>
</body>
</html>
		`

    // @TODO: update the content title
    const markdown = `---
path: "/issues/${currentYear}/${month}/${issueNo}"
published: false
date: "${userResponse.date}"
title: "Issue #${issueNo}"
contentTitle: "----"
---
<center>
	<table align="center" border="0" cellspacing="0" width="100%" height="100%" cellpadding="0">
    <tbody>${links}</tbody>
  </table>
</center>
`

    const templateFile = path.resolve(outDir, currentYear, month, `${issueNo}.html`)
    const markdownFile = path.resolve(outDir, currentYear, month, `${issueNo}.md`)

    fs.outputFile(templateFile, htmlContent, (err, done) => {
      if (err) console.log('Not able to generate template')
      else console.log('\n 🌱 Generated template file \n')
    })

    fs.outputFile(markdownFile, markdown, (err, done) => {
      if (err) console.log('Not able to generate markdown')
      else console.log(' 🌱  Generated markdown file \n')
    })
  })
})
