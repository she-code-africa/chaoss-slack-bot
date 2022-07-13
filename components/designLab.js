const { App } = require('@slack/bolt');

const channelId = 'CSFUFQ1HQ';

async function designChannel(message, client) {
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
            text: ' We are happy that you chose to join the design channel. ',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: ` If you're new to design, we have a study guide that you can use to learn at your own pace.`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: ` In case you need more clarification, feel free to reach out to the channel lead <#D03NY8AFL74>`,
          },
        },
      ],

      text: `Welcome to the design channel <@${message.user}>! 🎉.`,
    });
  } catch (error) {
    console.log(error);
  }
}

exports.designChannel = designChannel;
