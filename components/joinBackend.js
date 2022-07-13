const { App } = require('@slack/bolt');

const channelId = 'CSWU5TW14';

async function backendChannel(message, client) {
  try {
    return await client.chat.postMessage({
      channel: channelId,

      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Hello <@${message.user}> :wave:`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: ' We are happy that you chose to join the backend channel. ',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: ` If you're new to backend development, we have a study guide that you can use to learn at your own pace.`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: ` In case you need more clarification, feel free to reach out to the channel lead <#D03NY6P3J91> or any of the channel co-lead <#D03PN1DB7PA> and <#D03PN1DMBB2>`,
          },
        },
      ],

      text: `Welcome to the Backend Track, <@${message.user}>! 🎉.`,
    });
  } catch (error) {
    console.log(error);
  }
}

exports.backendChannel = backendChannel;
